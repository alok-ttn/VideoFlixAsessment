import {TOGGLE_LOGIN} from './constant';
const initialState = {
  isLoggedin: false,
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {...state, isLoggedin: true};
    default:
      return state;
  }
};

export default homeReducer;
