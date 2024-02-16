import { useState } from 'react';
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';

function App() {
	const [appImg, setAppImg] = useState(img1);
	const [appIcon, setAppIcon] = useState(icon1);
	const [imgTog, setImgTog] = useState(false);
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<h1>Photo Mania</h1>
					<img
						className='img'
						src={appImg}
						alt='an example img'
						width='500'
						height='500'
					/>
					<div className='btn'>
						<button
							onClick={() => {
								if (imgTog) {
									setAppIcon(icon1);
									setAppImg(img1);
									setImgTog(false);
								} else {
									setAppIcon(icon2);
									setAppImg(img2);
									setImgTog(true);
								}
							}}
						>
							{
								<img
									className='icon'
									src={appIcon}
									alt='icon'
								/>
							}
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
