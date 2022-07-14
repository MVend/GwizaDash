import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';
import { sleep } from '../../../../../utils/helpers';

import {
  SET_ACTIVE_ACCOUNT_START,
  SET_ACTIVE_ACCOUNT_SUCCESS,
  SET_ACTIVE_ACCOUNT_ERROR,
  CLEAR_ACTIVE_ACCOUNT_START
} from '../../../../types/production/members/savings/member_detail';


export const setActiveAccount = (member_id, summary) => async (dispatch) => {
  dispatch(creator(SET_ACTIVE_ACCOUNT_START, summary));
  try {
    // await sleep(5000);
    // const res = await HttpRequest.get(`/savings/savings/byaccount/${summary.account_number}`);

    dispatch(creator(SET_ACTIVE_ACCOUNT_SUCCESS, []));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(SET_ACTIVE_ACCOUNT_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};

export const clearAccount = () => async (dispatch) => {
  dispatch(creator(CLEAR_ACTIVE_ACCOUNT_START, {}));
  
};