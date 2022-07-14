/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthToken from '../../utils/authToken';
import creator from './creator';

export const sharedAction = (method, endpoint, actionType, data) => async (dispatch) => {
  try {
    const baseUrl = process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_GWIZA_GW_URL
      : process.env.REACT_APP_GWIZA_GW_DEV_URL;

    // axios.defaults.headers['x-auth-token'] = AuthToken.getToken();
    dispatch(creator(actionType, { isLoading: true }));
    const res = await axios[method](baseUrl + endpoint, data);
    return dispatch(creator(actionType, { data: res?.data }));
  } catch (e) {
    dispatch(creator(actionType, { error: e.response?.data?.error }));
    return toast.error(e.response?.data?.error);
  }
};
