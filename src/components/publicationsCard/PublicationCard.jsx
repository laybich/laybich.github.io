import React, { useContext } from 'react';
import './PublicationCard.css';
import { Fade } from 'react-reveal';
import { themeContext } from '../../context';

function PublicationCard({ repo }) {
	const openRepoinNewTab = url => {
		const win = window.open(url, '_blank');
		win.focus();
	}

	const { theme } = useContext(themeContext);

	return (
		<div
			className='publication-card-div'
			style={{ backgroundColor: theme.highlight }}
		>
			<Fade bottom duration={2000} distance='40px'>
				<div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
					<div className='publication-name-div'>
						<p className='publication-name' style={{ color: theme.text }}>
							{repo.name}
						</p>
					</div>
					<p className='publication-description' style={{ color: theme.text }}>
						{repo.description}
					</p>
					<div className='publication-details'>
						<p
							className='publication-creation-date subTitle'
							style={{ color: theme.secondaryText }}
						>
							Published on {repo.createdAt.split('T')[0]}
						</p>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default PublicationCard;