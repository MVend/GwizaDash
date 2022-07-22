import { toast } from 'react-toastify';
import HttpRequest from '../../../services/HttpRequest';
import creator from '../creator';

import {
  GET_PRODUCTION_MEMBERS_START,
  GET_PRODUCTION_MEMBERS_SUCCESS,
  GET_PRODUCTION_MEMBERS_ERROR,
} from '../../types/production/members/get_all_members';
import { 
  CREATE_PRODUCTION_MEMBER_SUCCESS, 
  REATE_PRODUCTION_MEMBER_ERROR, 
  CREATE_PRODUCTION_MEMBER_START, 
  UPLOAD_PRODUCTION_MEMBERS_SUCCESS, 
  CREATE_PRODUCTION_MEMBER_ERROR,
  DELETE_PRODUCTION_MEMBER_START,
  GET_PRODUCTION_GROUPS,
  UPDATE_PRODUCTION_MEMBER_SUCCESS
} from '../../types';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const findAll = (data) => async (dispatch) => {
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

export const createMember = (data) => async (dispatch) => {
  try {
    dispatch(creator(CREATE_PRODUCTION_MEMBER_START));
    const res = await HttpRequest.post('/members/members', data);
    toast.success(res.message);
    dispatch(creator(CREATE_PRODUCTION_MEMBER_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(CREATE_PRODUCTION_MEMBER_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};

export const deleteMember = (member_id) => async (dispatch) => {
  try {
    const res = await HttpRequest.delete(`/members/members/${member_id}`);
    toast.success(res.message);
    dispatch(creator(DELETE_PRODUCTION_MEMBER_START, member_id));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const updateMember = (data, member_id) => async (dispatch) => {
  try {
    dispatch(creator(CREATE_PRODUCTION_MEMBER_START));
    const res = await HttpRequest.put(`/members/members/${member_id}`, data);
    toast.success(res.message);
    dispatch(creator(UPDATE_PRODUCTION_MEMBER_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(CREATE_PRODUCTION_MEMBER_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};

export const upload = (data) => async (dispatch) => {
  try {
    dispatch(creator(CREATE_PRODUCTION_MEMBER_START));
    await HttpRequest.post('/members/groups/upload/', data);

    const res = await HttpRequest.get('/members/groups?page=0&size=1000');
    dispatch(creator(GET_PRODUCTION_MEMBERS_SUCCESS, res.data));
    dispatch(creator(UPLOAD_PRODUCTION_MEMBERS_SUCCESS, []));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(CREATE_PRODUCTION_MEMBER_ERROR, e.response.data.error));
      // return message.error(e.response.data.error);
    }
  }
};

export const search = (data) => async (dispatch) => {
  try {
    dispatch(creator(GET_PRODUCTION_MEMBERS_START, true));
    const res = await HttpRequest.get(
      `/members/members/search?searchHint=${data.searchHint}&page=${data.page}&size=${data.size}`,
    );
    dispatch(creator(GET_PRODUCTION_MEMBERS_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_PRODUCTION_MEMBERS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
