import { toast } from 'react-toastify';
import HttpRequest from '../../../services/HttpRequest';
import creator from '../creator';

import {
  GET_PRODUCTION_GROUPS_START,
  GET_PRODUCTION_GROUPS_SUCCESS,
  GET_PRODUCTION_GROUPS_ERROR,
  DELETE_PRODUCTION_GROUP_SUCCESS
} from '../../types/production/groups/tabs/get_member';



export const findAll = (data) => async (dispatch) => {
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

export const deleteGroup = (group_id) => async (dispatch) => {
  try {
    const res = await HttpRequest.delete(`/groups/groups/${group_id}`);
    toast.success(res.message);
    dispatch(creator(DELETE_PRODUCTION_GROUP_SUCCESS, group_id));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const search = (data) => async (dispatch) => {
  try {
    dispatch(creator(GET_PRODUCTION_GROUPS_START, true));
    const res = await HttpRequest.get(
      `/groups/groups/search?searchHint=${data.searchHint}&page=${data.page}&size=${data.size}`,
    );
    dispatch(creator(GET_PRODUCTION_GROUPS_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_PRODUCTION_GROUPS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};

