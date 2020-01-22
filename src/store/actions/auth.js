import { store } from '../../../src/index';

export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type:  'LOGIN_SUCCESS'})
            })
            .catch((error) => {
                dispatch({ type: 'LOGIN_ERROR', error })
            });
    }
}

export const signOut = () => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS'})
            })
            .catch((error) => {
                dispatch({ type: 'GENERAL_ERROR', error })
            });
    }
}