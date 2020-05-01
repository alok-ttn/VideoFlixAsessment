import {TOGGLE_LOGIN, TOGGLE_FAILED, TOGGLE_SUCCESS} from './constant';
const initialState = {
  isLoggedin: 0,
  flag: 0,
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {...state, isLoggedin: 1};
    case TOGGLE_FAILED:
      return {...state, isLoggedin: 2};
    case TOGGLE_SUCCESS:
      return {...state, isLoggedin: 0};
    default:
      return state;
  }
};

export default homeReducer;
