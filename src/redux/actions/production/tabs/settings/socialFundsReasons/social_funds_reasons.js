/* eslint-disable */ 
import { toast } from 'react-toastify';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_START,
  GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_SUCCESS,
  GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_ERROR,
  CREATE_FUND_REASON_PRODUCTION_TAB_START,
  CREATE_FUND_REASON_PRODUCTION_TAB_ERROR,
  CREATE_FUND_REASON_PRODUCTION_TAB_SUCCESS
} from '../../../../../types/production/groupInfo/components/settings/socialFundsReasons/social_funds_reasons_table';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findSocialFundsReasonsProductionTabActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_START, true));
  try {
    const res = await HttpRequest.get(`socialfund/reasons/bygroupid/${group_id}`);
    dispatch(creator(GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
