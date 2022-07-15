import * as types from '../../../types/production/groups/tabs/get_member';

const initialState = {
  isLoading: false,
  data: [],
  currentPage: 0,
  totalPages: 0,
  totalItems: 0,
  itemsPerPage: 0,
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
        totalItems: payload.allGroups.length,
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