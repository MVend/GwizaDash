import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  Toolbar,
} from "@syncfusion/ej2-react-grids";


import {
  deleteGroup,
  findAll,
  search,
} from "../../../../redux/actions/production/groups";
import { groupsHeader } from "../components/TableHeaders";
import { getLoggedUserInfo } from "../../../../utils/helpers";
import { connect } from "react-redux";
import { Drawer, Header } from "../../../../components";
import { useStateContext } from "../../../../contexts/ContextProvider";

const Groups = ({ groupsProduction, findAllGroups, search, deleteHandler }) => {
  const toolbarOptions = ["Add", "Search"];
  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };
  const { drawer, setDrawer } = useStateContext()
  // Existing implementations start
  const [isEdit, setIsEdit] = useState(false);
  const [group, setGroup] = useState();
  const [searchHint, setSearchHint] = useState("");
  const { access_level } = getLoggedUserInfo();
  const [visible, setVisible] = useState(false);
  const {
    isLoading,
    data, 
    totalItems, 
    currentPage, 
    totalPages ,
  } = groupsProduction;

  const [paginater, setPaginater] = useState({
    page: 0,
    size: 5000,
  });
  useEffect(() => {
    findAllGroups(paginater);
  }, []);

  const navigation = useNavigate();
  // useEffect(() => {
  //   findAllGroups(paginater);
  // }, [paginater]);

  // useEffect(() => {
  //   if (searchHint === "") return findAllGroups(paginater);
  // }, [searchHint]);

  const handleEdit = (row) => {
    setIsEdit(true);
    console.log("edit::::::::::;", row)
    setGroup(row);
  };
  const handleView = (row) => {
    console.log("edit::::::::::;", row)
    navigation(`/production/groups/${row.group_id}`, {replace:true, state:{row}})
    setGroup(row);
  };

  const handleSearch = () => search({ ...paginater, searchHint });

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const newUploadHandler = () => {
    showDrawer();
  };

  const handleDelete = (row) => {
    deleteHandler(row.group_id);
  };
  // Existing implementations end
  const dataSource =
  !isLoading && totalItems > 0
    ? data?.map((row) => ({
        ...row,
        totalItems,
        handleView: () => handleView(row),
        handleEdit: () => handleEdit(row)
      }))
    : [];

  const handleCreateGroup = (e) => {
    if (e?.item?.id === "productionGroup_add") {
      setDrawer(true);
    }
  };

  return (
    <Header  category="Groups">
      {drawer && (
        <Drawer
         title="Add New Group">
          {/* <GroupForm /> */}
        </Drawer>
      )}
      <GridComponent
        dataSource={dataSource}
        id="productionGroup"
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        toolbarClick={handleCreateGroup}
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

const mapState = ({ groupsProduction }) => ({ groupsProduction });
export default connect(mapState, {
  findAllGroups: findAll,
  search,
  deleteHandler: deleteGroup,
})(Groups);
