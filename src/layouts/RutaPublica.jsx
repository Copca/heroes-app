import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const RutaPublica = () => {
	const { autenticado } = useAuth();

	const lastPath = localStorage.getItem('lastPath') ?? '/marvel';

	return (
		<>
			{autenticado ? (
				<Navigate to={lastPath} />
			) : (
				<div className='min-h-screen'>
					<Outlet />
				</div>
			)}
		</>
	);
};

export default RutaPublica;
