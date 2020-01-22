import { store } from '../../../src/index';

export const signIn = (credentials) => {
    return async (dispatch, getState, getFirebase) => {
        try {
            return await getFirebase().auth().signInWithEmailAndPassword(credentials.email, credentials.password);
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR', message: error.message })
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, getFirebase) => {
        try {
            return getFirebase().auth().signOut();
        } catch(error) {
            dispatch({ type: 'GENERAL_ERROR', message: error.message })
        }
    }
}