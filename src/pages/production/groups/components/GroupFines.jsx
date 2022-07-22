import React, { useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Filter,
  Group,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { findFinesTabActions } from "../../../../redux/actions/production/tabs/finesTab/fines_table";
import { bookHeader, reasonsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { dateToString, formatToPhone, getLoggedUserInfo, removeDecimal } from "../../../../utils/helpers";
import { Button } from "../../../../components";

const ProductionGroupFines = ({ finesProducionTable, findFinesTabActions, fHidden, setFhidden }) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  // Existing implementations start
  const [isEdit, setIsEdit] = useState(false);
  const [reason, setReason] = useState();
  const { access_level } = getLoggedUserInfo();

  const [paginater, setPaginater] = useState({
    page: 0,
    size: 50,
  });
  const { isLoading, data, totalItems } = finesProducionTable; 
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findFinesTabActions(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

  const fines = data?.filter((val) => val?.reason_type === "fine") || [];
  const socialFunds =
    data?.filter((val) => val?.reason_type === "social fund") || [];


    const bookArray = [];
    for (let i = 0; i < data?.data?.length; i++) {
      bookArray.push({
        ...data.data[i],
        request_date: dateToString(data.data[i].request_date,),
        last_update_by: formatToPhone(data.data[i].last_update_by,),
        linked_msisdn: formatToPhone(data.data[i].linked_msisdn),
        amount: removeDecimal(data.data[i].amount),
      });
    };
  // Existing implementations end
  console.log("============data___fines========================");
  console.log(data);
  console.log("============data___fines========================");

  const handleBook = () => {
    setFhidden(false);
  }
  const handleFines = () => {
    setFhidden(true);
  }

  return (
    <div class="flex flex-col">
      <div className="ml-auto p-5 pr-0">
        <div className="flex flex-row">
          <Button
            // icon={<BsPlus color="white" size={20}/> }
            bgColor="#1a97f5"
            color="white"
            text="Fines"
            borderRadius={5}
            handleClick={handleFines}
          />
          <div className="pr-2 pl-2">
            <Button
              // icon={<BsPlus color="white" size={20}/> }
              bgColor="#1a97f5"
              color="white"
              text="Book"
              borderRadius={5}
              style={{ marginLeft: 2 }}
              handleClick={handleBook}
            />
          </div>
        </div>
      </div>
      {!fHidden && (
        <div>
        <h2>Fines History</h2>
        <GridComponent
          dataSource={bookArray}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {bookHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
      )}
      {fHidden && (
        <div>
        <h2>Fines</h2>
        <GridComponent
          dataSource={data}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {reasonsHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
      )}
    </div>
  );
};

const mapState = ({ finesProducionTable }) => ({ finesProducionTable });
export default connect(mapState, {
  findFinesTabActions,
})(ProductionGroupFines);
