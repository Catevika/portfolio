import { Link, useParams } from 'react-router-dom';
import PhotoMax from '../../components/PhotoMax/PhotoMax';
import PhotoThumbnail from '../../components/PhotoThumbnail/PhotoThumbnail';

const Photo = () => {
	let { albumId } = useParams();

	return (
		<>
			<section className='lightbox'>
				<Link
					to={`${process.env.PUBLIC_URL}/galerie/${albumId}`}
					className='galerie-link'
				>
					Vers l'album
				</Link>
				<PhotoMax />
			</section>
			<PhotoThumbnail />
		</>
	);
};

export default Photo;
