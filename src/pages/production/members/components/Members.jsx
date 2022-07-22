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
import {
  findAll,
  search,
} from "../../../../redux/actions/membersStaggingActions";
import { membersHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ProductionMembers = ({ membersTableReducer, findAll, search }) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  // Existing implementations start
  const [isEdit, setIsEdit] = useState(false);
  const [member, setMember] = useState();
  const [searchHint, setSearchHint] = useState("");
  const [paginater, setPaginater] = useState({
    page: 0,
    size: 1000,
  });
  const {
    isLoading,
    values: { rows, totalItems },
  } = membersTableReducer;
  const group = useParams();

  const data = {
    ...paginater,
    ...group,
  };

  useEffect(() => {
    findAll(data);
  }, []);

  // useEffect(() => {
  //   if (searchHint === "") return findAll(data);
  // }, [searchHint]);

  const handleEdit = (row) => {
    setIsEdit(true);
    setMember(row);
  };

  const handleSearch = () => search({ ...data, searchHint });

  // Existing implementations end

  const dataSource =
    !isLoading && totalItems > 0
      ? rows?.map((row) => ({
          ...row,
          name: row.first_name || "" + " " + row.last_name || "",
        }))
      : [];

  return (
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
        {membersHeader.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Search, Page]} />
    </GridComponent>
  );
};

const mapState = ({ membersTableReducer }) => ({ membersTableReducer });
export default connect(mapState, {
  findAll,
})(ProductionMembers);
