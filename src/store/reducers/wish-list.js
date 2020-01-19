const initState = {
    wishToDeleteId: null
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
    }
    return state;
}

export default wishListReducer