let getTechIcons = function getTechIcons(tech) {
    switch(tech) {
        case 'SHOPIFY':
          return `shopify.svg`
        case 'WORDPRESS':
          return `wordpress.svg`
        case 'HTML5':
          return `html5.svg`
        case 'CSS':
          return `css3.svg`
        case 'JS':
          return `js.svg`
        case 'JQUERY':
          return `jquery.svg`
        case 'GITHUB':
          return `github.svg`
        case 'ANALYTICS':
          return `google-analytics.svg`
        case 'MAILCHIMP':
          return `mailchimp.svg`
        case 'HUGO':
          return `hugo.svg`
        case 'NETLIFY':
          return `netlify.svg`
        case 'REACTJS':
          return `reactjs.svg`
        case 'REACTNATIVE':
          return `reactnative.svg`
        case 'AWS':
          return `aws.svg`
        case 'GOOGLEMAPS':
          return `googlemaps.svg`
        case 'FIREBASE':
          return `firebase.svg`
        case 'SERVERLESS':
          return `serverless.png`
        case 'STRIPE':
          return `stripe.svg`
        case 'KEPLERGL':
          return `kepler.svg`
        case 'ELASTIC_SEARCH':
          return `elasticsearch.png`
      }
  }
  
  export default getTechIcons; 