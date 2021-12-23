import { USER_VERFICATION } from "./userTypes";

const initialState = {
  currentUser: 1,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_VERFICATION:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};