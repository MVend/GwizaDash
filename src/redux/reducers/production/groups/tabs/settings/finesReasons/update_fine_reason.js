import * as types from '../../../../../../types/production/groupInfo/components/settings/fineReasons/update_fine_reason';

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
    case types.UPDATE_FINE_REASONS_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_FINE_REASONS_PRODUCTION_SUCCESS:
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
    case types.UPDATE_FINE_REASONS_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
