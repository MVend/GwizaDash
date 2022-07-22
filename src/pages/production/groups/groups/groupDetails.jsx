import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";

import { Card, Header } from "../../../../components";
import ProductionGroupAdmins from "../components/GroupAdmins";
import ProductionGroupMembers from "../components/GroupMembers";
import ProductionGroupLoans from "../components/GroupLoans";
import ProductionGroupShareSave from "../components/GroupShareSave";
import ProductionGroupFines from "../components/GroupFines";
import ProductionGroupSocialFunds from "../components/GroupSocialFunds";
import ProductionGroupSettings from "../components/GroupSettings";
import ProductionGroupTransactions from "../components/GroupTransactions";
import ProductionGroupReasons from "../components/GroupReasons";

const GroupDetails = () => {
  const {
    state: { row },
  } = useLocation();
  const [hidden, setHidden] = useState(false);
  const [fHidden, setFhidden] = useState(false);
  const [loanContent, setLoanContent] = useState({
    book: true,
    account: false,
    request: false,
  });
  const [sfContent, setSfContent] = useState({
    book: true,
    account: false,
    request: false,
  });
  const [settingContent, setSettingContent] = useState({
    product: true,
    reason: {
      fines: false,
      funds: false,
    },
    admin: false,
  });

  const handleSelectedTab = (index) => {
    if (index === 1) {
      setHidden(false);
    }
    if (index === 2) {
      setLoanContent({
        book: true,
        account: false,
        request: false,
      });
    }
    if (index === 3) {
      setSfContent({
        book: true,
        request: false,
        account: false,
      });
    }
    if (index === 4) {
      setFhidden(false);
    }
    if (index === 6) {
      setSettingContent({
        product: true,
        reason: {
          fines: false,
          funds: false,
        },
        admin: false,
      });
    }
  };

  const headerText = [
    { text: "Members" },
    { text: "Share Save" },
    { text: "Loans" },
    { text: "Social Funds" },
    { text: "Fines" },
    { text: "Transactions" },
    { text: "Settings" },
  ];

  const membersTab = () => <ProductionGroupMembers />;
  const shareSaveTab = () => (
    <ProductionGroupShareSave setHidden={setHidden} hidden={hidden} />
  );
  const loansTab = () => (
    <ProductionGroupLoans
      setLoanContent={setLoanContent}
      loanContent={loanContent}
    />
  );
  const socialFundsTab = () => (
    <ProductionGroupSocialFunds
      setSfContent={setSfContent}
      sfContent={sfContent}
    />
  );
  const finesTab = () => (
    <ProductionGroupFines setFhidden={setFhidden} fHidden={fHidden} />
  );
  const transactionsTab = () => <ProductionGroupTransactions />;
  const adminsTab = () => <ProductionGroupAdmins />;
  const settingsTab = () => (
    <ProductionGroupSettings
      setSettingContent={setSettingContent}
      settingContent={settingContent}
    />
  );

  return (
    <Header category={`Groups - ${row?.group_name || ""}`}>
      {/* <h1>{stat.row.group_name}</h1> */}
      <Card {...row} />
      <TabComponent selected={(e) => handleSelectedTab(e.selectedIndex)}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={membersTab} />
          <TabItemDirective header={headerText[1]} content={shareSaveTab} />
          <TabItemDirective header={headerText[2]} content={loansTab} />
          <TabItemDirective header={headerText[3]} content={socialFundsTab} />
          <TabItemDirective header={headerText[4]} content={finesTab} />
          <TabItemDirective header={headerText[5]} content={transactionsTab} />
          {/* <TabItemDirective header={headerText[6]} content={adminsTab} /> */}
          <TabItemDirective header={headerText[6]} content={settingsTab} />
        </TabItemsDirective>
      </TabComponent>
    </Header>
  );
};

export default GroupDetails;
