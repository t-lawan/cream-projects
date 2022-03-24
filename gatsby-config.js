require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Cream',
    author: 'Cream Projects'
  },
  plugins: [
    'gatsby-plugin-scroll-reveal',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    // 'gatsby-plugin-sharp',
    
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // formats: [`auto`, `webp`],
          // placeholder: `dominantColor`, //dominantColor
          // quality: 100,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `black`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        }
      }
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
          workboxConfig: {
              globPatterns: ['**/*.{js,jpg,png,html,css}'],
          },
      }
  },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com'
      },
    },
  ]
}
