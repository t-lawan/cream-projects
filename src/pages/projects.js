
import React, { useEffect } from 'react'
import Layout from '../components/layout/layout';
import ProjectsPageSection from '../components/pages/projects-page-section';
import { useStaticQuery, graphql } from 'gatsby';
import { Convert } from '../utility/convert';

const ProjectsPage = () => {
	const { contentfulPage } = useStaticQuery(
		graphql`
			query {
				contentfulPage(title: { eq: "PROJECTS" }) {
					contentful_id
					firstColumnText {
						raw
					}
					staff
					selectedClientsAndCollaborators
					seoTitle
					title
					contactText {
						raw
					}
					pressText {
						raw
					}
					projectList {
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
							gatsbyImageData(placeholder: BLURRED, quality: 100)
						}
						contentSections {
							contentful_id
							media {
								image {
									gatsbyImageData(quality: 100, resizingBehavior: FILL)
								}
								type
								title
								video {
									file {
										url
									}
								}
							}
						}
						slug
						mainVideo {
							file {
								url
							}
						}
					}
				}
			}
		`
	);
    
  let page = Convert.toPageModel(contentfulPage);

  console.log('PAGE', page)

      return (
        <Layout displayBelow={true}>
          <ProjectsPageSection projects={page.projectList} />
        </Layout>
      )
    }
    
    export default ProjectsPage
    