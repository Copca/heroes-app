import HeroList from '../components/HeroList';

const MarvelScreen = () => {
	return (
		<div>
			<h1 className='text-xl font-bold'>Marvel Comics</h1>
			<hr className='mb-4' />

			<HeroList publisher={'Marvel Comics'} />
		</div>
	);
};

export default MarvelScreen;
