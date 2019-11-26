import './index.css';

import * as serviceWorker from './serviceWorker';

import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import firebaseConfig from './../src/firebase';
import rootReducer from './store/reducers/root';
import thunk from 'redux-thunk';

/*export const store  = createStore(rootReducer, 
    compose(
        reduxFirestore(firebase),
        applyMiddleware(thunk.withExtraArgument(getFirebase)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    
);*/

const rrfConfig = {
    userProfile: 'users'
  }

const createStoreWithFirebase = compose(
        reduxFirestore(firebase, rrfConfig),
        applyMiddleware(thunk.withExtraArgument(getFirebase)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)

export const store = createStoreWithFirebase(rootReducer)

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>            
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
