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
import { findSocialFundsProductsProductionTabActions } from "../../../../redux/actions/production/tabs/settings/socialFundsProduct/social_fund_product_table";
import { findGoupAdminProductionActions } from "../../../../redux/actions/production/tabs/settings/groupAdmins/group_admins_table";
import { adminsHeader, productHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { formatToPhone, getLoggedUserInfo } from "../../../../utils/helpers";
import { Button, Dropdown } from "../../../../components";

import ProductionGroupReasons from "./GroupReasons";

const ProductionGroupSettings = ({
  socialFundsProductsTable,
  getGroupAdmin,
  findSocialFundsProductsProductionTabActions,
  findGoupAdminProductionActions,
  settingContent,
  setSettingContent,
}) => {
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
  const { isLoading, data, totalItems } = socialFundsProductsTable;
  const {
    isLoading: loading,
    data: resData,
    totalItems: allItems,
  } = getGroupAdmin;
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findSocialFundsProductsProductionTabActions(data);
    findGoupAdminProductionActions(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

  const admins = [];
  for (let i = 0; i < resData.length; i++) {
    admins.push({
      ...resData[i],
      status: resData[i].status,
      linked_msisdn: formatToPhone(resData[i].linked_msisdn),
    });
  }

  const handleAdmin = () => {
    setSettingContent({
      product: false,
      reason: {
        fines: false,
        funds: false,
      },
      admin: true,
    });
  };
  const handleProducts = () => {
    setSettingContent({
      product: true,
      reason: {
        fines: false,
        funds: false,
      },
      admin: false,
    });
  };
  const handleReasons = () => {
    setSettingContent({
      product: false,
      reason: {
        fines: false,
        funds: true,
      },
      admin: false,
    });
  };
  const productMenu = [
    {
      text: "Create Product",
      iconCss: "e-icons e-plus",
    },
    {
      text: "Social Fund",
      iconCss: "e-icons e-plus",
    },
    {
      text: "Loan",
      iconCss: "e-icons e-plus",
    },
  ];
  const reasonMenu = [
    {
      text: "Social Fund Reason",
      iconCss: "e-icons e-plus",
    },
    {
      text: "Fine Reason",
      iconCss: "e-icons e-plus",
    },
  ];
  const handleProductClick = () => {
    console.log("hello_clicked");
  };
  const handleProductSelect = (menu) => {
    console.log("___", menu.item.properties.text);
  };
  const handleReasonSelect = (menu) => {
    if (menu.item.properties.text === "Social Fund Reason") {
      setSettingContent({
        product: false,
        reason: {
          fines: false,
          funds: true,
        },
        admin: false,
      });
    }
    if (menu.item.properties.text === "Fine Reason") {
      setSettingContent({
        product: false,
        reason: {
          fines: true,
          funds: false,
        },
        admin: false,
      });
    }
  };
  return (
    <div className="flex flex-col">
      <div className="ml-auto p-5 pr-0">
        <div className="flex flex-row">
          <Dropdown
            title="Products"
            onClick={handleProducts}
            onSelect={handleProductSelect}
            iconCss="e-icons e-plus"
            cssClass="e-caret-hide"
            style={{
              background: "#1a97f5",
              color: "white",
              borderRadius: 5,
              marginRight: 10,
            }}
          />
          <Dropdown
            title="Reasons"
            onSelect={handleReasonSelect}
            items={reasonMenu}
            iconCss="e-icons e-plus"
            cssClass="e-caret-hide"
            style={{
              background: "#1a97f5",
              color: "white",
              borderRadius: 5,
              marginRight: 10,
            }}
          />
          <Button
            bgColor="#1a97f5"
            color="white"
            text="Admins"
            borderRadius={5}
            style={{ marginLeft: 2 }}
            handleClick={handleAdmin}
          />
        </div>
      </div>
      <ProductionGroupReasons
        settingContent={settingContent}
        setSettingContent={setSettingContent}
      />
      {settingContent.product && (
        <div>
          <h1>Social Fund Products</h1>
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
              {productHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>
      )}
      {settingContent.admin && (
        <div>
          <h1>Group Admin</h1>
          <GridComponent
            dataSource={admins}
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
        </div>
      )}
    </div>
  );
};

const mapState = ({ socialFundsProductsTable, getGroupAdmin }) => ({
  socialFundsProductsTable,
  getGroupAdmin,
});
export default connect(mapState, {
  findSocialFundsProductsProductionTabActions,
  findGoupAdminProductionActions,
})(ProductionGroupSettings);
