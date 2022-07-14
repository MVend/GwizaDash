import * as types from '../../../../types/production/groupInfo/forms/add_member';

const initialState = {
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.Add_MEMBER_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.Add_MEMBER_PRODUCTION_SUCCESS:
      const newdata = {
        isLoading: false,
        error: null,
      };
      return newdata;
    case types.Add_MEMBER_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
