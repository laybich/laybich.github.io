import React, { useContext } from 'react';
import { themeContext } from '../../context';
import { greeting } from '../../portfolio.js';
import './Logo.css';

function Logo() {
	const { theme } = useContext(themeContext)

	return (
		<div className='logo'>
			<span style={{ color: theme.text }}> &lt;</span>
			<span className='logo-name' style={{ color: theme.text }}>
				{greeting.logo_name}
			</span>
			<span style={{ color: theme.text }}> &gt;</span>
		</div>
	);
}

export default Logo;