import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_START,
  GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_SUCCESS,
  GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_ERROR,
} from '../../../../types/production/groupInfo/components/socialFundRequests/social_fund_requests_table';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findSocialFundRequestsProductionTabActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_START, true));
  try {
    const res = await HttpRequest.get(`socialfund/requests/bygroupid/${group_id}`);
    dispatch(creator(GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_SOCIAL_FUND_REQUESTS_PRODUCTION_TAB_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};