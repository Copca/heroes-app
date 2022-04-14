import { AUTH_LOGIN, AUTH_LOGOUT } from '../../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				usuario: action.payload,
				autenticado: true
			};

		case AUTH_LOGOUT:
			return {
				...state,
				usuario: {},
				autenticado: false
			};

		default:
			return state;
	}
};

export default authReducer;
