const Card = (props) => {
    const group = props
    console.log(':::::', group)
    return (
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
                    {group?.meeting_time}
                    </div>

                    {/* <div className="p-2">
                    <strong>Location:</strong>{" "}
                    {group?.location &&
                        `${group?.location.district_name} - ${group?.location.sector_name}`}
                    </div> */}
                    <div className="p-2">
                    <strong>Approvals:</strong> {group?.totalItems}
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
    )
};


export default Card;