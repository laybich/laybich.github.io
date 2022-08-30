// Website related settings
const settings = {
	isSplash: true, // Change this to false if you don't want Splash screen.
}

//SEO Related settings
const seo = {
	title: 'Matthew\'s Portfolio',
}

//Home Page
const greeting = {
	title: 'Matthew Laybich',
	logo_name: 'MatthewLaybich',
	nickname: 'random9',
	subTitle: 'A persistent individual who wants to know everything, and always learn something new. That\'s the only way I\'ll be successful',
	portfolio_repository: 'https://github.com/laybich/',
	githubProfile: 'https://github.com/laybich',
}

const socialMediaLinks = [
	{
		name: 'Github',
		link: 'https://github.com/laybich',
		fontAwesomeIcon: 'fa-github', // Reference https://fontawesome.com/icons/github?style=brands
		backgroundColor: '#181717', // Reference https://simpleicons.org/?q=github
	},
	{
		name: 'LinkedIn',
		link: 'https://ua.linkedin.com/in/laybich-inc-647225238/',
		fontAwesomeIcon: 'fa-linkedin-in', // Reference https://fontawesome.com/icons/linkedin-in?style=brands
		backgroundColor: '#0077B5', // Reference https://simpleicons.org/?q=linkedin
	},
	{
		name: 'YouTube',
		link: 'https://www.youtube.com/channel/UCSjp34UwdN0vY2LGRvL5oNw',
		fontAwesomeIcon: 'fa-youtube', // Reference https://fontawesome.com/icons/youtube?style=brands
		backgroundColor: '#FF0000', // Reference https://simpleicons.org/?q=youtube
	},
	{
		name: 'Gmail',
		link: 'mailto:mlaybich@gmail.com',
		fontAwesomeIcon: 'fa-google', // Reference https://fontawesome.com/icons/google?style=brands
		backgroundColor: '#D14836', // Reference https://simpleicons.org/?q=gmail
	},
	{
		name: 'Twitter',
		link: 'https://twitter.com/_laybich',
		fontAwesomeIcon: 'fa-twitter', // Reference https://fontawesome.com/icons/twitter?style=brands
		backgroundColor: '#1DA1F2', // Reference https://simpleicons.org/?q=twitter
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/profile.php?id=100084232760833',
		fontAwesomeIcon: 'fa-facebook-f', // Reference https://fontawesome.com/icons/facebook-f?style=brands
		backgroundColor: '#1877F2', // Reference https://simpleicons.org/?q=facebook
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/mlaybich/',
		fontAwesomeIcon: 'fa-instagram', // Reference https://fontawesome.com/icons/instagram?style=brands
		backgroundColor: '#E4405F', // Reference https://simpleicons.org/?q=instagram
	},
	{
		name: 'Telegram',
		link: 'https://t.me/laybich/',
		fontAwesomeIcon: 'fa-telegram', // Reference https://fontawesome.com/icons/instagram?style=brands
		backgroundColor: '#0088CC', // Reference https://simpleicons.org/?q=instagram
	},
]

