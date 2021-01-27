import { Link, useParams } from 'react-router-dom';
import PhotoMax from '../../components/PhotoMax/PhotoMax';
import PhotoThumbnail from '../../components/PhotoThumbnail/PhotoThumbnail';

const Photo = () => {
	let { albumId } = useParams();

	return (
		<>
			<section className='lightbox'>
				<Link to={`/galerie/${albumId}`} className='galerie-link up'>
					Vers l'album
				</Link>
				<Link to={`/galerie/${albumId}/aperçu`} className='galerie-link center'>
					Aperçu rapide
				</Link>
				<PhotoMax />
			</section>
			<PhotoThumbnail />
		</>
	);
};

export default Photo;
