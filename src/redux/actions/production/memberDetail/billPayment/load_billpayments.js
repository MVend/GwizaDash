/* eslint-disable no-prototype-builtins */
import { toast } from 'react-toastify';
import HttpRequest from '../../../../../services/HttpRequest';
import creator from '../../../creator';

import {
  GET_MEMBER_BILLPAYMENTS_START,
  GET_MEMBER_BILLPAYMENTS_SUCCESS,
  GET_MEMBER_BILLPAYMENTS_ERROR,
} from '../../../../types/production/members/billPayments/bill_payments';


export const findMemberBillPayments = (member_id) => async (dispatch) => {
  
  dispatch(creator(GET_MEMBER_BILLPAYMENTS_START, true));
  try {
    const res = await HttpRequest.get(`/payprocessor/transactions/bymember/${member_id}`);
    const result = res.data.filter(e => 
      e.hasOwnProperty('orderdetails') === true && e.service_type === 'billpayment');
    await dispatch(creator(GET_MEMBER_BILLPAYMENTS_SUCCESS, result));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_MEMBER_BILLPAYMENTS_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};