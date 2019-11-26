import { store } from '../../../src/index';

export const createWish = (wish) => {
    return (dispatch, getState) => {
        //const firestore = getFirestore();
        store.firestore
            .add({collection: 'wishes'}, { ...wish, isGranted: false })
            .then(() => {
                dispatch({ type: 'WISH_ADD', wish })                
            })
            .catch((error) => {
                dispatch({ type: 'GENERAL_ERROR', error })                                
            });
    }
}