import * as types from '../../types';

const initialState = {
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_FINES_BY_GROUP_ID_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_FINES_BY_GROUP_ID_PRODUCTION_SUCCESS:
      return {
        ...state,
        data: {
          isLoading: payload?.isLoading || false,
          data: payload?.data || [],
        },
      };
    case types.GET_FINES_BY_GROUP_ID_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error: payload,
      };    
    default:
      return state;
  }
};