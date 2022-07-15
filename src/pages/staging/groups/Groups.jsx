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

import { employeesData, employeesGrid } from "../../../data/dummy";
import { Header } from "../../../components";
import {
  deleteGroup,
  findAll,
  search,
} from "../../../redux/actions/groupsStaggingActions";
import { groupsHeader } from "./components/TableHeaders";
import { getLoggedUserInfo } from "../../../utils/helpers";
import { connect } from "react-redux";

const Groups = ({ groupsStagging, findAllGroups, search, deleteHandler }) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  // Existing implementations start
  const [isEdit, setIsEdit] = useState(false);
  const [group, setGroup] = useState();
  const [searchHint, setSearchHint] = useState("");
  const { access_level } = getLoggedUserInfo();
  const [visible, setVisible] = useState(false);
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

  // useEffect(() => {
  //   findAllGroups(paginater);
  // }, [paginater]);

  // useEffect(() => {
  //   if (searchHint === "") return findAllGroups(paginater);
  // }, [searchHint]);

  const handleEdit = (row) => {
    setIsEdit(true);
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
      ? rows?.map((row) => ({
          ...row,
          org_name: row?.organization?.org_name,
          cluster_name: row?.cluster?.cluster_name || "",
          location:
            row?.location?.district_name + "-" + row?.location?.sector_name,
          time_of_meeting: `${row?.day_of_meeting || ""} - ${
            row?.time_of_meeting || ""
          }`,
        }))
      : [];

  return (
    <Header category="Staging" title="Groups">
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
        <Inject services={[Search, Page]} />
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
