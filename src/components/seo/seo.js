import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Convert } from '../../utility/convert';

const SEO = ({ title }) => {
	const { contentfulMeta } = useStaticQuery(
		graphql`
			query {
				contentfulMeta {
					contentful_id
					seoTitle
					seoDescription {
						seoDescription
					}
					seoImage {
						file {
							url
						}
					}
					landingPageUrl
				}
			}
		`
	);

	let meta = Convert.toMetaModel(contentfulMeta);

	return (
		<Helmet>
			<meta charset="UTF-8" />
			<title>Cream Projects</title>
			<meta data-react-helmet="true" property="description" content={meta.seoDescription} />
			<meta data-react-helmet="true" property="og:type" content="website" />
			<meta data-react-helmet="true" property="og:url" content="https://www.creamprojects.com/" />
			<meta data-react-helmet="true" property="og:title" content={meta.seoTitle} />
			<meta data-react-helmet="true" property="og:locale" content="en_GB" />
			<meta data-react-helmet="true" property="og:description" content={meta.seoDescription} />
			<meta data-react-helmet="true" property="og:image" content={meta.seoImage} />
			<meta data-react-helmet="true" property="twitter:card" content="summary_large_image" />
			<meta data-react-helmet="true" property="twitter:url" content="https://www.creamprojects.com/" />
			<meta data-react-helmet="true" property="twitter:title" content={meta.seoTitle} />
			<meta data-react-helmet="true" property="twitter:description" content={meta.seoDescription} />
			<meta data-react-helmet="true" property="twitter:image" content={meta.seoImage} />
		</Helmet>
	);
};

export default SEO;
