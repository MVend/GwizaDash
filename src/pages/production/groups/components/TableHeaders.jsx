import { BsEyeFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

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
    textAlign: "Center",
  },
  {
    field: "org_id",
    headerText: "Organization",
    width: "135",
    textAlign: "Center",
  },
  {
    field: "leader_name",
    headerText: "Group Leader",
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
    field: "meeting_place",
    headerText: "Location",
    width: "130",
    textAlign: "Center",
  },
  {
    field: "meeting_time",
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

