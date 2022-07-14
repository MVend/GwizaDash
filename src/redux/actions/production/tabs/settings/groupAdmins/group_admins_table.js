import { toast } from 'react-toastify';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  GET_GROUP_ADMIN_PRODUCTION_START,
  GET_GROUP_ADMIN_PRODUCTION_ERROR,
  GET_GROUP_ADMIN_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/groupAdmins/get_group_admin';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findGoupAdminProductionActions = (group_id) => async (dispatch) => {
  dispatch(creator(GET_GROUP_ADMIN_PRODUCTION_START, true));
  try {
    const res = await HttpRequest.get(`/members/members/groupadmins/${group_id.group_id}`);
    console.log('res.data');
    console.log(res.data);
    dispatch(creator(GET_GROUP_ADMIN_PRODUCTION_SUCCESS, res));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(GET_GROUP_ADMIN_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};
