import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

export const getGroupActions = (props) => (
  <div className="flex flex-row ">
   <BsEyeFill size={20} color="rgb(26, 151, 245)" className="mr-5 hover:cursor-pointer hover:opacity-25" onClick={props.handleView} />
   <AiFillEdit size={20} color="rgb(26, 151, 245)" className="hover:cursor-pointer hover:opacity-25" onClick={props.handleEdit}/>
  </div>
);


export const groupsHeader = [
  {
    field: "group_id",
    headerText: "Group ID",
    width: "170",
    textAlign: "Left",
  },
  {
    field: "org_name",
    headerText: "Organization",
    width: "135",
    textAlign: "Left",
  },
  {
    field: "cluster_name",
    headerText: "Cluster",
    width: "120",
    textAlign: "Left",
  },
  {
    field: "group_name",
    headerText: "Group Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "group_code",
    headerText: "Group Code",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "location",
    headerText: "Location",
    width: "130",
    textAlign: "Left",
  },
  {
    field: "time_of_meeting",
    headerText: "Meeting Time",
    width: "130",
    textAlign: "Left",
  },
  {
    field: "group_status",
    headerText: "Status",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "action",
    headerText: "Action",
    template: getGroupActions,
    width: "100",
    textAlign: "Left",
  },
];

export const membersHeader = [
  {
    field: "member_number",
    headerText: "Member Number",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "name",
    headerText: "Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "nid",
    headerText: "National ID",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "phone_number",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Left",
  },
];

export const adminsHeader = [
  {
    field: "phone_number",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Left",
  },
];

export const reasonsHeader = [
  {
    field: "reason_description",
    headerText: "Description",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "reason_amount",
    headerText: "Amount",
    width: "145",
    textAlign: "Left",
  },
];
