import * as types from
  '../../../../../types/production/groupInfo/components/shareSaveAccount/share_save_account';

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
    case types.GET_SHARE_SAVINGS_ACCOUNT_PRODUCTION_TAB_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SHARE_SAVINGS_ACCOUNT_PRODUCTION_TAB_SUCCESS:
      const newdata = {
        ...state,
        isLoading: false,
        // currentPage: payload.pagination.currentPage || null,
        // totalPages: payload.pagination.numberOfPages || null,
        // totalItems: payload.pagination.total || null,
        // itemsPerPage: payload.pagination.limit || null,
        data: payload.data || [],
        error: null,
      };
      return newdata;
    case types.GET_SHARE_SAVINGS_ACCOUNT_PRODUCTION_TAB_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
