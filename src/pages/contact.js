import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import { useStaticQuery, graphql } from 'gatsby';
import ContactPageSection from '../components/pages/contact-page-section';
import { Convert } from '../utility/convert';
const Contact = () => {
	const { contentfulPage } = useStaticQuery(
		graphql`
			query {
				contentfulPage(title: { eq: "CONTACT" }) {
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

	return (
		<Layout displayBelow={true}>
			<ContactPageSection page={page} />
		</Layout>
	);
};

export default Contact;
