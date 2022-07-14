import * as types from '../../../../../types/production/members/loans/member_loans';

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LOAN_ACCOUNTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LOAN_ACCOUNTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload || [],
      };
    case types.GET_LOAN_ACCOUNTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};