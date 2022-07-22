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

import { employeesData, employeesGrid } from "../../../data/dummy";
import { Drawer, Header } from "../../../components";
import {
  deleteGroup,
  findAll,
  search,
} from "../../../redux/actions/groupsStaggingActions";
import { groupsHeader } from "./components/TableHeaders";
import { getLoggedUserInfo } from "../../../utils/helpers";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useStateContext } from "../../../contexts/ContextProvider";
import GroupForm from "./components/GroupForm";

const Groups = ({ groupsStagging, findAllGroups, deleteHandler }) => {
  const toolbarOptions = ["Add", "Search"];

  const navigation = useNavigate();
  const { drawer, setDrawer } = useStateContext();

  const editing = {
    allowDeleting: true,
    allowAdding: true,
    allowEditing: true,
  };
  // Existing implementations start
  const {
    isLoading,
    values: { rows, totalItems, currentPage, totalPages },
  } = groupsStagging;

  const [paginater, setPaginater] = useState({
    page: 0,
    size: 40,
  });
  useEffect(() => {
    findAllGroups(paginater);
  }, []);

  const handleView = (row) => {
    navigation(`/staging/groups/${row?.group_id}`, {
      replace: false,
      state: { row },
    });
  };

  const handleEdit = (row) => {
    setDrawer(true);
  };

  // Existing implementations end

  const dataSource =
    !isLoading && totalItems > 0
      ? rows?.map((row) => ({
          ...row,
          org_name: row?.organization?.org_name,
          cluster_name: row?.cluster?.cluster_name || "",
          location:
            row?.location?.district_name + "-" + row?.location?.sector_name,
          time_of_meeting: `${row?.day_of_meeting || ""} - ${
            row?.time_of_meeting || ""
          }`,
          handleView: () => handleView(row),
          handleEdit: () => handleEdit(row),
        }))
      : [];

  const clickHandler = (e) => {
    if (e?.item?.id === "StagingGroupsGrid_add") {
      setDrawer(true);
    }
  };

  return (
    <Header category="Staging - Groups">
      {drawer && (
        <Drawer title="New Group">
          <GroupForm />
        </Drawer>
      )}
      <GridComponent
        dataSource={dataSource}
        id="StagingGroupsGrid"
        width="auto"
        allowPaging
        allowSorting
        allowMultiSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbarClick={clickHandler}
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

const mapState = ({ groupsStagging }) => ({ groupsStagging });
export default connect(mapState, {
  findAllGroups: findAll,
  search,
  deleteHandler: deleteGroup,
})(Groups);
