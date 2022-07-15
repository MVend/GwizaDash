import * as types from '../../../../../types/production/members/loans/member_loans';

const initialState = {
  isLoading: 'initial',
  summary_data: {},
  data: [],
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ACTIVE_LOAN_ACCOUNT_START:
      return {
        ...state,
        isLoading: 'loading',
        summary_data: payload,
      };
    case types.SET_ACTIVE_LOAN_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: 'success',
        data: payload || [],
      };
    case types.CLEAR_ACTIVE_LOAN_ACCOUNT_START:
      return {
        isLoading: 'initial',
        summary_data: {},
        data: [],
        error: null
      };
    case types.SET_ACTIVE_LOAN_ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: 'error',
        error: payload,
      };
    default:
      return state;
  }
};