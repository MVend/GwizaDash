export const getGroupActions = (props) => (
  <button
    type="button"
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.group_status}
  </button>
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
