const initState = {
    wishToDeleteId: null,
    wishToEditId: null
}

const wishListReducer = (state = initState, action) => {
    switch(action.type) {
        case 'WISH_CONFIRM_DELETED_OPEN':
            return {
                ...state,
                wishToDeleteId: action.id
            }
        case 'WISH_CONFIRM_DELETED_CLOSE':
                return {
                    ...state,
                    wishToDeleteId: null
                }
        case 'WISH_EDIT_OPEN':
                return {
                    ...state,
                    wishToEditId: action.id
                }
        case 'WISH_EDIT_CLOSE':
                return {
                    ...state,
                    wishToEditId: null
                }
    }
    return state;
}

export default wishListReducer