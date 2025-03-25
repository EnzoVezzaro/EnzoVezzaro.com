import { useState, useEffect } from "react"

import Recent 		from '../../components/sections/articles/recent'

import Color 	from '../../components/utils/page.colors.util'

import colors 		from '../../content/articles/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function Articles({ mediumArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=59'
  );

  const mediumAccounts = settings.username.medium;

  // Fetch the data for all accounts
  const mediumRSS = await Promise.all(
    mediumAccounts.map(account => 
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${account}`)
        .then(response => response.json()) // parse the JSON response
        .catch(error => {
          console.error(`Failed to fetch Medium RSS for ${account}:`, error);
          return null; // In case of error, return null for that account
        })
    )
  );

  // Filter out any null values if the fetch failed for any account
  const validMediumRSS = mediumRSS.filter(rss => rss !== null);

  // Flatten the articles array
  const mediumArticles = validMediumRSS.map(rss => rss.items).flat();

  // Sort articles by pubDate in descending order (newest first)
  const sortedArticles = mediumArticles.sort((a, b) => {
    const dateA = new Date(a.pubDate);
    const dateB = new Date(b.pubDate);
    return dateB - dateA; // Compare dates in descending order
  });

  // Return sorted articles as props
  return { 
    props: { mediumArticles: sortedArticles } 
  };
}

