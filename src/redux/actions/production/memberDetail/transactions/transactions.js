import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_MEMBER_TRANSACTIONS_START,
  GET_MEMBER_TRANSACTIONS_SUCCESS,
  GET_MEMBER_TRANSACTIONS_ERROR,
} from '../../../../types/production/members/transactions/transactions';


export const findMemberTransactions = (member_id) => async (dispatch) => {
  
  dispatch(creator(GET_MEMBER_TRANSACTIONS_START, true));
  try {
    const res = await HttpRequest.get(`/payprocessor/transactions/bymember/${member_id}`);
    await dispatch(creator(GET_MEMBER_TRANSACTIONS_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_MEMBER_TRANSACTIONS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};