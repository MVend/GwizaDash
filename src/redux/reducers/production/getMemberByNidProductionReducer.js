import * as types from '../../types';

const initialState = {
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MEMBER_BY_NID_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MEMBER_BY_NID_PRODUCTION_SUCCESS:
      return {
        ...state,
        data: {
          isLoading: payload?.isLoading || false,
          data: payload?.data || [],
        },
      };
    case types.GET_MEMBER_BY_NID_PRODUCTION_ERROR:
      return {
        ...state,
        error: payload,
      };    
    default:
      return state;
  }
};