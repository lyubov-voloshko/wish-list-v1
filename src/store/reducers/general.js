const initState = {
	successMessage: null,
	errorMessage: null
};

const generalReducer = (state = initState, action) => {
	switch (action.type) {
		case "GENERAL_SUCCESS":
			return {
				...state,
				successMessage: action.message
			};
		case "GENERAL_SUCCESS_CLOSE":
			return {
				...state,
				successMessage: null
			};
		case "GENERAL_ERROR":
			return {
				...state,
				errorMessage: action.message
			};
		case "GENERAL_ERROR_CLOSE": {
			return {
				...state,
				errorMessage: null
			};
		}
	}
	return state;
};

export default generalReducer;
