import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthState } from './context/auth/AuthState';

import RutaProtegida from './layouts/RutaProtegida';
import RutaPublica from './layouts/RutaPublica';
import MarvelScreen from './pages/MarvelScreen';
import DcScreen from './pages/DcScreen';
import HeroScreen from './pages/HeroScreen';
import SearchScreen from './pages/SearchScreen';
import LoginScreen from './pages/LoginScreen';

const App = () => {
	return (
		<HashRouter>
			<AuthState>
				<Routes>
					{/* //* Rutas Públicas */}
					<Route path='/' element={<RutaProtegida />}>
						<Route path='marvel' element={<MarvelScreen />} />
						<Route path='dc' element={<DcScreen />} />
						<Route path='hero/:id' element={<HeroScreen />} />
						<Route path='search' element={<SearchScreen />} />
					</Route>

					{/* //* Rutas Privadas */}
					<Route path='/login' element={<RutaPublica />}>
						<Route index element={<LoginScreen />} />
					</Route>
				</Routes>
			</AuthState>
		</HashRouter>
	);
};

export default App;
