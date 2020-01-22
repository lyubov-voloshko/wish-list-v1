import authReducer from './auth';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import generalReducer from './general';
import wishListReducer from './wish-list';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    general: generalReducer,
    wishList: wishListReducer
})

export default rootReducer