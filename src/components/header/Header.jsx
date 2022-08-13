import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { settings } from '../../portfolio.js';
import { themeContext } from '../../context';
import NavIcon from '../UI/navicon/NavIcon.jsx';
import './Header.css';
import Logo from '../logo/Logo.jsx';

const onMouseEnter = (event, color) => {
	const el = event.target;
	el.style.backgroundColor = color;
}

const onMouseOut = (event) => {
	const el = event.target;
	el.style.backgroundColor = 'transparent';
}

function Header() {
	const { theme } = useContext(themeContext);
	const link = settings.isSplash ? '/splash' : 'home';
	const activeStyle = {
		fontWeight: 'bold',
		color: theme.text,
	};

	return (
		<Fade top duration={1000} distance='20px'>
			<div>
				<header className="header">
					<NavLink to={link} tag={link}>
						<Logo />
					</NavLink>
					<NavIcon />
					<ul className="menu" style={{ backgroundColor: theme.color }}>
						<li>
							<NavLink
								to='/home'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={
									({ isActive }) => isActive ? activeStyle : { color: theme.text }
								}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/education'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={{pointerEvents: 'none', color: theme.secondaryText}}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/experience'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={{pointerEvents: 'none', color: theme.secondaryText}}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Experience
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/projects'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={
									({ isActive }) => isActive ? activeStyle : { color: theme.text }
								}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/opensource'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={{pointerEvents: 'none', color: theme.secondaryText}}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Open Source
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								tag={link}
								activestyle={{ fontWeight: 'bold' }}
								style={
									({ isActive }) => isActive ? activeStyle : { color: theme.text }
								}
								onMouseEnter={event => onMouseEnter(event, theme.highlight)}
								onMouseOut={event => onMouseOut(event)}
							>
								Contact Me
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
}

export default Header;