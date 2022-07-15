import { toast } from 'react-toastify';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  GET_FINE_REASONS_PRODUCTION_START,
  GET_FINE_REASONS_PRODUCTION_ERROR,
  GET_FINE_REASONS_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/fineReasons/get_fine_reasons_table';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findFinesReasonsProductionActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_FINE_REASONS_PRODUCTION_START, true));
  try {
    const res = await HttpRequest.get(`/fines/fines/finereasonsbygroupid/${group_id}`);
    
    dispatch(creator(GET_FINE_REASONS_PRODUCTION_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_FINE_REASONS_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};