import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {
  console.log('mediumArticles: ', mediumArticles);

  // Ensure mediumArticles is structured properly before accessing properties
  const feed = mediumArticles?.feed;
  const articles = mediumArticles || []; 

  return (
    <Section classProp="borderBottom">
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A personal quest to become a better developer."
        />
        <section className={css.projects}>
          {
            articles.length > 0 ? (
              articles.map(({ title, pubDate, link, author, thumbnail, categories }, index) => {
                const date = new Date(pubDate).toDateString();
                return (
                  <article key={index} className={css.project}>
                    <span className={css.header}>
                      <a href={link} rel="noreferrer" target="_blank">
                        {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                      </a>
                    </span>
                    <span className={css.descriptionContainer}></span>
                    <span className={css.details}>
                      <p>By {author}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {
                        categories.map((e, index) => {
                          return (
                            <span key={index} className={css.topics}>
                              <Icon icon={['fab', 'medium']} /> {e}
                            </span>
                          );
                        })
                      }
                    </span>
                  </article>
                );
              })
            ) : (
              <p>No articles available</p> // Optionally display a message if no articles are available
            )
          }
        </section>
      </Container>
    </Section>
  );
}