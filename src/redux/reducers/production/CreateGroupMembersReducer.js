// import * as types from '../../types/production/createMember';

// const initialState = {
//   isLoading: false,
//   members: [],
//   error: null
// };

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.CREATE_GROUP_MEMBER_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case types.CREATE_GROUP_MEMBER_SUCCESS:

//       return {
//         isLoading: false,
//         members: payload.created,
//         error: null,
//       };
//     case types.CREATE_GROUP_MEMBER_ERROR:
//       return {
//         isLoading: false,
//         members: null,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };