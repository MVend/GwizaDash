import { toast } from 'react-toastify';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  UPDATE_FINE_REASONS_PRODUCTION_START,
  UPDATE_FINE_REASONS_PRODUCTION_ERROR,
  UPDATE_FINE_REASONS_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/fineReasons/update_fine_reason';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const updateFineReasonsProductionActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(UPDATE_FINE_REASONS_PRODUCTION_START, true));
  try {
    const res = await HttpRequest.get(`socialfund/products/bygroupid/10100013`);
  
    dispatch(creator(UPDATE_FINE_REASONS_PRODUCTION_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(UPDATE_FINE_REASONS_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};