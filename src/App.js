import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Album from './pages/Album/Album';
import Photo from './pages/Photo/Photo';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScrollAlbum from './pages/ScrollAlbum/ScrollAlbum';

import Sidebar from './components/Sidebar/Sidebar';
import SidebarButton from './components/Sidebar/SidebarButton';

import './css/main.css';

const App = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleSidebar = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<SidebarButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
			<Sidebar isOpen={isOpen} />

			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/galerie`}
					component={Gallery}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/galerie/:albumId`}
					component={Album}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/galerie/:albumId/aperçu`}
					component={ScrollAlbum}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/galerie/:albumId/:photoId`}
					component={Photo}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/projets`}
					component={Projects}
				/>
				{/* <Route
					exact
					path={`${process.env.PUBLIC_URL}/#/projets/:nom1`}
					component={Nom1}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/projets/:nom2`}
					component={Nom2}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/projets/:nom3`}
					component={Nom3}
				/> */}
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/apropos`}
					component={About}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/#/contact`}
					component={Contact}
				/>
			</Switch>
		</>
	);
};

export default App;
