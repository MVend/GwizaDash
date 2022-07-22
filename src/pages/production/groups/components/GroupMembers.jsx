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
import { findMembersProductionTabActions } from "../../../../redux/actions/production/tabs/membersTab/membersProductionTabActions";
import { membersHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Dropdown } from "../../../../components";
import { BsFillBagPlusFill, BsPlus } from "react-icons/bs";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

const ProductionGroupMembers = ({
  membersProductionTabReducer,
  findMembersProductionTabActions,
  search,
}) => {
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
  const { isLoading, data, totalItems } = membersProductionTabReducer;
  const group = useParams();

  const member_info = {
    ...paginater,
    ...group,
  };

  useEffect(() => {
    findMembersProductionTabActions(member_info);
  }, []);

  // useEffect(() => {
  //   if (searchHint === "") return findMembersProductionTabActions(data);
  // }, [searchHint]);

  const handleEdit = (row) => {
    setIsEdit(true);
    setMember(row);
  };

  const handleSearch = () => search({ ...data, searchHint });

  // Existing implementations end

  console.log("=============member_data=======================");
  console.log(data);
  console.log("==============member_data======================");

  const dataSource =
    !isLoading && totalItems > 0
      ? data?.map((row) => ({
          ...row,
          name: row.first_name || "" + " " + row.last_name || "",
        }))
      : [];
  const membersMenu = [
    {
      text: "Add new member",
      iconCss: "e-icons e-plus",
    },
    {
      text: "Upload members",
      iconCss: "e-icons e-file",
    },
  ];
  return (
    <div className="flex flex-col">
      <Dropdown
        title="Add Members"
        items={membersMenu}
        iconCss="e-icons e-plus"
        cssClass="e-caret-hide"
        style={{
          background: "#1a97f5",
          color: "white",
          borderRadius: 5,
          marginLeft: "auto",
          height: 45,
        }}
      />
      <div className="pt-5">
        <h1>Members</h1>
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
            {membersHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
    </div>
  );
};

const mapState = ({ membersProductionTabReducer }) => ({
  membersProductionTabReducer,
});
export default connect(mapState, {
  findMembersProductionTabActions,
})(ProductionGroupMembers);
