import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import './home.scss';

//import Navbar from '../Navbar';

import { T } from '@tolgee/react';

import images1 from '../../images1';
import images2 from '../../images2';
import images3 from '../../images3';

const Home = () => {
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
			<div className='home-container'>
				{/* 111111111111111111111111111111111111111 */}
				<section className='one'>
					{/*<p>Fern ab von Trubel und dem Rauschen des Alltags.</p>*/}
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
							<h1
							//animate={{ x: 5 }}
							//transition={{ ease: 'easeOut', duration: 0.7 }}
							>
								🌼Romantik🏡Suite🌻
							</h1>
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
							<h1
							//animate={{ x: -20 }}
							//transition={{ ease: 'easeOut', duration: 0.7 }}
							>
								BED🛌😴
							</h1>
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
							<h1
							//animate={{ x: -20 }}
							//transition={{ ease: 'easeOut', duration: 0.7 }}
							>
								<span>&BREAKFAST🥐☕</span>
							</h1>
							<p>
								<T>three--p</T>
							</p>
						</motion.div>
					</div>
					<Link
						className='bottom-home--link'
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
						<span>⬆🏠⬆</span>
					</Link>
				</section>
				{/*  */}
			</div>
		</>
	);
};

export default Home;
