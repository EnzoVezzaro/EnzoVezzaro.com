// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I specialize in curating digital experiences that seamlessly blend diverse tools and languages to achieve an intuitive and engaging interface."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Design + Code: Where Creativity Meets Functionality"
							icon={[ 'far', 'chart-bar' ]}
							copy="Grounded in both design and development, I provide a distinctive approach to every project, embracing a continuous learning mindset to keep pace with the dynamic trends in the industry."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Digital Tools I Thrive On" 
							copy="I've developed a profound appreciation for digital interfaces. In my 10-year journey as a digital enthusiast, I've mastered the art of transforming ideas into captivating digital experiences. Here's a glimpse into the fantastic array of tools I've joyfully embraced along this exciting journey."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="gem"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="The Future of the Internet" 
							copy="Crafting DApps, playing with smart contracts, and weaving through blockchains is my passion! Why? Because web3 is the future of the internet, reshaping how we experience the web. Keen on web3 projects? Let's embrace the future of the internet!"
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="window-restore"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'far' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const tech	= [
	{ key: 'web3', 			name: 'Ethers.js', 				type: 'far' },
	{ key: 'web3', 	name: 'Hardhat', 			type: 'far' },
	{ key: 'web3', 	name: 'Moralis', 		type: 'far' },
	{ key: 'web3', 		name: 'MagicLink', 				type: 'far' },
	{ key: 'web3', 		name: 'Infura', 			type: 'far' },
	{ key: 'web3', 		name: 'Ganache', 			type: 'far' },
	{ key: 'web3', 		name: 'Alchemy', 			type: 'far' },
	{ key: 'web3', 		name: 'IPFS', 			type: 'far' },
	{ key: 'web3', 		name: 'Arweave', 			type: 'far' },
]