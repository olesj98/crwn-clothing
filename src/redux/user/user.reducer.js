import { UserActionTypes } from './user.types.js';

const initialStata = {
  currentUser: null,
};

const userReducer = (state = initialStata, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;