import * as types from '../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTION_GROUPS:
      return {
        ...state,
        groups: {
          error: payload.error,
          data: payload.error ? null : payload,
        },
      };
    default:
      return state;
  }
};
