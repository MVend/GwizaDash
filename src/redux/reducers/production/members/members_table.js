import * as types from '../../../types/production/members/get_all_members';

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
    case types.GET_PRODUCTION_MEMBERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTION_MEMBERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPage: payload.pagination.currentPage,
        totalPages: payload.pagination.totalPages,
        totalItems: payload.pagination.totalItems,
        itemsPerPage: payload.pagination.itemsPerPage,
        data: payload.data || [],
      };
    case types.GET_PRODUCTION_MEMBERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};