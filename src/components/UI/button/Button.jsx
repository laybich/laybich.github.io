import React, { useContext } from 'react';
import { themeContext } from '../../../context';
import './Button.css';

const onMouseEnter = (event, color, bgColor) => {
	const el = event.target;
	el.style.color = color;
	el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
	const el = event.target;
	el.style.color = color;
	el.style.backgroundColor = bgColor;
};

function Button({ children, className, href, newTab }) {
	const { theme } = useContext(themeContext);

	return (
		<div className={className}>
			<a
				className='main-button'
				href={href}
				target={newTab && '_blank'}
				style={{
					color: theme.body,
					backgroundColor: theme.text,
					border: `solid 1px ${theme.text}`
				}}
				onMouseEnter={event => onMouseEnter(event, theme.text, theme.body)}
				onMouseOut={event => onMouseOut(event, theme.body, theme.text)}
			>
				{children}
			</a>
		</div>
	);
}

export default Button;