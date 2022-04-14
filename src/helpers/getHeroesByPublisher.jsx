import { heroes } from '../data/heroes';

const getHerosByPublisher = publisher => {
	// console.log('Consultando DB...');
	const validPublishers = ['DC Comics', 'Marvel Comics'];

	if (!validPublishers.includes(publisher)) {
		throw new Error(`${publisher} no es válido`);
	}

	return heroes.filter(heroe => heroe.publisher === publisher);
};

export { getHerosByPublisher };
