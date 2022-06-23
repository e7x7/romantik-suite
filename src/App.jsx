import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './styling/home.scss';

//import Navbar from '../Navbar';

import { T } from '@tolgee/react';

import images1 from '../src/images1';
import images2 from '../src/images2';
import images3 from '../src/images3';
//

import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from './components/Navbar/Navbar';

//
const Home = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				//'gmail',
				'service_x87skrc',
				'kuhsuite',
				form.current,
				'8d6Fzawwlpdxvss53'
			)
			.then(
				() => {
					alert('message sent');
					window.location.reload(false);
				},
				() => {
					alert('failed, try again');
				}
			);
	};

	//console.log(images1);
	const [width1, setWidth1] = useState(0);
	const [width2, setWidth2] = useState(0);
	const [width3, setWidth3] = useState(0);
	const carousel1 = useRef();
	const carousel2 = useRef();
	const carousel3 = useRef();

	// Carousel 1
	useEffect(() => {
		//console.log(
		//	'1',
		//	carousel1.current.scrollWidth,
		//	carousel1.current.offsetWidth
		//);
		setWidth1(carousel1.current.scrollWidth - carousel1.current.offsetWidth);
	}, []);
	// Carousel 2
	useEffect(() => {
		//console.log(
		//	'2',
		//	carousel2.current.scrollWidth,
		//	carousel2.current.offsetWidth
		//);
		setWidth2(carousel2.current.scrollWidth - carousel2.current.offsetWidth);
	}, []);
	// Carousel 3
	useEffect(() => {
		//console.log(
		//	'3',
		//	carousel3.current.scrollWidth,
		//	carousel3.current.offsetWidth
		//);
		setWidth3(carousel3.current.scrollWidth - carousel3.current.offsetWidth);
	}, []);
	//
	return (
		<>
			<Navbar />
			<div className='home-container'>
				{/* 111111111111111111111111111111111111111 */}
				<section className='one'>
					{/* CAROUSEL  */}
					<motion.div className='carousel' ref={carousel1}>
						<motion.div
							whileTap={{ cursor: 'grabbing' }}
							className='inner-carousel'
							drag='x'
							dragConstraints={{ right: 0, left: -width1 }}
						>
							{images1.map((image) => {
								return (
									<motion.div className='item' key={image}>
										<img src={image} alt='' />
										{/*<div className='imgdiv'></div>*/}
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>{' '}
					{/*TEXT AREA*/}
					<div className='text'>
						<motion.div
							animate={{ x: 40 }}
							transition={{ ease: 'easeOut', duration: 1.0 }}
							className='text-zone tz1'
						>
							<h1>🌼Romantik🏡Suite🌻</h1>
							Rue des Vignes 3
							<br />
							Oberhoffen-lès-Wissembourg
							<br />
							67160
							<br />
							<T>one--country</T>
							<p>
								<T>one--p</T>
							</p>
						</motion.div>
					</div>
					{/* END CAROUSEL END  */}
				</section>

				{/* 222222222222222222222222222222222222222222222 */}
				<section className='two'>
					{/* CAROUSEL  */}
					<motion.div className='carousel' ref={carousel2}>
						<motion.div
							whileTap={{ cursor: 'grabbing' }}
							className='inner-carousel'
							drag='x'
							dragConstraints={{ right: 0, left: -width2 }}
						>
							{images2.map((image) => {
								return (
									<motion.div className='item' key={image}>
										<img src={image} alt='' />
										{/*<div className='imgdiv'></div>*/}
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
					{/* END CAROUSEL END  */}
					{/*TEXT AREA*/}
					<div className='text'>
						<motion.div
							animate={{ x: 0 }}
							transition={{ ease: 'easeOut', duration: 1 }}
							className='text-zone tz2'
						>
							<h1>BED🛌😴</h1>
							<p>
								<T>two--p</T>
							</p>
						</motion.div>
					</div>
				</section>

				{/* 33333333333333333333333333333333 */}
				<section className='three'>
					{/* CAROUSEL  */}
					<motion.div className='carousel' ref={carousel3}>
						<motion.div
							whileTap={{ cursor: 'grabbing' }}
							className='inner-carousel'
							drag='x'
							dragConstraints={{ right: 0, left: -width3 }}
						>
							{images3.map((image) => {
								return (
									<motion.div className='item' key={image}>
										<img src={image} alt='' />
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>{' '}
					{/* END CAROUSEL END  */}
					{/*TEXT AREA*/}
					<div className='text'>
						<motion.div
							className='text-zone tz3'
							animate={{ x: -49 }}
							transition={{ ease: 'easeOut', duration: 1 }}
						>
							<h1>
								<span>&BREAKFAST🥐☕</span>
							</h1>
							<p>
								<T>three--p</T>
							</p>
						</motion.div>
					</div>
				</section>
				{/*  */}
			</div>
			<section id='contact' className='contact--div'>
				<div className='contact-container'>
					<div className='ctext-zone'>
						<div className='ctext-text'>
							<h2>
								<T>contact--h1</T> 💌
							</h2>
							<p>
								📞 <T>contact--call</T>
								<br /> <strong>+49 174 7067032</strong>
							</p>
							<p>
								<T>contact--mail</T>✍
							</p>
						</div>
						<div className='contact-form'>
							<form ref={form} onSubmit={sendEmail}>
								<ul>
									<li className='half'>
										<input
											name='name'
											id='name'
											type='text'
											placeholder='Name'
											required
										/>
									</li>
									<li className='half'>
										<input
											name='email'
											type='email'
											placeholder='Email'
											required
										/>
									</li>

									<li>
										<textarea
											name='message'
											type='message'
											placeholder='Message'
											required
										/>
									</li>
									<li>
										<input type='submit' className='flat-btn' value={`🆗📩`} />
									</li>
									{/*`🆗📩`*/}
								</ul>
							</form>
						</div>
					</div>
					<div className='info-map'>
						<strong className='map-arrow'>Rue des Vignes 3</strong>
						<br />
						Oberhoffen-lès-Wissembourg
						<br />
						67160 <T>one--country</T>
						<br />
						<span style={{ 'font-size': 'small' }} className='email--span'>
							romantiksuite.booking@gmail.com
						</span>
					</div>
					<div className='map-wrap'>
						<MapContainer
							center={[49.01569, 7.92246]}
							zoom={13}
							scrollWheelZoom={true}
						>
							<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
							<Marker position={[49.01569, 7.92246]}>
								<Popup>💕 Romantik Suite 🍇</Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>
			</section>
			<a className='bottom-home--link' href='/'>
				<span>⬆ 🏠 ⬆</span>
			</a>
		</>
	);
};

export default Home;
