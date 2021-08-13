/* eslint-disable prettier/prettier */
import * as types from '../values/types';
import auth from '@react-native-firebase/auth';

export function USER_SIGN(email, password) {
  return async (dispatch) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const uid = user.user.uid;
        dispatch({
          type: types.USER_SIGN,
          payload: uid,
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email adresi mevcut');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('hatalı mail');
        }

        console.error(error);
      });
  };
}

export function IS_USER_AUTH() {
  return async (dispatch) => {
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          return dispatch({type: types.AUTH_SUCCESS, payload: user});
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
}
