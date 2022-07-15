/* eslint-disable no-prototype-builtins */
import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  LOAD_BILLPAYMENTS_PSP_START,
  LOAD_BILLPAYMENTS_PSP_SUCCESS,
  LOAD_BILLPAYMENTS_PSP_ERROR
} from '../../../../types/production/members/billPayments/bill_payments';


export const loadBilpaymenyByPsp = (psp_id) => async (dispatch) => {
  dispatch(creator(LOAD_BILLPAYMENTS_PSP_START, true));
  try {
    const res = await HttpRequest.get(`/payprocessor/transactions/bymember/${psp_id}`);
    const result = res.data.filter(e =>
      e.hasOwnProperty('orderdetails') === true && e.service_type === 'billpayment');
    await dispatch(creator(LOAD_BILLPAYMENTS_PSP_SUCCESS, result));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(LOAD_BILLPAYMENTS_PSP_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
