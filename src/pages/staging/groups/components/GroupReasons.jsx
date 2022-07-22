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
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { findAll } from "../../../../redux/actions/reasonsStaggingActions";
import { reasonsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getLoggedUserInfo } from "../../../../utils/helpers";
import { Drawer } from "../../../../components";
import { useStateContext } from "../../../../contexts/ContextProvider";
import ReasonForm from "./ReasonForm";

const GroupReasons = ({ reasonsStagging, findAll }) => {
  const toolbarOptions = ["Add", "Search"];
  const editing = {
    allowDeleting: true,
    allowAdding: true,
    allowEditing: true,
  };
  const { drawer, setDrawer } = useStateContext();

  // Existing implementations start

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
  };

  const fines = rows?.filter((val) => val?.reason_type === "fine") || [];
  const socialFunds =
    rows?.filter((val) => val?.reason_type === "social fund") || [];
  // Existing implementations end

  const clickHandler = (e) => {
    if (e?.item?.id === "StagingReasonGrid_add") {
      setDrawer(true);
    }
  };
  return (
    <div class="flex">
      <div class="flex-auto w-32 pr-5">
        <h2>Fines</h2>
        <GridComponent
          dataSource={fines}
          id="StagingReasonGrid"
          width="auto"
          allowPaging
          allowSorting
          allowMultiSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbarClick={clickHandler}
          toolbar={toolbarOptions}
        >
          {drawer && (
            <Drawer title="New Reason">
              <ReasonForm />
            </Drawer>
          )}
          <ColumnsDirective>
            {reasonsHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar]} />
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
          <Inject services={[Search, Page, Toolbar]} />
        </GridComponent>
      </div>
    </div>
  );
};

const mapState = ({ reasonsStagging }) => ({ reasonsStagging });
export default connect(mapState, {
  findAll,
})(GroupReasons);
