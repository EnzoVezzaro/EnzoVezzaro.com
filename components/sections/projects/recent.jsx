// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'

export default function GitProjects({ repos, user }) {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user.length > 0 ? user[0].avatar_url : 'https://avatars.githubusercontent.com/u/13741335?v=4'}`} alt="Github Profile Photo" height={60} width={60}/>
					<span class={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <Icon icon={[ 'far', 'arrow-up-right-from-square' ]} /></a>
					</span>
				</section>
				<div className={css.projects}>
					{
					repos.map( ({ name, description, topics, commits_count, html_url, language, watchers, homepage, pushed_at }, index) => {
						const date = new Date(pushed_at).toDateString()
						return (
							<>
							<article key={index} className={css.project}>
								<span className={css.header}>
									<a href={html_url} rel="noreferrer" target="_blank">{name} <Icon icon={[ 'fas', 'arrow-up-right-from-square' ]} /></a>
									<p className={css.homepage}>{homepage}</p>
								</span>
								<span className={css.descriptionContainer}>
									<p className={css.description}>{description}</p>
								</span>
								<span className={css.details}>
									<p><i className={`devicon-${language?.toLowerCase()}-plain colored`} /> {language}</p>
									<p><Icon icon={[ 'fas', 'star' ]} /> {watchers}</p>
									<p><Icon icon={[ 'fas', 'code-branch' ]} /> {commits_count}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
								<span className={css.topicsContainer}>
									{
									topics.map( (e, index) => {
										return ( <span key={index} className={css.topics}><i class="devicon-github-plain"></i> {e}</span> )
									})
									}
								</span>
							</article>
							</>
						)
					})
					}
				</div>
				{/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
			</Container>
		</Section>
	)
}