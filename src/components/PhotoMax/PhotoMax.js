import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const PhotoMax = () => {
	let { albumId, photoId } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [album, setAlbum] = useLocalStorage('album', []);

	const [activeIndex, setActiveIndex] = useState(
		album.findIndex((photo) => photo.id === photoId)
	);

	let activePhoto = {
		id: album[activeIndex].id,
		server: album[activeIndex].server,
		secret: album[activeIndex].secret
	};

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

	console.log(activeIndex);

	const handlePrevious = () => {
		if (activeIndex === 0) {
			setActiveIndex(album.length);
		}
		setActiveIndex((activeIndex) => activeIndex - 1);
		return photoId === activePhoto.id;
	};

	const handleNext = () => {
		setActiveIndex((activeIndex) => (activeIndex + 1) % album.length);
		return photoId === activePhoto.id;
	};

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<Link
						to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${activePhoto.id}`}
						className='arrow-link'
					>
						<div className='arrow previous-arrow' onClick={handlePrevious}>
							&#60;
						</div>
					</Link>
					<ul className='main-albumcontainer'>
						{album.map((photo) => (
							<li key={photo.id} className='album-container'>
								{photo.id === photoId && (
									<img
										src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
										alt="Contenu de l'album"
										className='active-photoMax'
									/>
								)}
							</li>
						))}
					</ul>
					<Link
						to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${activePhoto.id}`}
						className='arrow-link'
					>
						<div className='arrow next-arrow' onClick={handleNext}>
							&#62;
						</div>
					</Link>
				</>
			)}
		</>
	);
};

export default PhotoMax;
