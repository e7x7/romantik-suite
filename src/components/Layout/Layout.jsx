import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './layout.scss';

const Layout = () => {
	return (
		<div className='App'>
			<Navbar />
			<div className='page'>
				{/*<div className='bottom'>
					<span>Bottom - Boo _ B</span>
				</div>*/}
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
