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
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import {
  findAll,
} from "../../../../redux/actions/membersStaggingActions";
import { membersHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Drawer } from "../../../../components";
import MemberForm from "./MemberForm";
import { useStateContext } from "../../../../contexts/ContextProvider";

const GroupMembers = ({ membersStagging, findAll }) => {
  const toolbarOptions = ["Add", "Search"];
  const editing = {
    allowDeleting: true,
    allowAdding: true,
    allowEditing: true,
  };

  // Existing implementations start
  const [paginater, setPaginater] = useState({
    page: 0,
    size: 1000,
  });
  const {
    isLoading,
    values: { rows, totalItems },
  } = membersStagging;
  const group = useParams();
  const { drawer, setDrawer } = useStateContext();

  const data = {
    ...paginater,
    ...group,
  };

  useEffect(() => {
    findAll(data);
  }, []);

  // Existing implementations end

  const dataSource =
    !isLoading && totalItems > 0
      ? rows?.map((row) => ({
          ...row,
          name: row.first_name || "" + " " + row.last_name || "",
        }))
      : [];

  const clickHandler = (e) => {
    if (e?.item?.id === "StagingMembersGrid_add") {
      setDrawer(true);
    }
  };

  return (
    <GridComponent
      dataSource={dataSource}
      id="StagingMembersGrid"
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
        <Drawer title="New Member">
          <MemberForm />
        </Drawer>
      )}
      <ColumnsDirective>
        {membersHeader.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
    </GridComponent>
  );
};

const mapState = ({ membersStagging }) => ({ membersStagging });
export default connect(mapState, {
  findAll,
})(GroupMembers);
