import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import { useParams } from 'react-router-dom';
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

	const index = album.findIndex((photo) => photo.id === photoId);

	const activePhoto = {
		id: album[index].id,
		server: album[index].server,
		secret: album[index].secret
	};

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<ul className='main-albumcontainer'>
					<li key={activePhoto.id} className='album-container'>
						<img
							src={`https://live.staticflickr.com/${activePhoto.server}/${activePhoto.id}_${activePhoto.secret}_b.jpg`}
							alt="Contenu de l'album"
							className='active-photoMax'
						/>
					</li>
				</ul>
			)}
		</>
	);
};

export default PhotoMax;
