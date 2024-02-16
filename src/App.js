import { useState } from 'react';
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

function App() {
	const [appImg, setAppImg] = useState(img1);
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<h1>Photo Mania</h1>
					<img
						src={appImg}
						alt='an example img'
						width='500'
						height='500'
					/>
					<div className='btn'>
						<button onClick={() => setAppImg(img2)}> view </button>
						<button
							className='hide'
							onClick={() => setAppImg(img1)}
						>
							{' '}
							Hide{' '}
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
