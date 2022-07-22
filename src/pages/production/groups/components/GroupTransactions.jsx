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
import { findTransactionsTabActions } from "../../../../redux/actions/production/tabs/transactionsTab/tranasction_table";
import { bookHeader, reasonsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  dateToString,
  formatToPhone,
  getLoggedUserInfo,
  removeDecimal,
} from "../../../../utils/helpers";

const ProductionGroupTransactions = ({
  transactionProductionTable,
  findTransactionsTabActions,
}) => {
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
  const { isLoading, data: resData, totalItems } = transactionProductionTable;
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findTransactionsTabActions(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

  // const fines = rows?.filter((val) => val?.reason_type === "fine") || [];
  // const socialFunds =
  //   rows?.filter((val) => val?.reason_type === "social fund") || [];
  // Existing implementations end
  const fines = [];
  for (let i = 0; i < resData?.data?.length; i++) {
    fines.push({
      ...resData.data[i],
      request_date: dateToString(resData.data[i].request_date),
      last_update_by: formatToPhone(resData.data[i].last_update_by),
      linked_msisdn: formatToPhone(resData.data[i].linked_msisdn),
      amount: removeDecimal(resData.data[i].amount),
    });
  }

  console.log("___:::::resData:::::____", resData);
  return (
    <div className="flex flex-col pt-5">
      <h1 className="pt-5 pb-5 font-bold">Transactions History</h1>
      <GridComponent
        dataSource={fines}
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
  );
};

const mapState = ({ transactionProductionTable }) => ({
  transactionProductionTable,
});
export default connect(mapState, {
  findTransactionsTabActions,
})(ProductionGroupTransactions);
