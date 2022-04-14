import { createContext, useReducer, useEffect } from 'react';

import authReducer from './authReducer';

import { AUTH_LOGIN, AUTH_LOGOUT } from '../../types';

const AuthContext = createContext();

const AuthState = ({ children }) => {
	const initialState = {
		usuario: JSON.parse(localStorage.getItem('usuario')) || {},
		autenticado: false
	};

	// Dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(authReducer, initialState);

	// usuario->{nombre: Ernesto, email: ernesto@correo.com}; autenciado->true
	useEffect(() => {
		const usuarioLS = JSON.parse(localStorage.getItem('usuario'));

		if (usuarioLS) {
			dispatch({
				type: AUTH_LOGIN,
				payload: usuarioLS
			});
		}
	}, []);

	/**
	 * Funciones
	 */

	// nombre->Ernesto; autenticado->true
	const login = usuario => {
		// Guardar en LS
		localStorage.setItem('usuario', JSON.stringify(usuario));

		dispatch({
			type: AUTH_LOGIN,
			payload: usuario
		});
	};

	// nombre: ''; autenticado->false
	const logout = () => {
		// Borrar el LS
		localStorage.removeItem('usuario');

		dispatch({
			type: AUTH_LOGOUT
		});
	};

	return (
		<AuthContext.Provider
			value={{
				usuario: state.usuario,
				autenticado: state.autenticado,
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthState };
export default AuthContext;
