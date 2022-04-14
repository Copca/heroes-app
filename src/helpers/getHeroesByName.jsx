import { heroes } from '../data/heroes';

const getHeroesByName = (name = '') => {
	// console.log('getHeroByName called...');

	if (name.length === 0) {
		return [];
	}

	name = name.toLocaleLowerCase();

	return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
};

export { getHeroesByName };
