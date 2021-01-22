import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import AlbumList from '../AlbumList/AlbumList';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const Gallery = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [gallery, setGallery] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`
				);

				const photosFromGallery = result.data.photos.photo;
				setGallery(photosFromGallery);
			} catch (error) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}

			{!isLoading && (
				<>
					<AlbumList />
					<h1 className='title'>Galerie</h1>
					<ul className='main-photo-container'>
						{gallery.map((photo) => (
							<li key={photo.id} className='photo-container'>
								<img
									src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
									alt='Contenu de la galerie'
									className='photo'
								/>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default Gallery;
