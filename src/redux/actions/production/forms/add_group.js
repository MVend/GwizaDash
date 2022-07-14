
import { toast, Slide } from 'react-toastify';
import HttpRequest from '../../../../services/HttpRequest';
import creator from '../../creator';

import {
  Add_GROUP_PRODUCTION_START,
  Add_GROUP_PRODUCTION_SUCCESS,
  Add_GROUP_PRODUCTION_ERROR,
} from '../../../types/production/groups/forms/add_group';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const addProductProductionActions = ({ group_id, products }) => async (dispatch) => {
  dispatch(creator(Add_GROUP_PRODUCTION_START, true));
  try {
    await sleep(5000);
    const res = await HttpRequest.post('/groups/groups/create', {
      'source': 'app',
      'group_id': `${group_id}`,
      'products': products
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
    dispatch(creator(Add_GROUP_PRODUCTION_SUCCESS, res.data));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(creator(Add_GROUP_PRODUCTION_ERROR, e.response.data.error));
      return toast.error(e.response.data.error);
    }
  }
};