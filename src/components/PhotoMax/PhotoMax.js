import axios from 'axios';
import { useState, useEffect } from 'react';
import { /* Link, */ useParams } from 'react-router-dom';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import Spinner from '../Spinner/Spinner';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const PhotoMax = () => {
	let { albumId, photoId } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [album, setAlbum] = useLocalStorage('album', []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`
				);

				const photosFromAlbum = result.data.photoset.photo;
				setAlbum(photosFromAlbum);
			} catch (error) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [albumId, setAlbum]);

	// ! ALLER ICI: https://github.com/JamesIves/github-pages-deploy-action/packages/229985 pour configurer les github actions

	// const [activeIndex, setActiveIndex] = useState(
	// 	album.findIndex((photo) => photo.id === photoId)
	// );

	// let currentPhoto = {
	// 	id: album[activeIndex].id,
	// 	server: album[activeIndex].server,
	// 	secret: album[activeIndex].id
	// };

	// const handlePrevious = () => {
	// 	if (activeIndex === 0) {
	// 		setActiveIndex(album.length);
	// 	}
	// 	setActiveIndex((activeIndex) => activeIndex - 1);
	// 	return photoId === currentPhoto.id;
	// };

	// const handleNext = () => {
	// 	setActiveIndex((activeIndex) => (activeIndex + 1) % album.length);
	// 	return photoId === currentPhoto.id;
	// };

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<div className='photoMax-container'>
						{/* <Link
							to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${currentPhoto.id}`}
						>
							<div className='arrow previous-arrow' onClick={handlePrevious}>
								&#60;
							</div>
						</Link> */}
						<ul className='main-photoMax-container'>
							{/* <div className='photoMax-sub-container'> */}
							{album.map((photo, i) => (
								<li key={i} className='album-container'>
									{photo.id === photoId && (
										// <section className='album-photoMax-section'>
										<img
											src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
											alt="Contenu de l'album"
											className='photoMax'
										/>
										// </section>
									)}
								</li>
							))}
							{/* </div> */}
						</ul>
						{/* <Link
							to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${currentPhoto.id}`}
						>
							<div className='arrow next-arrow' onClick={handleNext}>
								&#62;
							</div>
						</Link> */}
					</div>
				</>
			)}
		</>
	);
};

export default PhotoMax;
