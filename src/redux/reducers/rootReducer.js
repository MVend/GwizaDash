import { combineReducers } from 'redux';
import auth from './authReducer';
import sharedBook from './production/groups/tabs/shareBook/share_book_table';
import sharedSavingsAccountProductTable from
  './production/groups/tabs/shareSaveAccount/share_save_account_table';
import loanAccountProductTable from './production/groups/tabs/loanAccount/loan_account_table';
import loanRequestsProductTable from './production/groups/tabs/loanRequests/loan_requests_table';
import loanBookProductTable from './production/groups/tabs/loanBook/loan_book_table';
import socialFundBookTable from './production/groups/tabs/socialFundBook/social_fund_book_table';
import socialFundRequestsTable from
  './production/groups/tabs/socialFundRequests/social_fund_requests_table';
import finesProducionTable from './production/groups/tabs/fines/fines';
import transactionProductionTable from './production/groups/tabs/transactions/trasnsaction_table';

import createFineReason from './production/groups/tabs/settings/finesReasons/create_fine_reason';
import getFineReasons from './production/groups/tabs/settings/finesReasons/get_fine_reason_table';
import updateFineReason from './production/groups/tabs/settings/finesReasons/update_fine_reason';

import getGroupAdmin from './production/groups/tabs/settings/groupAdmins/get_group_admin_table';
import updateGroupAdmin from './production/groups/tabs/settings/groupAdmins/update_group_admin';

import socialFundsProductsTable from
  './production/groups/tabs/settings/socialFundsProducts/social_funds_products_table';
import socialFundsReasonsTable from
  './production/groups/tabs/settings/socialFundsReasons/social_funds_reasons_table';


// import CreateGroupMembersReducer from './production/CreateGroupMembersReducer';
import groupsTableReducer from './production/groups/groupsTableReducer';
import addProductionMember from './production/groups/forms/add_member';
import groupInfoProduction from './production/groupInfoProductionReducer';
import adminProduction from './production/adminProductionReducer';
import accountsByGroupId from './production/accountsProductionReducer';
import socialFundReasonsByGroupId from './production/socialFundsReducer';

// Production reducers
import membersTableReducer from './production/members/members_table';
import memberAccounts from './production/members/memberDetail/savings/member_accounts';
import memberLoansAccounts from './production/members/memberDetail/loans/member_accounts';
import activeAccount from './production/members/memberDetail/savings/active_account';
import activeLoansAccount from './production/members/memberDetail/loans/active_account';
import memberTransactions from './production/members/memberDetail/transactions/get_transactions';
import memberBillpayments from './production/members/memberDetail/billPayments/get_billpayments';

import logs from './logsReducer';
import groupsProductionReducer from './groupsProductionReducer';
import membersProductionTabReducer from './production/groups/tabs/membersProductionTabReducer';
import finesProductionReducer from './production/finesProductionReducer';
import loansProductionByGroupId from './production/loansProductionReducer';
import loansRequestByGroupId from './production/loanRequestProductionReducer';
import getMemberByNidProductionReducer from './production/getMemberByNidProductionReducer';
import organisationsProductionReducer from './production/organisationsProductionReducer';

import menuReducer from './menuReducer';
import organizations from './organizationsReducer';
// Staging reducers
import groupsStagging from './groupsStaggingReducer';
import membersStagging from './membersStaggingReducer';
import reasonsStagging from './reasonsStaggingReducer';
import locationsStagging from './locationsStaggingReducer';
import commentsStagging from './commentsStaggingReducer';
import approvalsStagging from './approvalsStaggingReducer';
import adminsStagging from './adminsStaggingReducer';
import dashboardStagging from './dashboardStaggingReducer';

const rootReducer = combineReducers({
  auth,
  groupsTableReducer,
  addProductionMember,
  // production group tabs
  sharedBook,
  sharedSavingsAccountProductTable,
  loanAccountProductTable,
  loanRequestsProductTable,
  loanBookProductTable,
  socialFundBookTable,
  socialFundRequestsTable,
  finesProducionTable,
  transactionProductionTable,
  // Production Settings
  createFineReason,
  getFineReasons,
  updateFineReason,

  socialFundsProductsTable,
  socialFundsReasonsTable,
  // createGroupAdmin,
  getGroupAdmin,
  updateGroupAdmin,
  // removeGroupAdmin,


  // Productio Members
  membersTableReducer,

  // Member Detail
  memberAccounts,
  activeAccount,
  memberLoansAccounts,
  activeLoansAccount,
  memberTransactions,
  memberBillpayments,

  getMemberByNidProductionReducer,
  groupInfoProduction,
  adminProduction,
  accountsByGroupId,
  socialFundReasonsByGroupId,

  loansProductionByGroupId,
  loansRequestByGroupId,
  finesProductionReducer,
  logs,
  organisationsProductionReducer,
  productionGroups: groupsProductionReducer,
  membersProductionTabReducer,

  menuReducer,
  organizations,

  // Staging reducers
  groupsStagging,
  membersStagging,
  reasonsStagging,
  locationsStagging,
  commentsStagging,
  approvalsStagging,
  adminsStagging,
  dashboardStagging,
});

export default rootReducer;
