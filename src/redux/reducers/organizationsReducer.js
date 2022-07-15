import * as types from '../types';

const initialState = {
  organizations: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: {
          isLoading: payload?.isLoading || false,
          data: payload?.data || [],
        },
      };
    default:
      return state;
  }
};
