import React from "react";
import { BiTrash } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

export const getGroupActions = (props) => (
  <>
    <NavLink
      to={`/staging/groups/${props?.group_id}`}
      key={props?.group_id}
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#1a97f5" : "",
      })}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <span className="capitalize ">View</span>
    </NavLink>
    {"  "}
    <NavLink
      to={`/staging/groups/${props?.group_id}`}
      key={props?.group_id}
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#1a97f5" : "",
      })}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <BiTrash />
    </NavLink>
  </>
);

export const groupsHeader = [
  {
    field: "group_id",
    headerText: "Group ID",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "org_name",
    headerText: "Organization",
    width: "135",
    textAlign: "Center",
  },
  {
    field: "cluster_name",
    headerText: "Cluster",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "group_name",
    headerText: "Group Name",
    width: "145",
    textAlign: "Center",
  },
  {
    field: "group_code",
    headerText: "Group Code",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "location",
    headerText: "Location",
    width: "130",
    textAlign: "Center",
  },
  {
    field: "time_of_meeting",
    headerText: "Meeting Time",
    width: "130",
    textAlign: "Center",
  },
  {
    field: "group_status",
    headerText: "Status",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "action",
    headerText: "Action",
    template: getGroupActions,
    width: "100",
    textAlign: "Center",
  },
];

export const membersHeader = [
  {
    field: "member_number",
    headerText: "Member Number",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "name",
    headerText: "Name",
    width: "145",
    textAlign: "Center",
  },
  {
    field: "nid",
    headerText: "National ID",
    width: "140",
    textAlign: "Center",
  },
  {
    field: "phone_number",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Center",
  },
];

export const adminsHeader = [
  {
    field: "phone_number",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Center",
  },
];

export const reasonsHeader = [
  {
    field: "reason_description",
    headerText: "Description",
    width: "145",
    textAlign: "Center",
  },
  {
    field: "reason_amount",
    headerText: "Amount",
    width: "145",
    textAlign: "Center",
  },
];
