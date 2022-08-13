import React, { useContext } from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { themeContext } from '../../context';
import { skills } from '../../portfolio';
import { Fade } from 'react-reveal';
import DataScienceImg from './DataScienceImg';
import FullStackImg from './FullStackImg';
import CloudInfraImg from './CloudInfraImg';
import DesignImg from './DesignImg';

function GetSkillSvg(props) {
	if (props.fileName === 'DataScienceImg')
		return <DataScienceImg />;
	else if (props.fileName === 'FullStackImg')
		return <FullStackImg />;
	else if (props.fileName === 'CloudInfraImg')
		return <CloudInfraImg />;
	return <DesignImg />;
}

function SkillSection() {
	const { theme } = useContext(themeContext);

	return (
		<div>
			{skills.data.map(skill => {
				return (
					<div className='skills-main-div'>
						<Fade left duration={2000}>
							<div className='skills-image-div'>
								<GetSkillSvg fileName={skill.fileName} />
							</div>
						</Fade>

						<div className='skills-text-div'>
							<Fade right duration={1000}>
								<h1 className='skills-heading' style={{ color: theme.text }}>
									{skill.title}
								</h1>
							</Fade>
							<Fade right duration={1500}>
								<SoftwareSkill logos={skill.softwareSkills} />
							</Fade>
							<Fade right duration={2000}>
								<div>
									{skill.skills.map(skillSentence => {
										return (
											<p
												className='subTitle skills-text'
												style={{ color: theme.secondaryText }}
											>
												{skillSentence}
											</p>
										);
									})}
								</div>
							</Fade>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SkillSection;