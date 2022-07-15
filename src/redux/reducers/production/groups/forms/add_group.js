import * as types from '../../../../types/production/groups/forms/add_group';

const initialState = {
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.Add_GROUP_PRODUCTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.Add_GROUP_PRODUCTION_SUCCESS:
      const newdata = {
        isLoading: false,
        error: null,
      };
      return newdata;
    case types.Add_GROUP_PRODUCTION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
