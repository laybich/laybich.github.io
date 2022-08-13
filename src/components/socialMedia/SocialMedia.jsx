import React, { useContext } from 'react';
import { socialMediaLinks } from '../../portfolio';
import { themeContext } from '../../context';
import styled from 'styled-components';
import './SocialMedia.css';

const IconWrapper = styled.span`
	i {
		background-color: ${(props) => props.backgroundColor};
	}
	&:hover i {
		background-color: ${() => useContext(themeContext).theme.text};
		transition: 0.3s ease-in;
	}
`;

export default function socialMedia() {
	return (
		<div className="social-media-div">
			{socialMediaLinks.map(media => (
				<a
					key={media.link}
					href={media.link}
					className={`icon-button`}
					target='_blank'
					rel='noopener noreferrer'	
				>
					<IconWrapper {...media}>
						<i className={`fab ${media.fontAwesomeIcon}`}></i>
					</IconWrapper>
				</a>
			))}
		</div>
	);
}