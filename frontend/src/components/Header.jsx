import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>MoodRecord</h1>
			<nav>
				<ul className='menu'>
					<li><a href='#home'>Home</a></li>
					<li><a href='#about'>About</a></li>
					<li><a href='#contact'>Contact</a></li>
				</ul>
			</nav>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
