import React, { useContext } from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia'
import Button from '../../components/UI/button/Button';
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';
import FeelingProud from "./FeelingProud";
import { themeContext } from '../../context';

export default function Greeting() {
	const { theme } = useContext(themeContext);

	return (
		<Fade bottom duration={2000} distance='40px'>
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<h1 className="greeting-text" style={{ color: theme.text }}>
							{greeting.title}
						</h1>
						<h2 className="greeting-nickname" style={{ color: theme.text }}>
							( {greeting.nickname} )
						</h2>
						<p
							className="greeting-text-p subTitle"
							style={{ color: theme.secondaryText }}
						>
							{greeting.subTitle}
						</p>
						<SocialMedia />
						<div className="portfolio-repo-btn-div">
							<Button
								newTab={true}
								href={greeting.portfolio_repository}
								className='portfolio-repo-btn'
							>
								⭐ Star Me On Github
							</Button>
						</div>
					</div>
					<div className="greeting-image-div">
						<FeelingProud />
					</div>
				</div>
			</div>
		</Fade>
	);
}