import { BsEyeFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

export const getGroupActions = (props) => (
  <div className="flex flex-row ">
   <BsEyeFill size={20} color="grey" className="mr-5 hover:cursor-pointer hover:opacity-50" onClick={props.handleView} />
   <AiFillEdit size={20} color="grey" className="hover:cursor-pointer hover:opacity-50" onClick={props.handleEdit}/>
  </div>
);


export const groupsHeader = [
  {
    field: "group_id",
    headerText: "Group ID",
    width: "125",
    textAlign: "Left",
  },
  {
    field: "org_id",
    headerText: "Organization",
    width: "135",
    textAlign: "Left",
  },
  {
    field: "leader_name",
    headerText: "Group Leader",
    width: "135",
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
    width: "145",
    textAlign: "Left",
  },
  {
    field: "meeting_place",
    headerText: "Location",
    width: "130",
    textAlign: "Left",
  },
  {
    field: "meeting_time",
    headerText: "Meeting Time",
    width: "135",
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
    textAlign: "Center",
  },
];

// linked_msisdn: "0787123456"
// member_id: 8127
// member_number: 21
// mvd_member.dateofbirth: null
// mvd_member.gender: null
// mvd_member.marital_status: "Single"
// mvd_member.member_name: null
// mvd_member.member_nid: null
// record_id: 4352
// status: "active"

export const membersHeader = [
  {
    field: "member_number",
    headerText: "Member Number",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "mvd_member.member_name",
    headerText: "Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "mvd_member.gender",
    headerText: "Gender",
    width: "100",
    textAlign: "Left",
  },
  {
    field: "mvd_member.member_nid",
    headerText: "National ID",
    width: "140",
    textAlign: "Left",
  },
  {
    field: "mvd_member.marital_status",
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
    field: "status",
    headerText: "Status",
    width: "145",
    textAlign: "Left",
  },
];

export const adminsHeader = [
  {
    field: "admin_name",
    headerText: "Admin Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "group_name",
    headerText: "Group Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "status",
    headerText: "Status",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Left",
  },
];

export const shareBookHeader = [
  {
    field: "member_name",
    headerText: "Member Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "member_account",
    headerText: "Member Account",
    width: "150",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Linked Phone",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "transaction_amount",
    headerText: "Transaction Amount",
    width: "170",
    textAlign: "Left",
  },
  {
    field: "saving_amount",
    headerText: "Saving Type",
    width: "150",
    textAlign: "Left",
  },
  {
    field: "transction_type",
    headerText: "Transaction Type",
    width: "150",
    textAlign: "Left",
  },
];

export const shareAccountHeader = [
  {
    field: "created_at",
    headerText: "Date Created",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "account_number",
    headerText: "Account Number",
    width: "150",
    textAlign: "Left",
  },
  {
    field: "account_type",
    headerText: "Account type",
    width: "150",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Linked Phone",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "status",
    headerText: "Account Status",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "acc_balance",
    headerText: "Acc Balance",
    width: "150",
    textAlign: "Left",
  },
  {
    field: "available_balance",
    headerText: "Avai Balance",
    width: "150",
    textAlign: "Left",
  },
];
	
export const loansHeader = [
  {
    field: "member_name",
    headerText: "Member Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "created_at",
    headerText: "Request Date",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Phone Number",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "loan_duration",
    headerText: "Duration",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "loan_balance",
    headerText: "Loan Balance",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "status",
    headerText: "Loan Status",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "repay_amount",
    headerText: "Repay Amount",
    width: "145",
    textAlign: "Left",
  },
];
// Request Date	Request Name	Linked Phone	Request Status	Source	Last Updated	Amount
export const bookHeader = [
  {
    field: "request_date",
    headerText: "Request Date",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "request_name",
    headerText: "Request Name",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "linked_msisdn",
    headerText: "Linked Phon",
    width: "145",
    textAlign: "Left",
  },
  {
    field: "request_status",
    headerText: "Request Status",
    width: "145",
    textAlign: "Left",
  },
  // {
  //   field: "reason_description",
  //   headerText: "Source",
  //   width: "145",
  //   textAlign: "Left",
  // },
  {
    field: "last_update_by",
    headerText: "Last Updated",
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

export const productHeader = [
  {
    field: "product_name",
    headerText: "Name",
    with: "145",
    textAlign: "Left"
  },
  {
    field: "min_amount",
    headerText: "Min Amount",
    with: "145",
    textAlign: "center"
  },
  {
    field: "max_amount",
    headerText: "Max Amount",
    with: "145",
    textAlign: "center"
  },
  {
    field: "product_status",
    headerText: "Status",
    with: "145",
    textAlign: "Left"
  },
]

export const fineReasonsHeader = [
  {
    field: "type_name_kin",
    headerText: "Name",
    with: "145",
    textAlign: "Left"
  },
  {
    field: "fine_value",
    headerText: "Amount",
    with: "145",
    textAlign: "Center"
  },
  {
    field: "type_status",
    headerText: "Status",
    with: "145",
    textAlign: "Left"
  },
]

export const socialFundsReasonsHeader = [
  {
    field: "reason",
    headerText: "Reason",
    with: "145",
    textAlign: "Left"
  },
  {
    field: "is_fixed",
    headerText: "Fixed",
    with: "145",
    textAlign: "Center"
  },
  {
    field: "reason_status",
    headerText: "Status",
    with: "145",
    textAlign: "Left"
  },
  {
    field: "assistance_amount",
    headerText: "Amount",
    with: "145",
    textAlign: "Center"
  },
]