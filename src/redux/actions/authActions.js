import { toast } from 'react-toastify';
import HttpRequest from '../../services/HttpRequest';
import creator from './creator';
import {
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_MENUS_ERROR,
  GET_MENUS_START,
  GET_MENUS_SUCCESS
} from '../types';
import AuthToken from '../../utils/authToken';
import { getLoggedUserInfo } from '../../utils/helpers'

export const createAccount = (data) => async (dispatch) => {
  try {
    dispatch(creator(CREATE_ACCOUNT_START, true));
    const res = await HttpRequest.post('/auth/register', data);
    toast.success(res.message);
    dispatch(creator(CREATE_ACCOUNT_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(CREATE_ACCOUNT_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const loggedout = localStorage.getItem('loggedout');
    dispatch(creator(LOGIN_START, true));

    const res = await HttpRequest.post('/web/auth/signin',
      { username: data.username, password: data.password });

    AuthToken.setToken(res.token);
    dispatch(creator(LOGIN_SUCCESS, res.token));
    if (loggedout) {
      localStorage.removeItem('loggedout');
      return window.location.assign(JSON.parse(loggedout).path);
    }
    localStorage.removeItem('loggedout');
    window.location.assign('/stagging/dashboard');
  } catch (e) {
    const error = e?.response?.data?.error || e?.message;
    console.log(error);
    dispatch(creator(LOGIN_ERROR, error));
    return toast.error(error);
  }
};

export const getMenus = () => async (dispatch) => {
  try {
    const menu = localStorage.getItem('token');
    const userInfo = getLoggedUserInfo();
    // console.log(menu);
    dispatch(creator(GET_MENUS_START, true));
    const res = await HttpRequest.get(`/web/menu/${userInfo?.access_level}`);
    dispatch(creator(GET_MENUS_SUCCESS, res.menus));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_MENUS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
