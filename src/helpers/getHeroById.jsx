import { heroes } from '../data/heroes';

const getHeroById = id => {
	// console.log('consultando...');
	return heroes.find(heroe => heroe.id === id);
};

export { getHeroById };
