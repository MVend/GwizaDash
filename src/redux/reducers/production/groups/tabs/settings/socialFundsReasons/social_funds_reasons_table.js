import * as types from '../../../../../../types/production/groupInfo/components/settings/socialFundsReasons/social_funds_reasons_table';

const initialState = {
  isLoading: false,
  data: [],
  currentPage: null,
  totalPages: null,
  totalItems: null,
  itemsPerPage: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_SUCCESS:
      const newdata = {
        ...state,
        isLoading: false,
        data: payload.data || [],
        error: null,
      };
      return newdata;
    case types.CREATE_FUND_REASON_PRODUCTION_TAB_SUCCESS:
      
      return {...state, data: [payload, ...state.data]};

    case types.UPDATE_FUND_REASON_PRODUCTION_TAB_SUCCESS:
      const arr = state.data.map(item => item.reason_id === payload.reason_id ? payload : item);

      return { ...state, data: arr };

    case types.GET_SOCIAL_FUNDS_REASONS_PRODUCTION_TAB_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
