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

import { shareBookHeader, shareAccountHeader } from "./TableHeaders";
import { findSharedSavingsAccountProductionTabActions } from "../../../../redux/actions/production/tabs/shareSaveAccountTab/share_save_account_table";
import { findSharedBookProductionTabActions } from "../../../../redux/actions/production/tabs/shareBook/share_book_table";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { dateToString, formatToPhone, getLoggedUserInfo, removeDecimal } from "../../../../utils/helpers";
import { Button } from "../../../../components";

const ProductionGroupReasons = ({ sharedSavingsAccountProductTable, sharedBook, findSharedSavingsAccountProductionTabActions, findSharedBookProductionTabActions, setHidden, hidden }) => {
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
  } = sharedSavingsAccountProductTable;
  const {
    isLoading: loading,
    data: resData,
    totalItems: allItems
  } = sharedBook

  const group = useParams();

  useEffect(() => {
    const data = {
      ...paginater,
      ...group,
    };
    findSharedSavingsAccountProductionTabActions(data);
    findSharedBookProductionTabActions(data)
  }, []);

  const handleEdit = (row) => {
    setIsEdit(true);
    setReason(row);
  };


  const shares = [];
  for (let i = 0; i < data?.data?.length; i++) {
    shares.push({
      ...data.data[i],
      date_created: dateToString(data.data[i].date_created,),
      linked_msisdn: formatToPhone(data.data[i].linked_msisdn),
      account_balance: removeDecimal(data.data[i].account_balance),
      available_balance: removeDecimal(data.data[i].available_balance),
    });
  }
console.log("::::::::shares:::::", data);
console.log("::::::::book:::::", resData);
  const handleBook = () => {
    setHidden(false);
  }
  const handleAccount = () => {
    setHidden(true);
  }

  return (
    <div className="flex flex-col">
      <div className="ml-auto p-5 pr-0">
        <div className="flex flex-row">
          <Button 
            // icon={<BsPlus color="white" size={20}/> } 
            bgColor="#1a97f5" 
            color="white" 
            text="Accounts"
            borderRadius={5}
            handleClick={handleAccount}
          />
          <div className="pr-2 pl-2">
            <Button 
              // icon={<BsPlus color="white" size={20}/> } 
              bgColor="#1a97f5" 
              color="white" 
              text="Share Book"
              borderRadius={5}
              style={{marginLeft: 2}}
              handleClick={handleBook}
            />
          </div>
          {/* <Button 
            bgColor="#1a97f5" 
            color="white" 
            text="Admins"
            borderRadius={5}
            style={{marginLeft: 2}}
          /> */}
        </div>
      </div>
        {!hidden && (
          <div>
            <h1>Share Book</h1>
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
                {shareBookHeader.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
              <Inject services={[Search, Page]} />
            </GridComponent>
          </div>
        )}
        {hidden && (
          <div>
          <h1>Share Savings Account </h1>
          <GridComponent
            dataSource={shares}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageCount: 5 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {shareAccountHeader.map((item, index) => (
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

const mapState = ({ sharedSavingsAccountProductTable, sharedBook }) => ({ sharedSavingsAccountProductTable, sharedBook });
export default connect(mapState, {
  findSharedSavingsAccountProductionTabActions,
  findSharedBookProductionTabActions
})(ProductionGroupReasons);
