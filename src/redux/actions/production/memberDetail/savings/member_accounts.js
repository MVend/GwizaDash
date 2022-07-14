import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_MEMBER_ACCOUNTS_START,
  GET_MEMBER_ACCOUNTS_SUCCESS,
  GET_MEMBER_ACCOUNTS_ERROR,
} from '../../../../types/production/members/savings/member_detail';
import { setActiveAccount } from './active_account';


export const findMemberAccounts = (member_id, type) => async (dispatch) => {

  dispatch(creator(GET_MEMBER_ACCOUNTS_START, true));
  try {
    const res = await HttpRequest.get(`/accounts/accounts/bytypememid/${member_id}/${type}`);
    await dispatch(creator(GET_MEMBER_ACCOUNTS_SUCCESS, res.data));
    await dispatch(setActiveAccount(member_id, res.data[0]));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_MEMBER_ACCOUNTS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};