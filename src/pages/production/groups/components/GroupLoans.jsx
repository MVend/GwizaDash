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
import { deleteGroup } from "../../../../redux/actions/production/groups";
import { findLoanBookProductionTabActions } from "../../../../redux/actions/production/tabs/loanBookTab/loan_book_tab_table";
import { findLoanAccountProductionTabActions } from "../../../../redux/actions/production/tabs/loanAccountTab/loan_account_tab";
import { findLoanRequestsTabActions } from "../../../../redux/actions/production/tabs/loanRequestsTab/loan_requests_tab_table";
import { adminsHeader, bookHeader, loansHeader } from "./TableHeaders";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  dateToString,
  formatToPhone,
  getLoggedUserInfo,
  removeDecimal,
} from "../../../../utils/helpers";
import { Button } from "../../../../components";

const ProductionGroupLoans = ({
  loanBookProductTable,
  loanAccountProductTable,
  loanRequestsProductTable,
  findLoanBookProductionTabActions,
  findLoanAccountProductionTabActions,
  findLoanRequestsTabActions,
  deleteGroup,
  loanContent,
  setLoanContent,
}) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  // Existing implementations start
  const { access_level } = getLoggedUserInfo();
  const [paginater, setPaginater] = useState({
    page: 0,
    size: 1000,
  });
  const { isLoading, data, totalItems } = loanBookProductTable;
  const {
    isLoading: loading,
    data: resData,
    totalItems: allItems,
  } = loanAccountProductTable;
  const {
    isLoading: rLoading,
    data: requestData,
    totalItems: reqItems,
  } = loanRequestsProductTable;
  const group = useParams();

  const group_info = {
    ...paginater,
    ...group,
  };

  useEffect(() => {
    findLoanBookProductionTabActions(group_info);
    findLoanAccountProductionTabActions(group_info);
    findLoanRequestsTabActions(group_info);
  }, []);

  const deleteAdmin = (admin_id) => {
    const confirmed = window.confirm("Are you sure? This cannot be undone");
    if (confirmed) return deleteGroup(admin_id);
  };

  const isNotEmpty = !(!isLoading && totalItems < 1);
  // Existing implementations end
  console.log("=============dataSourcexxxx-xxxxx)=======================");
  console.log(
    data,
    group_info,
    "res__data:::",
    resData,
    "request_DATA::::",
    requestData
  );
  console.log("============dataSourcexxxxx-xxxxx)========================");
  // const data = []
  const bookArray = [];
  for (let i = 0; i < data?.data?.length; i++) {
    bookArray.push({
      ...data.data[i],
      request_date: dateToString(data?.data[i]?.request_date),
      linked_msisdn: formatToPhone(data?.data[i]?.linked_msisdn),
      loan_balance: removeDecimal(data?.data[i]?.loan_balance),
      repayt_amount: removeDecimal(data?.data[i]?.repayt_amount),
    });
  }

  const handleShow = (name) => {
    switch (name) {
      case "book":
        setLoanContent({
          book: true,
          request: false,
          account: false,
        });
        break;
      case "request":
        setLoanContent({
          book: false,
          request: true,
          account: false,
        });
        break;
      case "account":
        setLoanContent({
          book: false,
          request: false,
          account: true,
        });
        break;
      default:
        setLoanContent({
          book: true,
          request: false,
          account: false,
        });
        break;
    }
  };

  return (
    <div class="flex flex-col">
      <div className="ml-auto p-5 pr-0">
        <div className="flex flex-row">
          <Button
            bgColor="#1a97f5"
            color="white"
            text="Request"
            borderRadius={5}
            handleClick={() => handleShow("request")}
          />
          <div className="pr-2 pl-2">
            <Button
              bgColor="#1a97f5"
              color="white"
              text="Accounts"
              borderRadius={5}
              style={{ marginLeft: 2 }}
              handleClick={() => handleShow("account")}
            />
          </div>
          <Button
            bgColor="#1a97f5"
            color="white"
            text="Book"
            borderRadius={5}
            style={{ marginLeft: 2 }}
            handleClick={() => handleShow("book")}
          />
        </div>
      </div>
      {loanContent.book && (
        <div>
          <h1>Book</h1>
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
              {bookHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>
      )}
      {loanContent.request && (
        <div>
          <h1>Requests</h1>
          <GridComponent
            dataSource={requestData}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageCount: 5 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {loansHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>
      )}
      {loanContent.account && (
        <div>
          <h1>Account</h1>
          <GridComponent
            dataSource={resData}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageCount: 5 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {loansHeader.map((item, index) => (
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

const mapState = ({
  loanBookProductTable,
  loanAccountProductTable,
  loanRequestsProductTable,
}) => ({
  loanBookProductTable,
  loanAccountProductTable,
  loanRequestsProductTable,
});
export default connect(mapState, {
  findLoanBookProductionTabActions,
  findLoanAccountProductionTabActions,
  findLoanRequestsTabActions,
  deleteGroup,
})(ProductionGroupLoans);
