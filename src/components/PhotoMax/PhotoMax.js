import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<div className='photoMax-container'>
						<ul className='main-photoMax-container'>
							{album.map((photo, i) => (
								<li key={i} className='album-container'>
									{photo.id === photoId && (
										<img
											src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
											alt="Contenu de l'album"
											className='photoMax'
										/>
									)}
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default PhotoMax;
