import React from 'react';
import {useLocation} from "react-router-dom";
import {
    TabComponent,
    TabItemDirective,
    TabItemsDirective,
  } from "@syncfusion/ej2-react-navigations";

import { Card, Header } from '../../../../components';
import ProductionGroupAdmins from '../components/GroupAdmins';
import ProductionGroupMembers from '../components/GroupMembers';
import ProductionGroupReasons from '../components/GroupReasons';

const GroupDetails = () => {
    const {state: {row}} = useLocation();


    const headerText = [
        { text: "Members" },
        { text: "Admins" },
        { text: "Fines and Socialfund" },
    ];
    

    const membersTab = () => <ProductionGroupMembers />;
    const adminsTab = () => <ProductionGroupAdmins />;
    const reasonsTab = () => <ProductionGroupReasons />;

    return (
        <Header category="Production" title={`Group/${row?.group_name || ""}`}>
            {/* <h1>{stat.row.group_name}</h1> */}
            <Card {...row}/>
            <TabComponent>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={membersTab} />
                    <TabItemDirective header={headerText[1]} content={adminsTab} />
                    <TabItemDirective header={headerText[2]} content={reasonsTab} />
                </TabItemsDirective>
            </TabComponent>
        </Header>
    )
};

export default GroupDetails