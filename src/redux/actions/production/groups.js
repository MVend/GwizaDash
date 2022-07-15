import { toast } from 'react-toastify';
import HttpRequest from '../../../services/HttpRequest';
import creator from '../creator';

import {
  GET_PRODUCTION_GROUPS_START,
  GET_PRODUCTION_GROUPS_SUCCESS,
  GET_PRODUCTION_GROUPS_ERROR,
} from '../../types/production/groups/tabs/get_member';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findAllProductionGroups = (data) => async (dispatch) => {
  dispatch(creator(GET_PRODUCTION_GROUPS_START, true));
  try {
    const res = await HttpRequest.get(`/groups/groups?offset=${data.page}&limit=${data.size}`);
    dispatch(creator(GET_PRODUCTION_GROUPS_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_PRODUCTION_GROUPS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};