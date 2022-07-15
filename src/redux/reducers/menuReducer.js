import * as types from '../types';

const initialState = {
  menus: {
    isLoading: true,
    data: [],
  }
};

export default (state = initialState, { type, payload }) => {
  console.log("Calling Menu apis loading data", payload)
  switch (type) {
    case types.GET_MENUS_START:
      return {
        ...state,
        menus: {
          isLoading: payload || false,
          data: [],
        },
      };
    case types.GET_MENUS_ERROR:
      return {
        ...state,
        menus: {
          isLoading: false,
          data: payload?.error || '',
        },
      };
    case types.GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: {
          isLoading: false,
          data: payload || '',
        },
      };
    default:
      return state;
  }
};
