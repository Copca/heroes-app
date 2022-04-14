import { useMemo } from 'react';

import { getHerosByPublisher } from '../helpers/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeIn'>
			{heroes.map(heroe => (
				<HeroCard key={heroe.id} {...heroe} />
			))}
		</div>
	);
};

export default HeroList;
