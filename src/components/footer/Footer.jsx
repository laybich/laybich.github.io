import React, { useContext } from 'react';
import './Footer.css';
import { Fade } from 'react-reveal';
import { greeting } from '../../portfolio';
import { themeContext } from '../../context';
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
	const { theme } = useContext(themeContext);

	return (
		<footer className='footer-div'>
			<Fade>
				<p className='footer-text' style={{ color: theme.secondaryText }}>
					Made with <span role='img'>❤️</span> by {greeting.title}
				</p>
			</Fade>
		</footer>
	);
}