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
import { findFinesReasonsProductionActions } from "../../../../redux/actions/production/tabs/settings/finesReasons/fines_reasons_table";
import { findSocialFundsReasonsProductionTabActions } from "../../../../redux/actions/production/tabs/settings/socialFundsReasons/social_funds_reasons";
import { fineReasonsHeader, reasonsHeader, socialFundsReasonsHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getLoggedUserInfo } from "../../../../utils/helpers";

const ProductionGroupReasons = ({ getFineReasons, socialFundsReasonsTable, findFinesReasonsProductionActions, findSocialFundsReasonsProductionTabActions, settingContent, setSettingContent }) => {
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
    data,
    totalItems,
  } = getFineReasons;
  const {
    isLoading: loading,
    data: resData,
    totalItems: allItems,
  } = socialFundsReasonsTable;
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findFinesReasonsProductionActions(data);
    findSocialFundsReasonsProductionTabActions(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

  const fines = data.data;
  const socialFunds = resData

  return (
    <div class="flex flex-col">
      {settingContent.reason.fines && (
        <div>
          <h1>Fine Reasons</h1>
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
              {fineReasonsHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>

      )}
      {settingContent.reason.funds && (
        <div>
          <h1>Social Fund Reasons </h1>
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
              {socialFundsReasonsHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>

      )}
    </div>
  );
};

const mapState = ({ getFineReasons, socialFundsReasonsTable }) => ({ getFineReasons, socialFundsReasonsTable });
export default connect(mapState, {
  findFinesReasonsProductionActions,
  findSocialFundsReasonsProductionTabActions
})(ProductionGroupReasons);
