import { store } from '../../../src/index';

export const createWish = (wish) => {
    return async (dispatch, getState) => {
        try {
            await store.firestore.add({collection: 'wishes'}, { ...wish, isGranted: false, createdAt: new Date() });
            dispatch(showSuccessSnackbar('The wish was added to the list!'));
        } catch(error) {
            dispatch({ type: 'GENERAL_ERROR', message: error.message })
        }
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
    return async (dispatch, getState) => {
        try {
            await store.firestore.delete({collection: 'wishes', doc: id});
            dispatch({ type: 'WISH_CONFIRM_DELETED_CLOSE' })
            dispatch(showSuccessSnackbar('The wish was removed from the list!'));
        } catch(error) {
            console.log(error.message);
            dispatch({ type: 'GENERAL_ERROR', message: error.message })
        }
    }
}

export const openEditDialog = (id) => {
    return (dispatch) => {
        dispatch({ type: 'WISH_EDIT_OPEN', id })
    }
}

export const closeEditDialog = () => {
    return (dispatch) => {
        dispatch({ type: 'WISH_EDIT_CLOSE' })
    }
}

export const editWish = (id, wish) => {
    return async (dispatch, getState) => {
        try {
            await store.firestore.update({collection: 'wishes', doc: id}, wish);
            dispatch({ type: 'WISH_EDIT_CLOSE' })
            dispatch(showSuccessSnackbar('The wish was edited!'));
        } catch(error) {
            console.log(error.message);
            dispatch({ type: 'GENERAL_ERROR', message: error.message })                                
        }
    }
}

export const openGrantDialog = (id) => {
    return (dispatch) => {
        dispatch({ type: 'WISH_GRANT_OPEN', id })
    }
}

export const closeGrantDialog = () => {
    return (dispatch) => {
        dispatch({ type: 'WISH_GRANT_CLOSE' })
    }
}

export const grantWish = (id, wish) => {
    const grantedDetails = {
        ...wish, 
        isGranted: true, 
        grantDate: wish.grantDate ? new Date(wish.grantDate) : null
    }
    return async (dispatch, getState) => {
        try {
            await store.firestore.update({collection: 'wishes', doc: id}, grantedDetails);
            dispatch({ type: 'WISH_GRANT_CLOSE' })
            dispatch(showSuccessSnackbar('The wish was granted!'));
        } catch(error) {
            console.log(error.message);
            dispatch({ type: 'GENERAL_ERROR', message: error.message })                                
        }
    }
}

const showSuccessSnackbar = (message) => {
    return (dispatch) => {
        dispatch({ type: 'GENERAL_SUCCESS', message })
        /*setTimeout(function(){ 
            dispatch({ type: 'GENERAL_SUCCESS_CLOSE'})
        }, 5000);*/
    }
}

export const closeErrorSnackbar = () => {
    return (dispatch) => {
        dispatch({ type: 'GENERAL_ERROR_CLOSE' })
    }
}