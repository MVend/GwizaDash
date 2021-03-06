/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthToken from '../../utils/authToken';
import { MIGRATION_START, MIGRATION_FAILED } from '../types';
import creator from './creator';

export const migrateAction = (method, endpoint, actionType, data) => async (dispatch) => {
  try {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_PROD_SUPPORT_URL
        : process.env.REACT_APP_DEV_SUPPORT_URL;

    // axios.defaults.headers['x-auth-token'] = AuthToken.getToken();
    dispatch(creator(MIGRATION_START));
    const res = await axios[method](`${baseUrl}/migrate${endpoint}`, data);
    // toast.success(res?.data?.message);
    return dispatch(creator(actionType, res?.data));
  } catch (e) {
    dispatch(creator(MIGRATION_FAILED, { error: e?.response?.data }));
    dispatch(creator(actionType, { error: e?.response?.data?.error }));
    return toast.error(e.response?.data?.error);
  }
};
