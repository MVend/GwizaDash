import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { TiTrash } from "react-icons/ti";

export const getCommonActions = (props) => {
  console.log(props?.group_status);
  return (
    <div className="flex flex-row ">
      <BsEyeFill
        size={20}
        color="rgb(26, 151, 245)"
        className="mr-5 hover:cursor-pointer hover:opacity-25"
        onClick={props.handleView}
      />
      {props?.group_status === "new" && +props?.access_level === 2 ? (
        <>
          <AiFillEdit
            size={20}
            color="rgb(26, 151, 245)"
            className="hover:cursor-pointer hover:opacity-25"
            onClick={props.handleEdit}
          />
          <TiTrash
            size={20}
            color="rgb(26, 151, 245)"
            className="hover:cursor-pointer hover:opacity-25"
            onClick={props.handleEdit}
          />
        </>
      ) : null}
    </div>
  );
};
export const getStatusBadge = (props) => {
  console.log(props?.group_status);
  return (
    <span className={props?.group_status === 'migrated' ? "e-badge e-badge-success" : "e-badge e-badge-info"}>
      {props?.group_status && props?.group_status.toUpperCase()}
    </span>
  );
};

export const groupsHeader = [
  {
    field: "group_id",
    headerText: "Group ID",
    width: "50",
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
    template: getStatusBadge,
    width: "100",
    textAlign: "Left",
  },
  {
    field: "action",
    headerText: "Action",
    template: getCommonActions,
    width: "100",
    textAlign: "Left",
  },
];

export const membersHeader = [
  {
    field: "member_number",
    headerText: "Member No",
    width: "50",
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
  {
    field: "dob",
    headerText: "Date of Birth",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "gender",
    headerText: "Gender",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "marital_status",
    headerText: "Marital Status",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "action",
    headerText: "Action",
    template: getCommonActions,
    width: "100",
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
