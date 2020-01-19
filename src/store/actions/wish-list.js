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
    return (dispatch, getState) => {
        store.firestore
            .update({collection: 'wishes', doc: id}, wish)
            .then(() => {
                dispatch({ type: 'WISH_EDIT_CLOSE' })
            })
            .catch((error) => {
                console.log(error.message);
                dispatch({ type: 'GENERAL_ERROR', error })                                
            });
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
    console.log(id);
    console.log(wish);
    const grantingWish = {...wish, isGranted: true}
    return (dispatch, getState) => {
        store.firestore
            .update({collection: 'wishes', doc: id}, grantingWish)
            .then(() => {
                dispatch({ type: 'WISH_GRANT_CLOSE' })
            })
            .catch((error) => {
                console.log(error.message);
                dispatch({ type: 'GENERAL_ERROR', error })                                
            });
    }
}
