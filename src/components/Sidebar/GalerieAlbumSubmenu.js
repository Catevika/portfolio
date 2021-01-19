import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const userId = process.env.REACT_APP_FLICKR_API_USERID;

const AlbumSubmenu = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [albumList, setAlbumList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					`https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`
				);

				const albumsFromList = result.data.photosets.photoset;
				setAlbumList(albumsFromList);
			} catch (error) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const albums = albumList.map((photoset) => {
		const album = {
			title: photoset.title._content,
			id: photoset.id
		};

		return (
			<NavLink
				exact
				to={`${process.env.PUBLIC_URL}/galerie/${photoset.id}`}
				key={photoset.id}
				className='submenu menu-item'
			>
				{album.title}
			</NavLink>
		);
	});

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					{isError && <div>Something went wrong...</div>}
					<div>{albums}</div>
				</>
			)}
		</>
	);
};

export default AlbumSubmenu;
