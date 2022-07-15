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
import { findAll } from "../../../../redux/actions/reasonsStaggingActions";
import { reasonsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getLoggedUserInfo } from "../../../../utils/helpers";

const GroupReasons = ({ reasonsStagging, findAll }) => {
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
  const {
    isLoading,
    values: { rows, totalItems },
  } = reasonsStagging;
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findAll(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

  const fines = rows?.filter((val) => val?.reason_type === "fine") || [];
  const socialFunds =
    rows?.filter((val) => val?.reason_type === "social fund") || [];
  // Existing implementations end

  return (
    <div class="flex">
      <div class="flex-auto w-32 pr-5">
        <h2>Fines</h2>
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
            {reasonsHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>

      <div class="flex-auto w-32 pl-5">
        <h2>Socialfund </h2>
        <GridComponent
          dataSource={socialFunds}
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
    </div>
  );
};

const mapState = ({ reasonsStagging }) => ({ reasonsStagging });
export default connect(mapState, {
  findAll,
})(GroupReasons);