const skills = {
	data: [
		{
			title: 'Backend Development',
			fileName: 'DataScienceImg',
			skills: [
				'⚡ Development of web application software and administration, system internal content, server technology',
				'⚡ Comprehensive solutions for secure applications that support user interface',
				'⚡ Create platforms and core functionality, that is, business logic',
			],
			softwareSkills: [
				{
					skillName: 'PHP',
					fontAwesomeClassname: 'simple-icons:php',
					style: {
						color: '#474A8A',
					},
				},
				{
					skillName: 'NodeJS',
					fontAwesomeClassname: 'simple-icons:nodejs',
					style: {
						color: '#215732',
					},
				},
				{
					skillName: 'ExpressJS',
					fontAwesomeClassname: 'simple-icons:express',
					style: {
						color: '#333',
					},
				},
				{
					skillName: 'C#',
					fontAwesomeClassname: 'simple-icons:csharp',
					style: {
						color: '#769',
					},
				},
				{
					skillName: 'Python',
					fontAwesomeClassname: 'ion-logo-python',
					style: {
						color: '#3776AB',
					},
				},
			]
		},
		{
			title: 'Frontend Development',
			fileName: 'FullStackImg',
			skills: [
				'⚡ Building responsive website front end using React-Redux',
				'⚡ Developing backend a little bit: PHP, Python/Django, Node.js, Next.js and others',
				'⚡ Creating simple landing pages in Html, Sass, JS',
			],
			softwareSkills: [
				{
					skillName: 'HTML5',
					fontAwesomeClassname: 'simple-icons:html5',
					style: {
						color: '#E34F26',
					},
				},
				{
					skillName: 'CSS3',
					fontAwesomeClassname: 'fa-css3',
					style: {
						color: '#1572B6',
					},
				},
				{
					skillName: 'Sass',
					fontAwesomeClassname: 'simple-icons:sass',
					style: {
						color: '#CC6699',
					},
				},
				{
					skillName: 'Less',
					fontAwesomeClassname: 'simple-icons:less',
					style: {
					  color: '#02569B',
					},
				},
				{
					skillName: 'JavaScript',
					fontAwesomeClassname: 'simple-icons:javascript',
					style: {
						backgroundColor: '#000000',
						color: '#F7DF1E',
					},
				},
				{
					skillName: 'ReactJS',
					fontAwesomeClassname: 'simple-icons:react',
					style: {
						color: '#61DAFB',
					},
				},
				{
					skillName: 'Redux',
					fontAwesomeClassname: 'simple-icons:redux',
					style: {
						color: '#764abc',
					},
				},
				{
					skillName: 'TypeScript',
					fontAwesomeClassname: 'simple-icons:typescript',
					style: {
						color: '#007acc',
					},
				},
				{
					skillName: 'NPM',
					fontAwesomeClassname: 'simple-icons:npm',
					style: {
						color: '#CB3837',
					},
				},
				{
					skillName: 'Yarn',
					fontAwesomeClassname: 'simple-icons:yarn',
					style: {
						color: '#2C8EBB',
					},
				},
				{
					skillName: 'JQuery',
					fontAwesomeClassname: 'simple-icons:jquery',
					style: {
						color: '#0769ad',
					},
				},
				{
					skillName: 'Gulp',
					fontAwesomeClassname: 'simple-icons:gulp',
					style: {
					  color: '#d34a47 ',
					},
				},
				{
					skillName: 'Webpack',
					fontAwesomeClassname: 'simple-icons:webpack',
					style: {
					  color: '#1c78c0 ',
					},
				},
				{
					skillName: 'Bootstrap',
					fontAwesomeClassname: 'simple-icons:bootstrap',
					style: {
					  color: '#663399 ',
					},
				},
			]
		},
		{
			title: 'Cloud Infra-Architecture',
			fileName: 'CloudInfraImg',
			skills: [
				'⚡ Experience working on multiple cloud platforms',
				'⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases',
				'⚡ Deploying deep learning models on cloud to use on mobile devices',
				'⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS',
			],
			softwareSkills: [
				{
					skillName: 'GCP',
					fontAwesomeClassname: 'simple-icons:googlecloud',
					style: {
						color: '#4285F4',
					},
				},
				{
					skillName: 'AWS',
					fontAwesomeClassname: 'simple-icons:amazonaws',
					style: {
						color: '#FF9900',
					},
				},
				{
					skillName: 'Azure',
					fontAwesomeClassname: 'simple-icons:microsoftazure',
					style: {
						color: '#0089D6',
					},
				},
				{
					skillName: 'Firebase',
					fontAwesomeClassname: 'simple-icons:firebase',
					style: {
						color: '#FFCA28',
					},
				},
				{
					skillName: 'PostgreSQL',
					fontAwesomeClassname: 'simple-icons:postgresql',
					style: {
						color: '#336791',
					},
				},
				{
					skillName: 'MongoDB',
					fontAwesomeClassname: 'simple-icons:mongodb',
					style: {
						color: '#47A248',
					},
				},
				{
					skillName: 'Docker',
					fontAwesomeClassname: 'simple-icons:docker',
					style: {
						color: '#1488C6',
					},
				},
				{
					skillName: 'Kubernetes',
					fontAwesomeClassname: 'simple-icons:kubernetes',
					style: {
						color: '#326CE5',
					},
				},
			]
		},
		{
			title: 'UI/UX Design',
			fileName: 'DesignImg',
			skills: [
				'⚡ Designing highly attractive user interface for mobile and web applications',
				'⚡ Customizing logo designs and building logos from scratch',
				'⚡ Creating the flow of application functionalities to optimize user experience',
			],
			softwareSkills: [
				{
					skillName: 'Adobe Photoshop',
					fontAwesomeClassname: 'file-icons:adobe-photoshop',
					style: {
						color: '#0e448e',
					},
				},
				{
					skillName: 'Figma',
					fontAwesomeClassname: 'simple-icons:figma',
					style: {
						color: '#F24E1E',
					},
				},
				{
					skillName: 'Adobe Illustrator',
					fontAwesomeClassname: 'simple-icons:adobeillustrator',
					style: {
						color: '#FF7C00',
					},
				},
				{
					skillName: 'Inkscape',
					fontAwesomeClassname: 'simple-icons:inkscape',
					style: {
						color: '#000000',
					},
				},
			],
		},
	]
}

// Projects Page
const projectsHeader = {
	title: 'Projects',
	description: 'My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.',
	avatar_image_path: 'projects_image.svg',
 };

const publicationsHeader = {
	title: 'Publications',
	description: 'I have worked on and published a few research papers and publications of my own.',
	avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
	contactSection: {
	  title: 'Contact Me',
	  profile_image_path: 'face.png',
	  description:
		 'I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.',
	},
	blogSection: {
	  title: 'Blogs',
	  subtitle:
		 'For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.',
	  link: 'https://google.com',
	  avatar_image_path: 'blogs_image.svg',
	},
	addressSection: {
	  title: 'Address',
	  subtitle:
		 '3GWG+54R, Antananarivo, Madagaskar',
	  avatar_image_path: 'address_image.svg',
	  location_map_link: 'https://www.google.com/maps/place/VAR\'SY/@-18.9039908,47.5234015,18z/data=!4m13!1m7!3m6!1s0x21f07de34f1f4eb3:0xdf110608bcc082f9!2z0JDQvdGC0LDQvdCw0L3QsNGA0LjQstGDLCDQnNCw0LTQsNCz0LDRgdC60LDRgA!3b1!8m2!3d-18.8791902!4d47.5079055!3m4!1s0x21f07e004ba17571:0x2532871580a488bc!8m2!3d-18.9045048!4d47.5252555',
	},
	phoneSection: {
	  title: 'Phone Number',
	  subtitle: '+380 684301782',
	},
};

export {
	settings,
	seo,
	greeting,
	socialMediaLinks,
	skills,
	projectsHeader,
	publicationsHeader,
	contactPageData,
};