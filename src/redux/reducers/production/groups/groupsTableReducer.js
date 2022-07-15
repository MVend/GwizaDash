import * as types from '../../../types/production/groups/tabs/get_member';

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
    case types.GET_PRODUCTION_GROUPS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTION_GROUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPage: payload.pagination.currentPage,
        totalPages: payload.pagination.numberOfPages,
        totalItems: payload.pagination.total,
        itemsPerPage: payload.pagination.limit,
        data: payload.allGroups || [],
      };
    case types.GET_PRODUCTION_GROUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};