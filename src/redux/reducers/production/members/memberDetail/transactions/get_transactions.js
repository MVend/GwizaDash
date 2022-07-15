import * as types from '../../../../../types/production/members/transactions/transactions';

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MEMBER_TRANSACTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MEMBER_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload || [],
      };
    case types.GET_MEMBER_TRANSACTIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};