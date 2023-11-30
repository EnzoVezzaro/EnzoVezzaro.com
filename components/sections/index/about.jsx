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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="
					My passion for learning serves as the driving force behind my continuous evolution in the ever-changing landscape of technology. I am dedicated to not only honing my skills but also to utilizing them in ways that contribute positively to the world."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my proficiency in design and technology; my time management, and multitasking skills have evolved over a decade of professional experience. Beyond my professional life, I find joy in walking my dog, travel, and spending time with my wife."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Planning the architecture of web projects is where I find my passion and creativity converging. From envisioning designs to hands-on product development, I immerse myself in every facet of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Experience', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Products', 	type: 'fad' },
	{ key: 'window', 			name: 'Fullstack Development', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Design', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]