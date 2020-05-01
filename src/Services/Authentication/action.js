import {TOGGLE_LOGIN} from './constant';
import config from '../../config/env';
export const toggleLogin = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGIN,
  });
};
