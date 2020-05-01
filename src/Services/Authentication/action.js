import {TOGGLE_LOGIN, TOGGLE_FAILED, TOGGLE_SUCCESS} from './constant';
import config from '../../config/env';
export const toggleLogin = (realm, username, password) => dispatch => {
  if (realm[0].username === username && realm[0].password === password) {
    dispatch({
      type: TOGGLE_LOGIN,
    });
  } else {
    dispatch({
      type: TOGGLE_FAILED,
    });
  }
};
export const toggleSuccess = () => dispatch => {
  dispatch({
    type: TOGGLE_SUCCESS,
  });
};
