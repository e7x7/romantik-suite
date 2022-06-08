import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { T, useSetLanguage, useCurrentLanguage } from '@tolgee/react';

const Navbar = () => {
	//const body = document.body;
	//let lastScroll = 0;

	//window.addEventListener('scroll', () => {
	//	const currentScroll = window.pageYOffset;
	//	if (currentScroll <= 0) {
	//		body.classList.remove('scroll-up');
	//		return;
	//	}

	//	if (
	//		currentScroll > lastScroll * 0.98 &&
	//		!body.classList.contains('scroll-down')
	//	) {
	//		body.classList.remove('scroll-up');
	//		body.classList.add('scroll-down');
	//	} else if (
	//		currentScroll < lastScroll * 1.02 &&
	//		body.classList.contains('scroll-down')
	//	) {
	//		body.classList.remove('scroll-down');
	//		body.classList.add('scroll-up');
	//	}
	//	lastScroll = currentScroll;
	//});
	const setLanguage = useSetLanguage();
	const getLanguage = useCurrentLanguage();
	return (
		<header>
			<motion.div
				animate={{ y: 100 }}
				transition={{ ease: 'easeOut', duration: 0.7 }}
				className='nav-bar'
			>
				<Link
					className='home--link'
					to='/'
					onClick={() => {
						window.scroll({
							top: 0,
							left: 0,
							behavior: 'smooth',
						});
					}}
				>
					{/*↪↩*/}
					<span>🏠</span>
				</Link>

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
							<NavLink to='/contact'>
								<span className='contact--li'>
									↠<T>nav--contact</T>
								</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</motion.div>
		</header>
	);
};

// 🇩🇪 🇫🇷 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇺🇸

export default Navbar;
