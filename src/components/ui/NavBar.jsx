import { NavLink, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const NavBar = () => {
	const navigate = useNavigate();
	const { usuario, logout } = useAuth();

	const handleClick = () => {
		logout();

		navigate('/login', { replace: true });
	};

	return (
		<div className='bg-slate-900 text-white py-4'>
			<div className='container flex items-center space-x-20 '>
				<div className='text-2xl font-bold '>Super Heroes App</div>

				<nav className='flex-1 flex justify-between items-center'>
					<div className='space-x-8'>
						<NavLink
							to={'marvel'}
							className={({ isActive }) =>
								isActive
									? 'border-b border-white'
									: 'hover:text-slate-400'
							}
						>
							Marvel
						</NavLink>

						<NavLink
							to={'dc'}
							className={({ isActive }) =>
								isActive
									? 'border-b border-white'
									: 'hover:text-slate-400'
							}
						>
							DC
						</NavLink>

						<NavLink
							to={'search'}
							className={({ isActive }) =>
								isActive
									? 'border-b border-white'
									: 'hover:text-slate-400'
							}
						>
							Buscar
						</NavLink>
					</div>

					<div className='flex items-center space-x-8'>
						<p>{usuario?.nombre}</p>

						<button
							type='button'
							className='btn bg-slate-500 hover:bg-white hover:text-slate-700'
							onClick={handleClick}
						>
							Logout
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
