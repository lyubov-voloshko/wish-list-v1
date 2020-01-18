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

export const deleteWish = (id) => {
    return (dispatch, getState) => {
        //const firestore = getFirestore();
        console.log(id);
        store.firestore
            .delete({collection: 'wishes', doc: id})
            .then(() => {
                dispatch({ type: 'WISH_DELETED' })                
            })
            .catch((error) => {
                console.log(error.message);
                dispatch({ type: 'GENERAL_ERROR', error })                                
            });
    }
}