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
					staff
					selectedClientsAndCollaborators
					seoTitle
					title
					contactText {
						raw
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
