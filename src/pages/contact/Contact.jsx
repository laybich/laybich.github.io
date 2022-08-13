import React, {useContext} from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/UI/button/Button';
import BlogsImg from './BlogsImg';
import AddressImg from './AddressImg';
import { Fade } from 'react-reveal';
import './Contact.css';
import { greeting, contactPageData } from '../../portfolio.js';
import { themeContext } from '../../context';

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

function Contact() {
	const theme = useContext(themeContext);
	return (
		<div className='contact-main'>
			<Header />
			<div className='basic-contact'>
				<Fade bottom duration={1000} distance='40px'>
					<div className='contact-heading-div'>
						<div className='contact-heading-img-div'>
							<img
								src={require(`../../assests/images/${ContactData.profile_image_path}`)}
								alt=''
							/>
						</div>
						<div className='contact-heading-text-div'>
							<h1
								className='contact-heading-text'
								style={{ color: theme.text }}
							>
								{ContactData.title}
							</h1>
							<p
								className='contact-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{ContactData.description}
							</p>
							<SocialMedia />
							<div className='resume-btn-div'>
								<Button
									newTab={true}
									href={greeting.resumeLink}
								>
									See My Resume
								</Button>
							</div>
						</div>
					</div>
				</Fade>
				<Fade bottom duration={1000} distance='40px'>
					<div className='blog-heading-div'>
						<div className='blog-heading-text-div'>
							<h1 className='blog-heading-text' style={{ color: theme.text }}>
								{blogSection.title}
							</h1>
							<p
								className='blog-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{blogSection.subtitle}
							</p>
							<div className='blogsite-btn-div'>
								<Button
									newTab={true}
									href={blogSection.link}
								>
									Visit My Blogsite
								</Button>
							</div>
						</div>
						<div className='blog-heading-img-div'>
							<BlogsImg />
						</div>
					</div>
				</Fade>
				<Fade bottom duration={1000} distance='40px'>
					<div className='address-heading-div'>
         			<div className='contact-heading-img-div'>
               		<AddressImg />
            		</div>
            		<div className='address-heading-text-div'>
							<h1
								className='address-heading-text'
								style={{ color: theme.text }}
							>
								{addressSection.title}
							</h1>
							<p
								className='contact-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{addressSection['subtitle']}
							</p>
							<h1
								className='address-heading-text'
								style={{ color: theme.text }}
							>
								{phoneSection['title']}
							</h1>
							<p
								className='contact-header-detail-text subTitle'
								style={{ color: theme.secondaryText }}
							>
								{phoneSection['subtitle']}
							</p>
							<div className='address-btn-div'>
								<Button
									newTab={true}
									href={addressSection.location_map_link}
								>
									Visit on Google Maps
								</Button>
							</div>
						</div>
            	</div>
				</Fade>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;