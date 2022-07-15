import { toast } from 'react-toastify';
// import { message } from 'antd';
import HttpRequest from '../../../../../../services/HttpRequest';
import creator from '../../../../creator';

import {
  CREATE_GROUP_ADMIN_PRODUCTION_START,
  CREATE_GROUP_ADMIN_PRODUCTION_ERROR,
  CREATE_GROUP_ADMIN_PRODUCTION_SUCCESS,
} from '../../../../../types/production/groupInfo/components/settings/groupAdmins/create_group_admin';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const CreateGroupAdminProductionActions = (data) => async (dispatch) => {
  dispatch(creator(CREATE_GROUP_ADMIN_PRODUCTION_START, true));
  const hide = message.loading('Adding admin in progress...', 0);
  try {
    const res = await HttpRequest.post('/members/members/groupadmins/', {

      'source': 'web',
      'linked_msisdn': `25${data.linked_msisdn.replace(/[()-/\s]/g, '')}`,
      'group_id': data.group_id,
      'member_id': data.member_id
    });
    await sleep(5000);
    hide();
    await sleep(1000);

    if (res.resp_msg === 'Member is already an Admin in this group') {
      // message.error('Member is already an Admin in this group.', 4);
    } else {
      // message.success({
      //   content: 'Admin successfully added', duration: 2
      // });
      dispatch(creator(CREATE_GROUP_ADMIN_PRODUCTION_SUCCESS, res.data));
    }

  } catch (e) {
    if (e.response && e.response.data) {
      hide();
      await sleep(1000);
      // message.error('An error happened, try again', 4);
    }
  }
};
