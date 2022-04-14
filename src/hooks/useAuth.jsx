import { useContext } from 'react';

import AuthContext from '../context/auth/AuthState';

const useAuth = () => {
	return useContext(AuthContext);
};

export default useAuth;
