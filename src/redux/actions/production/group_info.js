import { toast } from 'react-toastify';
import HttpRequest from '../../../services/HttpRequest';
import creator from '../creator';

import {
  GET_GROUP_INFO_PRODUCTION_START,
  GET_GROUP_INFO_PRODUCTION_SUCCESS,
  GET_GROUP_INFO_PRODUCTION_ERROR,
} from '../../types/production/groupInfo';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findGroupById = ({group_id}) => async (dispatch) => {
  dispatch(creator(GET_GROUP_INFO_PRODUCTION_START, true));
  try {
    const res = await HttpRequest.get(`/groups/groups/byid/${group_id}`);
    dispatch(creator(GET_GROUP_INFO_PRODUCTION_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_GROUP_INFO_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};