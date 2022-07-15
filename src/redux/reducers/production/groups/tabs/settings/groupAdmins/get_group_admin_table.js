import * as types from '../../../../../../types/production/groupInfo/components/settings/groupAdmins/get_group_admin';
import * as typesRemove from '../../../../../../types/production/groupInfo/components/settings/groupAdmins/remove_group_admin';
import * as typesCreate from '../../../../../../types/production/groupInfo/components/settings/groupAdmins/create_group_admin';

const initialState = {
  isLoading: false,
  removeLoading: false,
  createLoading: false,
  data: [],
  deletedData: [],
  currentPage: null,
  totalPages: null,
  totalItems: null,
  itemsPerPage: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_GROUP_ADMIN_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case typesRemove.REMOVE_GROUP_ADMIN_PRODUCTION_START:
      
      return {
        ...state,
        removeLoading: true,
      };
    case typesCreate.CREATE_GROUP_ADMIN_PRODUCTION_START:

      return {
        ...state,
        createLoading: true,
      };
    case typesCreate.CREATE_GROUP_ADMIN_PRODUCTION_SUCCESS:
      // const arr = state.data.filter(item => item.admin_id !== payload.admin_id);
      return {
        ...state,
        data: [...state.data, payload],
        createLoading: false,
      };
    case typesRemove.REMOVE_GROUP_ADMIN_PRODUCTION_SUCCESS:
      const arr = state.data.filter(item => item.admin_id !== payload.admin_id);
      return {
        ...state,
        data: arr,
        removeLoading: false,
      };
    case typesRemove.REMOVE_GROUP_ADMIN_PRODUCTION_ERROR:
      // const arr = state.data.filter(item => item.admin_id !== payload.admin_id);
      return state;
    case types.GET_GROUP_ADMIN_PRODUCTION_SUCCESS:
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
    case types.GET_GROUP_ADMIN_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
