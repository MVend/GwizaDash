import { BsEyeFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

export const getGroupActions = (props) => (
  <div className="flex flex-row ">
   <BsEyeFill size={20} color="grey" className="mr-5 hover:cursor-pointer hover:opacity-50" onClick={props.handleView} />
   <AiFillEdit size={20} color="grey" className="hover:cursor-pointer hover:opacity-50" onClick={props.handleEdit}/>
  </div>
);


export const membersHeader = [
  {
    field: "member_id",
    headerText: "Member ID",
    width: "130",
    textAlign: "Left",
  },
  {
    field: "member_name",
    headerText: "Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "gender",
    headerText: "Gender",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "member_nid",
    headerText: "National ID",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "marital_status",
    headerText: "Marital status",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Phone Number",
    width: "145",
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


export const adminsHeader = [
  {
    field: "linked_msisdn",
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

