import React from 'react';
import './ProjectLanguages.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Icon } from '@iconify/react';

function ProjectLanguages(props) {
	return (
		<div>
			<div className='software-skills-main-div'>
				<ul className='dev-icons-languages'>
					{props.logos.map(logo => {
						return (
							<OverlayTrigger
								key={logo.name}
								placement={'top'}
								overlay={
									<Tooltip id={'tooltip-top'}>
										<strong>{logo.name}</strong>
									</Tooltip>
								}
							>
								<li
									className='software-skill-inline-languages'
									name={logo.skillName}
								>
									<Icon icon={logo.iconifyClass} />
								</li>
							</OverlayTrigger>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ProjectLanguages;