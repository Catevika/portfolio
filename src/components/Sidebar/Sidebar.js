const Sidebar = ({ isOpen }) => {
	return (
		<div className={isOpen ? 'sidebar visible' : 'sidebar hidden'}>
			<ul className='menu-items'>
				<li className='menu'>
					<a className='menu-item' href='/'>
						Accueil
					</a>
				</li>
				<li className='menu'>
					<a className='menu-item' href='/galleries'>
						Galleries
					</a>
					<ul className='dropdown-menu'>
						<li>
							<a className='submenu menu-item' href='/portraits'>
								Portraits
							</a>
						</li>
						<li>
							<a className='submenu menu-item' href='/street'>
								Street Photos
							</a>
						</li>
						<li>
							<a className='submenu menu-item' href='/nature'>
								Nature-morte
							</a>
						</li>
					</ul>
				</li>
				<li className='menu'>
					<a className='menu-item' href='/projets'>
						Projets
					</a>
					<ul className='dropdown-menu'>
						<li>
							<a className='submenu menu-item' href='/nom1'>
								Nom1
							</a>
						</li>
						<li>
							<a className='submenu menu-item' href='/nom2'>
								Nom2
							</a>
						</li>
						<li>
							<a className='submenu menu-item' href='/nom3'>
								Nom3
							</a>
						</li>
					</ul>
				</li>
				<li className='menu'>
					<a className='menu-item' href='/apropos'>
						A propos
					</a>
				</li>
				<li className='menu'>
					<a className='menu-item' href='/contact'>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
