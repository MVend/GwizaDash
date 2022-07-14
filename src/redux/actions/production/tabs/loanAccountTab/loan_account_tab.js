import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_LOAN_ACCOUNT_PRODUCTION_TAB_START,
  GET_LOAN_ACCOUNT_PRODUCTION_TAB_SUCCESS,
  GET_LOAN_ACCOUNT_PRODUCTION_TAB_ERROR,
} from '../../../../types/production/groupInfo/components/loanAccount/loan_account';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findLoanAccountProductionTabActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_LOAN_ACCOUNT_PRODUCTION_TAB_START, true));
  try {
    
    const res = await HttpRequest.get(`accounts/accounts/gidbyacctype/loan/${group_id}`);
    console.log(res);
    dispatch(creator(GET_LOAN_ACCOUNT_PRODUCTION_TAB_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_LOAN_ACCOUNT_PRODUCTION_TAB_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
