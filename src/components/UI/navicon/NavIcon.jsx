import React from 'react';
import './NavIcon.css';

function NavIcon() {
	return (
		<div>
			<input className="menu-btn" type='checkbox' id='menu-btn' />
			<label className='menu-icon' htmlFor="menu-btn">
				<span className="navicon" />
			</label>
		</div>
	);
}

export default NavIcon;