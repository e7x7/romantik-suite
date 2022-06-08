import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
//import Navbar from './components/Navbar';
import './App.scss';

const App = () => {
	return (
		<>
			{/*<div className='App'>*/}
			{/*<div className='page'>*/}
			{/*<Navbar />*/}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
			{/*</div>*/}
			{/*</div>*/}
		</>
	);
};

export default App;
