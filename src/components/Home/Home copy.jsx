const Home = () => {
	return (
		<>
			<div className='home-container'>
				{/*  */}
				<section className='one'>
					<div className='text-zone'>
						<h1>HOME</h1>
						<p>Elsass und so und dies das.</p>
					</div>

					<div className='container'>
						<div className='grid'>
							<div className='card'>
								<img className='card--img' src={hausvorne} alt='hausvorne' />
							</div>
							<div className='card'>
								<img className='card--img' src={wohnen} alt='wohnen' />
							</div>
							<div className='card'>
								<img className='card--img' src={zaun} alt='zaun' />
							</div>
							<div className='card'>
								<img className='card--img' src={garten} alt='garten' />
							</div>
							<div className='card'>
								<img className='card--img' src={sitzecke} alt='sitzecke' />
							</div>
							{/*<div className='card'>
								<img className='card--img' src={hausvorne} alt='hausvorne' />
							</div>*/}
						</div>
					</div>
				</section>
				{/*  */}
				<section className='two'>
					<div className='text-zone'>
						<h1>HOMssssE</h1>
						<p>Elsass und so und dies das.</p>
						<p>Elssasdass und so undas dies das.</p>
					</div>
				</section>
				{/*  */}
				<section className='three'>
					<div className='text-zone'>
						<h1>adas</h1>
						<p>Elsass und so und dies das.</p>
						<p>Elssasdass und so undas dies das.</p>
					</div>
				</section>
				{/*  */}
			</div>
		</>
	);
};

export default Home;
