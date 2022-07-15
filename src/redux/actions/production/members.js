import { toast } from 'react-toastify';
import HttpRequest from '../../../services/HttpRequest';
import creator from '../creator';

import {
  GET_PRODUCTION_MEMBERS_START,
  GET_PRODUCTION_MEMBERS_SUCCESS,
  GET_PRODUCTION_MEMBERS_ERROR,
} from '../../types/production/members/get_all_members';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findAllProductionMembers = (data) => async (dispatch) => {
  dispatch(creator(GET_PRODUCTION_MEMBERS_START, true));
  try {
    const res = await HttpRequest.get(`/members/members?offset=${data.page}&limit=${data.size}`);
    // console.log('res', res);
    dispatch(creator(GET_PRODUCTION_MEMBERS_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_PRODUCTION_MEMBERS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};