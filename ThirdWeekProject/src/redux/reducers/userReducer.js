/* eslint-disable prettier/prettier */
import * as types from '../values/types';
import initialState from '../values/initialStates';

export default function userReducer(state = initialState.uid, {type, payload}) {
  switch (type) {
    case types.USER_SIGN:
      return {...state, uid: payload.uid};
    case types.USER_LOGIN:
      return {...state, uid: payload.uid};

    case types.USER_LOGOUT:
      return {};

    default:
      return state;
  }
}
