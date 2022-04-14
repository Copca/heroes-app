import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { getHeroById } from '../helpers/getHeroById';

const HeroScreen = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const heroe = useMemo(() => getHeroById(id), [id]);

	const { superhero, alter_ego, publisher, first_appearance, characters } = heroe;

	const handleClick = () => {
		navigate(-1);
	};

	if (!heroe) return <Navigate to={'/marvel'} />;

	return (
		<div className='flex justify-center'>
			<div className='w-1/4 max-h-full border rounded shadow p-2 animate__animated animate__backInLeft'>
				<img src={`./img/${id}.jpg`} alt={superhero} />
			</div>

			<div className='w-3-4 p-8 animate__animated animate__backInRight'>
				<h3 className='text-xl font-bold mb-2'>{heroe.superhero}</h3>
				<ul className='mb-8'>
					<li>
						<span className='font-bold'>Identidad:</span> {alter_ego}
					</li>
					<li>
						<span className='font-bold'>Editorial:</span> {publisher}
					</li>
					<li>
						<span className='font-bold'>Aparición:</span> {first_appearance}
					</li>
				</ul>

				<h5 className='font-bold'>Personaje</h5>
				<p>{characters}</p>

				<button
					type='button'
					className='btn bg-sky-500 hover:bg-sky-600 mt-4'
					onClick={handleClick}
				>
					Regresar
				</button>
			</div>
		</div>
	);
};

export default HeroScreen;
