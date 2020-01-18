const initState = {
    
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            console.log('login success');
            return state;
        }

        case 'LOGIN_ERROR': {
            console.log('login fail');
            console.log(action.error.message);
            return state;
        }
        
        case 'SIGNOUT_SUCCESS': {
            console.log('logout success');
            return state;
        }

        default: return state;       
    }
}

export default authReducer