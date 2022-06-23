import './navbar.scss';
import { motion } from 'framer-motion';

import { T, useSetLanguage, useCurrentLanguage } from '@tolgee/react';

const Navbar = () => {
	const refreshPage = () => {
		window.location.reload();
	};
	const setLanguage = useSetLanguage();
	const getLanguage = useCurrentLanguage();
	return (
		<header>
			<motion.div
				animate={{ y: 100 }}
				transition={{ ease: 'easeOut', duration: 0.7 }}
				className='nav-bar'
			>
				<a className='home--link' href='.' onClick={refreshPage}>
					<span>🏠</span>
				</a>

				<nav>
					<ul>
						<li>
							<span className='language--li'>
								<button
									onClick={() => setLanguage('en')}
									style={{
										background:
											getLanguage() === 'en' ? '#ffffff' : '#ffffff26',
									}}
									className='language us'
								>
									🇺🇸
								</button>
								<button
									onClick={() => setLanguage('de-DE')}
									style={{
										background:
											getLanguage() === 'de-DE' ? '#ffffff' : '#ffffff11',
									}}
									className='language de'
								>
									🇩🇪
								</button>
								<button
									onClick={() => setLanguage('fr-FR')}
									style={{
										background:
											getLanguage() === 'fr-FR' ? '#ffffff' : '#ffffff26',
									}}
									className='language fr'
								>
									🇫🇷
								</button>
							</span>
						</li>
						<li>
							<a
								target='_blank'
								rel='noreferrer'
								href='http://www.booking.com/Share-NwVLyv'
							>
								<span className='booking--li'>Booking.com</span>
							</a>
						</li>
						<li>
							<a href='#contact'>
								<span className='contact--li'>
									↠<T>nav--contact</T>
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</motion.div>
		</header>
	);
};

// 🇩🇪 🇫🇷 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇺🇸

export default Navbar;
