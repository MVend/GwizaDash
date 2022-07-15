import { toast } from 'react-toastify';
// import { message } from 'antd';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  REMOVE_GROUP_ADMIN_PRODUCTION_START,
  REMOVE_GROUP_ADMIN_PRODUCTION_ERROR,
  REMOVE_GROUP_ADMIN_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/groupAdmins/remove_group_admin';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const key = 'updatable';

export const REMOVEGroupAdminProductionActions = (data) => async (dispatch) => {
  dispatch(creator(REMOVE_GROUP_ADMIN_PRODUCTION_START, data));
  const hide = message.loading('Removing admin in progress...', 0);
  try {
    const res = await HttpRequest.post('members/members/groupadmins/remove', {

      'source': 'web',
      'linked_msisdn': `25${data.linked_msisdn.replace(/[()-/\s]/g, '')}`,
      'group_id': data.group_id,
      'member_id': data.member_id
    });
    await sleep(5000);
    hide();
    await sleep(1000);
    // message.success({
    //   content: 'Admin Successfully removed', duration: 2 });
    dispatch(creator(REMOVE_GROUP_ADMIN_PRODUCTION_SUCCESS, data));
  } catch (e) {
    if (e.response && e.response.data) {
      hide();
      await sleep(1000);
      // message.error('An error happened, try again', 4);

    }
  }
};