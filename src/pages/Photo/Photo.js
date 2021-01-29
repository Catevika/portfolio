import { Link, useParams } from 'react-router-dom';
import PhotoMax from '../../components/PhotoMax/PhotoMax';
import PhotoThumbnail from '../../components/PhotoThumbnail/PhotoThumbnail';

const Photo = () => {
	let { albumId } = useParams();

	return (
		<>
			<section className='lightbox'>
				<div className='links'>
					<Link to={`/galerie/${albumId}`} className='gallery-link up'>
						Vers l'album
					</Link>
					<Link
						to={`/galerie/${albumId}/aperçu`}
						className='gallery-link center'
					>
						Aperçu rapide
					</Link>
				</div>
				<PhotoMax />
			</section>
			<PhotoThumbnail />
		</>
	);
};

export default Photo;
