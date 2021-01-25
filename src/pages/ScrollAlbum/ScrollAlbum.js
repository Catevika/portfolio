import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import Spinner from '../../components/Spinner/Spinner';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const ScrollAlbum = () => {
	let { albumId } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [album, setAlbum] = useLocalStorage('album', []);
	const [albumTitle, setAlbumTitle] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`
				);

				const AlbumOfPhotos = result.data.photoset;
				setAlbumTitle(AlbumOfPhotos.title);

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
					<Link
						to={`${process.env.PUBLIC_URL}/galerie`}
						className='galerie-link up'
					>
						Vers la galerie
					</Link>
					<Link
						to={`${process.env.PUBLIC_URL}/galerie/${albumId}`}
						className='galerie-link bottom'
					>
						Vers l'album
					</Link>
					<h1 className='title'>
						Album: <span className='title-normal'>{albumTitle}</span>
					</h1>
					<div className='photoMax-container'>
						<ul className='main-photoMax-container'>
							<div className='photoMax-sub-container'>
								{album.map((photo, i) => (
									<li key={i} className='album-container'>
										<section className='album-photoMax-section'>
											<img
												src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
												alt="Contenu de l'album"
												className='photoMax'
											/>
										</section>
									</li>
								))}
							</div>
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default ScrollAlbum;
