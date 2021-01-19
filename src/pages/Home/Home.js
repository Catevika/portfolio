import portraitImg from '../../img/portrait.jpg';

const Home = () => {
	return (
		<section className='hero'>
			<img src={portraitImg} alt='Luciano Bello' className='portrait-img' />
			<div className='author-container'>
				<h1 className='author'>
					Luciano Bello<span className='text'> dit </span>"Catevik"
				</h1>
				<h3 className='hobby'>Photographe</h3>
			</div>
		</section>
	);
};

export default Home;
