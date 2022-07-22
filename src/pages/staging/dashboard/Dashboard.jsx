import React, { useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Filter,
  Toolbar,
  Group,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../../../components";
import { groupsHeader } from "../groups/components/TableHeaders";
import { getLoggedUserInfo } from "../../../utils/helpers";
import { connect } from "react-redux";
import { getDashboardData } from "../../../redux/actions/dashboardStaggingActions";

const Dashboard = ({ getData, data: { values: data, isLoading }, data: dt }) => {
  useEffect(() => {
    getData();
  }, []);

  const toolbarOptions = ["Search", "Add"];

  const editing = { allowDeleting: true, allowEditing: true };
  // Existing implementations start
  // Existing implementations end

  const dataSource = [];

  return (
    <Header category="Staging - Dashboard">
      <GridComponent
        dataSource={dataSource}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {groupsHeader.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </Header>
  );
};

const mapState = ({ dashboardStagging }) => ({ data: dashboardStagging });
export default connect(mapState, { getData: getDashboardData })(Dashboard);
