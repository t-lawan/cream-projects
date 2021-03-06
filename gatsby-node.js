/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const project = path.resolve(`src/templates/project.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      {
		allContentfulProject {
			edges {
			  node {
				clientName
				contentful_id
				description {
				  raw
				}
				detail {
				  detail
				}
				seoDescription {
				  seoDescription
				}
				seoTitle
				title
				year
				thumbnailImage {
				  gatsbyImageData(quality: 70, height: 1000)
				}
				contentSections {
				  contentful_id
				  media {
					image {
					  gatsbyImageData(quality: 70, height: 1000)
					}
					type
					title
					videoUrl
					vimeoId
				  }
				}
				slug
				landingPageMedia {
				  contentful_id
				  title
				  type
				  videoUrl
				  vimeoId
				  image {
					gatsbyImageData(quality: 70, height: 1000)
				  }
				}
			  }
			}
		  }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }


    result.data.allContentfulProject.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `project/${edge.node.slug}`,
        component: project,
        context: edge.node
      })
    })
  })
}
