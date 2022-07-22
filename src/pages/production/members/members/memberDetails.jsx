import React from 'react';
import {useLocation} from "react-router-dom";
import {
    TabComponent,
    TabItemDirective,
    TabItemsDirective,
  } from "@syncfusion/ej2-react-navigations";

import { Header } from '../../../../components';
import Card from '../components/Card';


const MemberDetails = () => {
    const {state: {row}} = useLocation();


    const headerText = [
        { text: "Members" },
        { text: "Admins" },
        { text: "Fines and Socialfund" },
    ];
    

    // const membersTab = () => <ProductionGroupMembers />;
    // const adminsTab = () => <ProductionGroupAdmins />;
    // const reasonsTab = () => <ProductionGroupReasons />;

    return (
        <Header  title={`Member - ${row?.member_name || ""}`}>
            {/* <h1>{stat.row.group_name}</h1> */}
            <Card {...row}/>
            {/* <TabComponent>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={membersTab} />
                    <TabItemDirective header={headerText[1]} content={adminsTab} />
                    <TabItemDirective header={headerText[2]} content={reasonsTab} />
                </TabItemsDirective>
            </TabComponent> */}
        </Header>
    )
};

export default MemberDetails