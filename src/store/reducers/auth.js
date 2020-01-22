const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR': {
            console.log(action.message);
            return {
                ...state,
                authError: action.message
            };
        }

        default: return state;       
    }
}

export default authReducer