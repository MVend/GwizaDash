/* eslint-disable no-case-declarations */
import {
  GET_GROUP_ADMIN_PRODUCTION_START,
  GET_GROUP_ADMIN_PRODUCTION_SUCCESS,
  GET_GROUP_ADMIN_PRODUCTION_ERROR,
  CREATE_GROUP_ADMIN_PRODUCTION_ERROR,
  CREATE_GROUP_ADMIN_PRODUCTION_SUCCESS,
  CREATE_GROUP_ADMIN_PRODUCTION_START,
  DELETE_GROUP_ADMIN_PRODUCTION_SUCCESS
} from '../../types';

const initialState = {
  isLoading: false,
  isLoaded: false,
  btnLoading: false,
  values: {
    currentPage: 0,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 0,
    rows: [],
  },
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GROUP_ADMIN_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_GROUP_ADMIN_PRODUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        btnLoading: false,
        values: payload,
      };
    case GET_GROUP_ADMIN_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        btnLoading: false,
        error: payload,
      };
    case CREATE_GROUP_ADMIN_PRODUCTION_START:
      return {
        ...state,
        btnLoading: true,
      };
    case CREATE_GROUP_ADMIN_PRODUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        btnLoading: false,
        isLoaded: true,
        values: {
          ...state.values,
          totalItems: state.values.totalItems + 1,
          rows: [...state.values.rows, payload],
        },
      };
    case CREATE_GROUP_ADMIN_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        btnLoading: false,
        error: payload,
      };

    case DELETE_GROUP_ADMIN_PRODUCTION_SUCCESS:
      const rows = state.values.rows.filter(({ id }) => id !== payload);
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        btnLoading: false,
        values: {
          ...state.values,
          totalItems: state.values.totalItems - 1,
          rows,
        },
      };
    default:
      return state;
  }
};
