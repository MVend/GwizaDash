import * as types from '../../types';

const initialState = {
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ORGANISATIONS_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ORGANISATIONS_PRODUCTION_SUCCESS:
      return {
        ...state,
        data: {
          isLoading: payload?.isLoading || false,
          data: payload?.data || [],
        },
      };
    case types.GET_ORGANISATIONS_PRODUCTION_ERROR:
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
