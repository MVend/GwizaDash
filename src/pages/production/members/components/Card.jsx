const Card = (props) => {
    const member = props
    return (
        <div>
            <div className="e-card mb-5">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                <div className="e-card-header-title"> Member Information</div>
                </div>
            </div>
            <div className="e-card-content">
                <div className="flex">
                <div className="flex-auto w-32">
                    <div className="p-2">
                    <strong>Name:</strong> {member?.member_name || ""}
                    </div>

                    <div className="p-2">
                    <strong>National ID:</strong> {member?.member_nid}
                    </div>

                    <div className="p-2">
                    <strong>Phone Number:</strong> {member?.linked_msisdn}
                    </div>

                    <div className="p-2">
                    <strong>Status:</strong>{" "}
                    {member?.member_status && member?.member_status.toUpperCase()}
                    </div>
                </div>
                <div className="flex-auto w-32">
                    <div className="p-2">
                    <strong>Member status:</strong> {member?.marital_status}{" "}
                    </div>

                    <div className="p-2">
                    <strong>Created at:</strong>{" "}
                    {new Date(member?.date_created).toLocaleDateString()}
                    </div>

                    <div className="p-2">
                    <strong>Completion stages:</strong> {member?.reg_completion_stage}
                    </div>
                </div>
                </div>
                </div>
            </div> 
        </div>
    )
};


export default Card;