import React from 'react';
import './SoftwareSkill.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Icon } from '@iconify/react';

function SoftwareSkill(props) {
	return (
		<div>
			<div className='software-skills-main-div'>
				<div className='dev-icons'>
					{props.logos.map(logo => {
						return (
							<OverlayTrigger
								key={logo.skillName}
								placement={'top'}
								overlay={
									<Tooltip id={'tooltip-top'}>
										<strong>{logo.skillName}</strong>
									</Tooltip>
								}
							>
								<li className='software-skill-inline' name={logo.skillName}>
									<Icon
										icon={logo.fontAwesomeClassname}
										style={logo.style}
									/>
								</li>
							</OverlayTrigger>
						);
					})

					}
				</div>
			</div>
		</div>
	);
}

export default SoftwareSkill;