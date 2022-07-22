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
import { bookHeader, reasonsHeader } from "./TableHeaders";
import { findSocialFundBookProductionTabActions } from "../../../../redux/actions/production/tabs/socialFundBookTab/social_fund_book_table";
import { findSocialFundRequestsProductionTabActions } from "../../../../redux/actions/production/tabs/socialFundRequestsTab/social_fund_requests_table";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  dateToString,
  formatToPhone,
  getLoggedUserInfo,
  removeDecimal,
} from "../../../../utils/helpers";
import { Button } from "../../../../components";

const ProductionGroupSocialFunds = ({
  socialFundBookTable,
  socialFundRequestsTable,
  findSocialFundBookProductionTabActions,
  findSocialFundRequestsProductionTabActions,
  sfContent, 
  setSfContent
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
  const { isLoading, data, totalItems } = socialFundBookTable;
  const {
    isLoading: loading,
    data: resData,
    totalItems: allItems,
  } = socialFundRequestsTable;
  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findSocialFundBookProductionTabActions(data);
    findSocialFundRequestsProductionTabActions(data);
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };

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

  const handleBook = () => {
    setSfContent({
      book: true,
      request: false,
      account: false
    });
  };

  const handleAccount = () => {
    setSfContent({
      book: false,
      request: false,
      account: true
    });
  };

  const handleRequest = () => {
    setSfContent({
      book: false,
      request: true,
      account: false
    });
  }
  console.log(
    "==============findSocialFundBookProductionTabActions======================"
  );
  console.log(data, "_________________________________", resData);
  console.log(
    "==============findSocialFundBookProductionTabActions======================"
  );
  return (
    <div class="flex flex-col">
      <div className="ml-auto p-5 pr-0">
        <div className="flex flex-row">
          <Button
            // icon={<BsPlus color="white" size={20}/> }
            bgColor="#1a97f5"
            color="white"
            text="Request"
            borderRadius={5}
            handleClick={handleRequest}
          />
          <div className="pr-2 pl-2">
            <Button
              // icon={<BsPlus color="white" size={20}/> }
              bgColor="#1a97f5"
              color="white"
              text="Accounts"
              borderRadius={5}
              style={{ marginLeft: 2 }}
              handleClick={handleAccount}
            />
          </div>
          <Button
            bgColor="#1a97f5"
            color="white"
            text="Book"
            borderRadius={5}
            style={{ marginLeft: 2 }}
            handleClick={handleBook}
          />
        </div>
      </div>
      {sfContent.book && (
        <div>
          <h1>Book</h1>
          <GridComponent
            dataSource={bookArray}
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
      {sfContent.request && (
        <div>
          <h1>Requests</h1>
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
              {reasonsHeader.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
          </GridComponent>
        </div>
      )}
      {sfContent.account && (
        <div>
          <h1>Account</h1>
          <GridComponent
            dataSource={bookArray}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageCount: 5 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {reasonsHeader.map((item, index) => (
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

const mapState = ({ socialFundBookTable, socialFundRequestsTable }) => ({
  socialFundBookTable,
  socialFundRequestsTable,
});
export default connect(mapState, {
  findSocialFundBookProductionTabActions,
  findSocialFundRequestsProductionTabActions,
})(ProductionGroupSocialFunds);
