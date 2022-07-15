import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_LOAN_ACCOUNTS_START,
  GET_LOAN_ACCOUNTS_SUCCESS,
  GET_LOAN_ACCOUNTS_ERROR,
} from '../../../../types/production/members/loans/member_loans';
import { setActiveLoanAccount } from './active_account';


export const findMemberLoanAccounts = (member_id) => async (dispatch) => {
  
  dispatch(creator(GET_LOAN_ACCOUNTS_START, true));
  try {
    const res = await HttpRequest.get(`/accounts/accounts/bytypememid/${member_id}/loan`);
    // console.log('res.data[0]', res.data[0]);
    
    await dispatch(creator(GET_LOAN_ACCOUNTS_SUCCESS, res.data));
    await dispatch(setActiveLoanAccount(member_id, res.data[0]));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_LOAN_ACCOUNTS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
