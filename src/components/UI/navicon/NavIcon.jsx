import React from 'react';
import './NavIcon.css';

function NavIcon() {
	return (
		<>
			<input className="menu-btn" type='checkbox' id='menu-btn' />
			<label className='menu-icon' htmlFor="menu-btn">
				<span className="navicon" />
			</label>
		</>
	);
}

export default NavIcon;