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
  remove,
} from "../../../../redux/actions/adminsStaggingActions";
import { adminsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getLoggedUserInfo } from "../../../../utils/helpers";

const GroupAdmins = ({ adminsStagging, findAll, remove }) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  // Existing implementations start
  const { access_level } = getLoggedUserInfo();
  const [paginater, setPaginater] = useState({
    page: 0,
    size: 1000,
  });
  const {
    isLoading,
    values: { rows, totalItems },
  } = adminsStagging;
  const group = useParams();

  const data = {
    ...paginater,
    ...group,
  };

  useEffect(() => {
    findAll(data);
  }, []);

  const deleteAdmin = (admin_id) => {
    const confirmed = window.confirm("Are you sure? This cannot be undone");
    if (confirmed) return remove(admin_id);
  };

  const isNotEmpty = !(!isLoading && totalItems < 1);
  // Existing implementations end

  return (
    <GridComponent
      dataSource={rows}
      width="auto"
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      toolbar={toolbarOptions}
    >
      <ColumnsDirective>
        {adminsHeader.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Search, Page]} />
    </GridComponent>
  );
};

const mapState = ({ adminsStagging }) => ({ adminsStagging });
export default connect(mapState, {
  findAll,
  remove,
})(GroupAdmins);
