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

export const openDeleteConfirmation = (id) => {
    return (dispatch) => {
        dispatch({ type: 'WISH_CONFIRM_DELETED_OPEN', id })
    }
}

export const closeDeleteConfirmation = () => {
    return (dispatch) => {
        dispatch({ type: 'WISH_CONFIRM_DELETED_CLOSE' })
    }
}

export const deleteWish = (id) => {
    return (dispatch, getState) => {
        //const firestore = getFirestore();
        console.log(id);
        store.firestore
            .delete({collection: 'wishes', doc: id})
            .then(() => {
                dispatch({ type: 'WISH_CONFIRM_DELETED_CLOSE' })
            })
            .catch((error) => {
                console.log(error.message);
                dispatch({ type: 'GENERAL_ERROR', error })                                
            });
    }
}