import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../helpers/getHeroesByName';
import useForm from '../hooks/useForm';
import HeroCard from '../components/HeroCard';

const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		termino: q
	});
	const { termino } = formValues;

	// const heroesFiltrado = getHeroesByName(q);
	// Evitamos que se lanze la función cada vez que el State cambie
	const heroesFiltrado = useMemo(() => getHeroesByName(q), [q]);

	const handleSubmit = e => {
		e.preventDefault();

		// Agrega el termino de búsqueda a la URL
		navigate(`?q=${termino}`);
	};
	return (
		<div>
			<h1 className='text-xl font-bold'>Buscar</h1>
			<hr className='mb-4' />

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='termino'
					placeholder='Buscar Heroe'
					className='border rounded-l px-3 py-1'
					value={termino}
					onChange={handleInputChange}
				/>

				<input
					type='submit'
					className='btn bg-sky-500 hover:bg-sky-600'
					value='Buscar'
				/>
			</form>

			<div className='mt-10'>
				<h4 className='font-bold'>Resultados</h4>
				<hr className='mb-8' />

				{q === '' ? (
					<div className='max-w-sm mx-auto bg-sky-200 text-sky-900 text-center rounded py-2'>
						Buscar un heroe
					</div>
				) : (
					heroesFiltrado.length === 0 && (
						<div className='max-w-sm mx-auto bg-red-200 text-red-900 text-center rounded py-2'>
							No hay resultados: {q}
						</div>
					)
				)}

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
					{heroesFiltrado.map(heroes => (
						<HeroCard key={heroes.id} {...heroes} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
