import HeroList from '../components/HeroList';

const DcScreen = () => {
	return (
		<div>
			<h1 className='text-xl font-bold'>Dc Commics</h1>
			<hr className=' mb-4' />

			<HeroList publisher={'DC Comics'} />
		</div>
	);
};

export default DcScreen;
