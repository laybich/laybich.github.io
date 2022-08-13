import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import PublicationCard from '../../components/publicationsCard/PublicationCard';
import Button from '../../components/UI/button/Button';
import { Fade } from 'react-reveal';
import { greeting, projectsHeader, publicationsHeader } from '../../portfolio.js';
import ProjectsData from '../../shared/opensource/projects.json';
import PublicationData from '../../shared/opensource/publications.json';
import { useContext } from 'react';
import { themeContext } from '../../context';
import './Projects.css';
import ProjectsImg from './ProjectsImg';

function Projects() {
	const { theme } = useContext(themeContext);

	return (
		<div className='projects-main'>
			<Header />
			<div className='basic-projects'>
				<Fade bottom duration={2000} distance='40px'>
					<div className='projects-heading-div'>
						<div className='projects-heading-img-div'>
							<ProjectsImg />
						</div>
						<div className='projects-heading-text-div'>
							<h1
								className='projects-heading-text'
								style={{ color: theme.text }}
							>
								{projectsHeader.title}
							</h1>
							<p
								className='projects-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{projectsHeader.description}
							</p>
						</div>
					</div>
				</Fade>
			</div>
			<div className='repo-cards-div-main'>
				{ProjectsData.data.map(repo => <GithubRepoCard repo={repo} />)}
			</div>
			<Button
				className='project-button'
				href={greeting.githubProfile}
				newTab={true}
			>
				More Projects
			</Button>

			{/* Publications  */}

			<div className='basic-projects'>
				<Fade bottom duration={2000} distance='40px'>
					<div className='publications-heading-div'>
						<div className='publications-heading-text-div'>
							<h1
								className='publications-heading-text'
								style={{ color: theme.text }}
							>
								{publicationsHeader.title}
							</h1>
							<p
								className='projects-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{publicationsHeader.description}
							</p>
						</div>
					</div>
				</Fade>
			</div>

			<div className='repo-cards-div-main'>
				{PublicationData.data.map(repo => <PublicationCard repo={repo} />)}
			</div>

			<Footer />
		</div>
	);
}

export default Projects;