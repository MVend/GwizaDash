import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_FINES_PRODUCTION_TAB_START,
  GET_FINES_PRODUCTION_TAB_SUCCESS,
  GET_FINES_PRODUCTION_TAB_ERROR,
} from '../../../../types/production/groupInfo/components/fines/fines_table';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findFinesTabActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(GET_FINES_PRODUCTION_TAB_START, true));
  try {
    const res = await HttpRequest.get(`socialfund/requests/bygroupid/${group_id}`);
    dispatch(creator(GET_FINES_PRODUCTION_TAB_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_FINES_PRODUCTION_TAB_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};