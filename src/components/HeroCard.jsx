import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, alter_ego, characters }) => {
	return (
		<div className='flex shadow-md shadow-slate-500 rounded-md overflow-hidden animate__animated animate__fadeIn'>
			<div className='w-1/3'>
				<img
					src={`./img/${id}.jpg`}
					alt={superhero}
					className='h-full object-cover'
				/>
			</div>

			<div className='w-2/3 p-4'>
				<h5 className='text-xl font-bold mb-2'>{superhero}</h5>
				<p>{alter_ego}</p>

				{alter_ego !== characters && <p>{characters}</p>}

				<Link
					to={`/hero/${id}`}
					className='inline-block text-blue-500 hover:text-blue-600 hover:font-bold mt-4 transition'
				>
					Ver Más
				</Link>
			</div>
		</div>
	);
};

export default HeroCard;
