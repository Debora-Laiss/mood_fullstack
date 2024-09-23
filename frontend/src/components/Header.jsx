import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<header className='header'>
			<h1>MoodRecord</h1>
			<nav>
				<ul className='menu'>
					<li><a href='#home'>Home</a></li>
					<li><a href='#about'>About</a></li>
					<li><a href='#application'>Application</a></li>
				</ul>
			</nav>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='toggle-mode-button'
			>
				Toggle Mode
			</button>
		</header>
	);
};

export default Header;
