import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import { Link, /* useHistory, */ useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import PhotoMax from '../PhotoMax/PhotoMax';
import PhotoThumbnail from '../PhotoThumbnail/PhotoThumbnail';
// import previous from '../../img/previous.svg';
// import next from '../../img/next.svg';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const Photo = () => {
	// let history = useHistory();
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

	const [activeIndex, setActiveIndex] = useState(
		album.findIndex((photo) => photo.id === photoId)
	);

	console.log(activeIndex);

	let activePhoto = {
		id: album[activeIndex].id,
		server: album[activeIndex].server,
		secret: album[activeIndex].secret
	};

	const handlePrevious = () => {
		if (activeIndex === 0) {
			setActiveIndex(album.length);
		}
		setActiveIndex((activeIndex) => activeIndex - 1);
		return photoId === activePhoto.id;
	};

	const handleNext = () => {
		let nextIndex = activeIndex + 1;
		setActiveIndex(nextIndex % album.length);
		return photoId === activePhoto.id;
	};

	// let back = (e) => {
	// 	e.stopPropagation();
	// 	history.goBack();
	// };

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<section className='lightbox' /* onClick={back} */>
						<Link
							to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${activePhoto.id}`}
							className='arrow-link'
						>
							<div className='arrow previous-arrow' onClick={handlePrevious}>
								&#60;
							</div>
						</Link>
						<PhotoMax />
						<Link
							to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${activePhoto.id}`}
							className='arrow-link'
						>
							<div className='arrow next-arrow' onClick={handleNext}>
								&#62;
							</div>
						</Link>
					</section>
					<PhotoThumbnail />
				</>
			)}
			;
		</>
	);
};

export default Photo;
