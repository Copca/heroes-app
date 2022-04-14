import { Outlet, Navigate, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import NavBar from '../components/ui/NavBar';

const RutaProtegida = () => {
	const { pathname, search } = useLocation();
	const { autenticado } = useAuth();

	// Guardar la última pápina visitada
	if (pathname !== '/') {
		localStorage.setItem('lastPath', pathname + search);
	}

	return (
		<>
			{autenticado ? (
				<>
					<NavBar />

					<main className='container my-4 '>
						<Outlet />
					</main>
				</>
			) : (
				<Navigate to={'/login'} />
			)}
		</>
	);
};

export default RutaProtegida;
