import { toast } from 'react-toastify';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  UPDATE_GROUP_ADMIN_PRODUCTION_START,
  UPDATE_GROUP_ADMIN_PRODUCTION_ERROR,
  UPDATE_GROUP_ADMIN_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/groupAdmins/update_group_admin';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const updateGroupAdminProductionActions = ({ group_id, paginater }) => async (dispatch) => {
  dispatch(creator(UPDATE_GROUP_ADMIN_PRODUCTION_START, true));
  try {
    const res = await HttpRequest.get(`socialfund/products/bygroupid/10100013`);
    console.log('res');
    console.log(res);
    dispatch(creator(UPDATE_GROUP_ADMIN_PRODUCTION_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(UPDATE_GROUP_ADMIN_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};