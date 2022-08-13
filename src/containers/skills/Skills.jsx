import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import SkillSection from './SkillSection';
import { themeContext } from '../../context';
import './Skills.css';

export default function Skills() {
	const { theme } = useContext(themeContext);

	return (
		<div className='main' id='skills'>
			<div className='skills-header-div'>
				<Fade bottom duration={2000} distance='20px'>
					<h1 className='skills-header' style={{ color: theme.text }}>
						What I Do?
					</h1>
				</Fade>
			</div>
			<SkillSection />
		</div>
	);
}