import React, { useEffect, useState } from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import { useParams } from "react-router-dom";
import { Header } from "../../../components";
import { findOne } from "../../../redux/actions/groupsStaggingActions";
import {
  findAll as findAllApprovals,
  create,
} from "../../../redux/actions/approvalsStaggingActions";
import { getLoggedUserInfo } from "../../../utils/helpers";
import { connect } from "react-redux";
import {
  StagingGroupAdmins,
  StagingGroupMembers,
  StagingGroupReasons,
} from "../..";

const GroupInfo = ({
  groupsStagging,
  findOne,
  findAllApprovals,
  approvalsStagging: {
    btnLoading,
    values: { rows, totalItems },
  },
  create,
}) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  // Existing implementations start
  const {
    detailsLoading,
    oneGroup: { members, reasons, ...group },
  } = groupsStagging;
  const group_id = useParams();
  const { id: user_id, access_level } = getLoggedUserInfo();

  useEffect(() => {
    findOne(group_id);
    // findAllApprovals({ ...group_id });
  }, []);

  const approve = () => create(group_id);

  const youApproved = !!(
    totalItems > 0 && rows.find((r) => r.user_id === user_id)
  );
  // Existing implementations end

  const headerText = [
    { text: "Members" },
    { text: "Admins" },
    { text: "Fines and Socialfund" },
  ];

  const membersTab = () => <StagingGroupMembers />;
  const adminsTab = () => <StagingGroupAdmins />;
  const reasonsTab = () => <StagingGroupReasons />;
  return (
    <Header category="Staging" title={`Groups/${group?.group_name || ""}`}>
      <div>
        <div className="e-card mb-5">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-header-title"> Group Information</div>
            </div>
          </div>
          <div className="e-card-content">
            <div className="flex">
              <div className="flex-auto w-32">
                <div className="p-2">
                  <strong>Name:</strong> {group?.group_name || ""}
                </div>

                <div className="p-2">
                  <strong>Group ID:</strong> {group?.group_id}
                </div>

                <div className="p-2">
                  <strong>Group Code:</strong> {group?.group_code}
                </div>

                <div className="p-2">
                  <strong>Status:</strong>{" "}
                  {group?.group_status && group?.group_status.toUpperCase()}
                </div>
              </div>
              <div className="flex-auto w-32">
                <div className="p-2">
                  <strong>Created at:</strong>{" "}
                  {new Date(group?.date_created).toLocaleDateString()}
                </div>

                <div className="p-2">
                  <strong>Meeting Time:</strong> {group?.day_of_meeting}{" "}
                  {group?.time_of_meeting}
                </div>

                <div className="p-2">
                  <strong>Location:</strong>{" "}
                  {group?.location &&
                    `${group?.location.district_name} - ${group?.location.sector_name}`}
                </div>
                <div className="p-2">
                  <strong>Approvals:</strong> {totalItems}
                </div>
              </div>
              <div className="flex-auto w-32">
                <div className="p-2">
                  <strong>Share value:</strong> {group?.share_value}
                </div>

                <div className="p-2">
                  <strong>Social fund amount:</strong>{" "}
                  {group?.socialfund_amount}
                </div>

                <div className="p-2">
                  <strong>Max Weekly Share:</strong> {group?.max_weekly_shares}
                </div>
              </div>

              <div className="flex-auto w-32">
                <div className="p-2">
                  <strong>Interest rate:</strong> {group?.interest_rate}
                </div>

                <div className="p-2">
                  <strong>Max loan duration:</strong> {group?.max_loan_duration}
                </div>

                <div className="p-2">
                  <strong>Loan ratio:</strong> {group?.loan_to_savings_ratio}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabComponent>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={membersTab} />
          <TabItemDirective header={headerText[1]} content={adminsTab} />
          <TabItemDirective header={headerText[2]} content={reasonsTab} />
        </TabItemsDirective>
      </TabComponent>
    </Header>
  );
};

const mapState = ({ groupsStagging, approvalsStagging }) => ({
  groupsStagging,
  approvalsStagging,
});
export default connect(mapState, {
  findOne,
  findAllApprovals,
  create,
})(GroupInfo);
