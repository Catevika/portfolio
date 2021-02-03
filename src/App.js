import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Sidebar from './components/Sidebar/Sidebar';
import SidebarButton from './components/Sidebar/SidebarButton';
import Album from './components/Album/Album';
import Photo from './components/Photo/Photo';
import ScrollAlbum from './components/ScrollAlbum/ScrollAlbum';

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
				<Route exact path='/' component={Home} />
				<Route exact path='/galerie' component={Gallery} />
				<Route exact path='/galerie/:albumId' component={Album} />
				<Route exact path='/galerie/:albumId/aperçu' component={ScrollAlbum} />
				<Route exact path='/galerie/:albumId/:photoId' component={Photo} />
				<Route exact path='/projets' component={Projects} />
				{/* <Route
					exact
					path='/projets/:nom1'
					component={Nom1}
				/>
				<Route
					exact
					path='/projets/:nom2'
					component={Nom2}
				/>
				<Route
					exact
					path='/projets/:nom3'
					component={Nom3}
				/> */}
				<Route exact path='/apropos' component={About} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</>
	);
};

export default App;
