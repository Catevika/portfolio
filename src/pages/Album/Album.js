import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import Spinner from '../../components/Spinner/Spinner';
import AlbumList from '../AlbumList/AlbumList';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const Album = () => {
	let { albumId } = useParams();

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
					<AlbumList />
					<Link
						to={`${process.env.PUBLIC_URL}/galerie`}
						className='galerie-link'
					>
						Vers la galerie
					</Link>
					<ul className='main-album-container'>
						{album.map((photo) => (
							<li key={photo.id} className='album-container'>
								<Link
									to={`${process.env.PUBLIC_URL}/galerie/${albumId}/${photo.id}`}
								>
									<img
										src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
										alt="Contenu de l'album"
										className='album-photo'
									/>
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default Album;
