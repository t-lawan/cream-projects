import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import AboutPageSection from '../components/pages/about-page-section';
import { useStaticQuery, graphql } from 'gatsby';
import { Convert } from '../utility/convert';

const About = () => {
	const { contentfulPage } = useStaticQuery(
		graphql`
			query {
				contentfulPage(title: { eq: "ABOUT" }) {
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

  let page = Convert.toPageModel(contentfulPage)

	return (
		<Layout displayBelow={true}>
			<AboutPageSection page={page} />
		</Layout>
	);
};

export default About;
