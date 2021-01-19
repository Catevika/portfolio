import { NavLink /* , Link */ } from 'react-router-dom';
import GalerieAlbumSubmenu from './GalerieAlbumSubmenu';

const Sidebar = ({ isOpen }) => {
	return (
		<div className={isOpen ? 'sidebar visible' : 'sidebar hidden'}>
			<ul className='menu-items'>
				<li className='menu'>
					<NavLink
						exact
						activeClassName='current'
						to={`${process.env.PUBLIC_URL}/`}
						className='menu-item'
					>
						Accueil
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						exact
						activeClassName='current'
						to={`${process.env.PUBLIC_URL}/galerie`}
						className='menu-item'
					>
						Galerie
					</NavLink>
					<ul className='dropdown-menu'>
						<GalerieAlbumSubmenu />
					</ul>
				</li>
				<li className='menu'>
					<NavLink
						exact
						activeClassName='current'
						to={`${process.env.PUBLIC_URL}/seriesX23`}
						className='menu-item'
					>
						Séries X23
					</NavLink>
					{/* <ul className='dropdown-menu'>
						<li>
							<Link
								className='submenu menu-item submenu-item'
								to={`${process.env.PUBLIC_URL}/seriesX23/:nom1`}
							>
								Nom1
							</Link>
						</li>
						<li>
							<Link
								className='submenu menu-item submenu-item'
								to={`${process.env.PUBLIC_URL}/seriesX23/:nom2`}
							>
								Nom2
							</Link>
						</li>
						<li>
							<Link
								className='submenu menu-item submenu-item'
								to={`${process.env.PUBLIC_URL}/seriesX23/:nom3`}
							>
								Nom3
							</Link>
						</li>
					</ul> */}
				</li>
				<li className='menu'>
					<NavLink
						exact
						activeClassName='current'
						to={`${process.env.PUBLIC_URL}/apropos`}
						className='menu-item'
					>
						A propos
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						exact
						activeClassName='current'
						to={`${process.env.PUBLIC_URL}/contact`}
						className='menu-item'
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
