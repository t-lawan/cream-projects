import React, { useEffect } from 'react';
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
					staff {
						raw
					}
					selectedClientsAndCollaborators {
						raw
					}
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
							gatsbyImageData(quality: 100)
						}
						contentSections {
							contentful_id
							media {
								image {
									gatsbyImageData(quality: 100, height: 1000)
								}
								type
								title
								videoUrl
							}
						}
						slug
					}
					projectThumbnails {
						contentful_id
						image {
							gatsbyImageData(quality: 100)
						}
						title
						project {
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
								gatsbyImageData(quality: 100)
							}
							contentSections {
								contentful_id
								media {
									image {
										gatsbyImageData(quality: 100, height: 1000)
									}
									type
									title
									videoUrl
								}
							}
							slug
						}
					}
				}
			}
		`
	);

	let page = Convert.toPageModel(contentfulPage);
	return (
		<Layout displayBelow={true} seoTitle={page.seoTitle}>
			<ProjectsPageSection projects={page.projectThumbnailList} />
		</Layout>
	);
};

export default ProjectsPage;
