import { toast, Slide } from 'react-toastify';
import HttpRequest from '../../../../services/HttpRequest';
import creator from '../../creator';

import {
  Add_MEMBER_PRODUCTION_START,
  Add_MEMBER_PRODUCTION_SUCCESS,
  Add_MEMBER_PRODUCTION_ERROR,
} from '../../../types/production/groupInfo/forms/add_member';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const addMemberProductionActions = ({ group_id, members }) => async (dispatch) => {
  dispatch(creator(Add_MEMBER_PRODUCTION_START, true));
  try {
    await sleep(5000);
    const res = await HttpRequest.post('/members/members/create', {
      'source': 'app',
      'group_id': `${group_id}`,
      'members': members
    });
    const customId = 'custom-id-yes';
    toast.success('bro we here', {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
      hideProgressBar: true,
      transition: Slide,
      className: 'foo-bar'
    });
    
    // console.log(res);
    dispatch(creator(Add_MEMBER_PRODUCTION_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(Add_MEMBER_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};