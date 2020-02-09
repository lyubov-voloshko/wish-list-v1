const initState = {
    wishCreateShown: false,
    wishToDeleteId: null,
    wishToEditId: null,
    wishToGrantId: null,
    currentPageWishes: null
}

const wishListReducer = (state = initState, action) => {
    switch(action.type) {
        case 'WISH_CREATE_OPEN':
            return {
                ...state,
                wishCreateShown: true
            }
        case 'WISH_CREATE_CLOSE':
            return {
                ...state,
                wishCreateShown: false
            }
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
        case 'WISHES_SHOW_NEXT':
            return {
                ...state,
                currentPageWishes: action.nextItems
            }
    }
    return state;
}

export default wishListReducer