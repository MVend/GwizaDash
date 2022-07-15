import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_LOAN_REQUESTS_PRODUCTION_TAB_START,
  GET_LOAN_REQUESTS_PRODUCTION_TAB_SUCCESS,
  GET_LOAN_REQUESTS_PRODUCTION_TAB_ERROR,
} from '../../../../types/production/groupInfo/components/loanRequests/loan_requests_table';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findLoanRequestsTabActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_LOAN_REQUESTS_PRODUCTION_TAB_START, true));
  try {
    const res = await HttpRequest.get(`/api/loanrequests/bygroupid/${group_id}`);
    dispatch(creator(GET_LOAN_REQUESTS_PRODUCTION_TAB_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_LOAN_REQUESTS_PRODUCTION_TAB_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};