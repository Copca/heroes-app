import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	// Obtener de LS la última URL visitada
	const lastPath = localStorage.getItem('lastPath') ?? '/marvel';

	const handleClick = () => {
		login({
			nombre: 'Ernesto Israel',
			email: 'ernesto@correo.com'
		});

		navigate(lastPath, { replace: true });
	};

	return (
		<div className='container py-8'>
			<h1 className='text-2xl'>LoginScreen</h1>
			<hr className='mb-20' />

			<div className='flex justify-center'>
				<button
					type='button'
					className='btn bg-stone-500 hover:bg-stone-600'
					onClick={handleClick}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginScreen;
