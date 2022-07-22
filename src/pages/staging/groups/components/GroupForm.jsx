import { useState, useEffect, useRef, useReducer } from "react";
import * as React from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

let formObject;
const GroupForm = () => {
  const userNameRef = useRef(null);
  const [formation_time, setformation_time] = useState("");
  const initialState = {
    group_name: '',
    day_of_meeting: '',
    time_of_meeting: '',
    formation_time: '',
    share_value: '',
    max_weekly_shares: '',
    socialfund_amount: '',
    loan_to_savings_ratio: '',
    interest_rate: '',
    max_loan_duration: '',
    village_id: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    meeting_place: '',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.field]: action.value };

      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const dateChangeHandler = (event) => {
    setformation_time(event.value);
  };

  const update = (field) => (event) => {
    //update action is dispatched to update the email and password state value
    dispatch({ type: "update", field, value: event.value });
  };

  useEffect(() => {
    userNameRef.current.focusIn();
    const options = {
      // validation rules
      rules: {
        group_name: {
          required: [true, "* Please enter group name"],
        },
        formation_time: {
          required: [true, "* Please enter formation time"],
        },
        meeting_place: {
          required: [true, "* Please enter meeting place"],
        },
      },
    };
    // Initialize the form validator
    formObject = new FormValidator("#form1", options);
  }, []);

  const onSubmit = () => {
    formObject.validate();
    if (formObject.validate()) {
      formObject.element.reset();
    }
  };

  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="flex ">
              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  ref={userNameRef}
                  type="text"
                  name="group_name"
                  value={state.group_name}
                  change={update("group_name")}
                  placeholder="Group name"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForGroup_name"
                />
                <div id="errroForGroup_name" />
              </div>
              <div className="form-group w-60 pr-4">
                <DatePickerComponent
                  name="formation_time"
                  value={formation_time}
                  change={dateChangeHandler}
                  placeholder="Formation time"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForFormation_time"
                />
                <div id="errroForFormation_time" />
              </div>

              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  type="text"
                  name="meeting_place"
                  value={state.meeting_place}
                  change={update("meeting_place")}
                  placeholder="Meeting Place"
                  floatLabelType="Auto"
                  data-msg-containerid="errroFormeeting_place"
                />
                <div id="errroFormeeting_place" />
              </div>
            </div>

            <div className="flex ">
              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  ref={userNameRef}
                  type="text"
                  name="group_name"
                  value={state.group_name}
                  change={update("group_name")}
                  placeholder="Group name"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForGroup_name"
                />
                <div id="errroForGroup_name" />
              </div>
              <div className="form-group w-60 pr-4">
                <DatePickerComponent
                  name="formation_time"
                  value={formation_time}
                  change={dateChangeHandler}
                  placeholder="Formation time"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForFormation_time"
                />
                <div id="errroForFormation_time" />
              </div>

              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  type="text"
                  name="meeting_place"
                  value={state.meeting_place}
                  change={update("meeting_place")}
                  placeholder="Meeting Place"
                  floatLabelType="Auto"
                  data-msg-containerid="errroFormeeting_place"
                />
                <div id="errroFormeeting_place" />
              </div>
            </div>

            <div className="flex ">
              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  ref={userNameRef}
                  type="text"
                  name="group_name"
                  value={state.group_name}
                  change={update("group_name")}
                  placeholder="Group name"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForGroup_name"
                />
                <div id="errroForGroup_name" />
              </div>
              <div className="form-group w-60 pr-4">
                <DatePickerComponent
                  name="formation_time"
                  value={formation_time}
                  change={dateChangeHandler}
                  placeholder="Formation time"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForFormation_time"
                />
                <div id="errroForFormation_time" />
              </div>

              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  type="text"
                  name="meeting_place"
                  value={state.meeting_place}
                  change={update("meeting_place")}
                  placeholder="Meeting Place"
                  floatLabelType="Auto"
                  data-msg-containerid="errroFormeeting_place"
                />
                <div id="errroFormeeting_place" />
              </div>
            </div>

            <div className="flex ">
              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  ref={userNameRef}
                  type="text"
                  name="group_name"
                  value={state.group_name}
                  change={update("group_name")}
                  placeholder="Group name"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForGroup_name"
                />
                <div id="errroForGroup_name" />
              </div>
              <div className="form-group w-60 pr-4">
                <DatePickerComponent
                  name="formation_time"
                  value={formation_time}
                  change={dateChangeHandler}
                  placeholder="Formation time"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForFormation_time"
                />
                <div id="errroForFormation_time" />
              </div>

              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  type="text"
                  name="meeting_place"
                  value={state.meeting_place}
                  change={update("meeting_place")}
                  placeholder="Meeting Place"
                  floatLabelType="Auto"
                  data-msg-containerid="errroFormeeting_place"
                />
                <div id="errroFormeeting_place" />
              </div>
            </div>

            <div className="flex ">
              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  ref={userNameRef}
                  type="text"
                  name="group_name"
                  value={state.group_name}
                  change={update("group_name")}
                  placeholder="Group name"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForGroup_name"
                />
                <div id="errroForGroup_name" />
              </div>
              <div className="form-group w-60 pr-4">
                <DatePickerComponent
                  name="formation_time"
                  value={formation_time}
                  change={dateChangeHandler}
                  placeholder="Formation time"
                  floatLabelType="Auto"
                  data-msg-containerid="errroForFormation_time"
                />
                <div id="errroForFormation_time" />
              </div>

              <div className="form-group w-60 pr-4">
                <TextBoxComponent
                  type="text"
                  name="meeting_place"
                  value={state.meeting_place}
                  change={update("meeting_place")}
                  placeholder="Meeting Place"
                  floatLabelType="Auto"
                  data-msg-containerid="errroFormeeting_place"
                />
                <div id="errroFormeeting_place" />
              </div>
            </div>
          </form>
          <div className="submitBtn">
            {/* <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent> */}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default GroupForm;
