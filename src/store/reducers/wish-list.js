const initState = {
    wishToDeleteId: null,
    wishToEditId: null,
    wishToGrantId: null
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
        case 'WISH_GRANT_OPEN':
            return {
                ...state,
                wishToGrantId: action.id
            }
        case 'WISH_GRANT_CLOSE':
            return {
                ...state,
                wishToGrantId: null
            }
    }
    return state;
}

export default wishListReducer