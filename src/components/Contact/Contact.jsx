import './contact.scss';
import { useRef } from 'react';
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { T } from '@tolgee/react';

const Contact = () => {
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

	//const form = useRef();

	//const sendEmail = (e) => {
	//	e.preventDefault();

	//	emailjs
	//		.sendForm(
	//			//'service_x87skrc',
	//			'gmail',
	//			'kuhsuite',
	//			form.current,
	//			'8d6Fzawwlpdxvss53'
	//		)
	//		.then(
	//			(result) => {
	//				console.log(result.text);
	//			},
	//			(error) => {
	//				console.log(error.text);
	//			}
	//		);
	//};
	//const submitText = () => {
	//	return <T>inputsubmit</T>;
	//};

	return (
		<>
			<div className='contact-container'>
				<div className='ctext-zone'>
					<div className='ctext-text'>
						<h2>
							<T>contact--h1</T> 💌
						</h2>
						<p>
							📞 <T>contact--call</T> <strong>+4915775429136</strong>
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
								{/*<li>
									<input type='text' placeholder='text' />
								</li>*/}
								<li>
									<textarea
										name='message'
										type='message'
										placeholder='Nachricht'
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
					{/*<h2>Rue des Vignes 3</h2>*/}
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
				{/*<div
					className='bottom-home--link'
					style={{ cursor: 'pointer' }}
					to='/'
					onClick={() => {
						window.scroll({
							top: 0,
							left: 0,
							behavior: 'smooth',
						});
					}}
				>
					<span>⬆🏠⬆</span>
				</div>*/}
			</div>
		</>
	);
};

export default Contact;
