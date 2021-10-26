import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Convert } from '../../utility/convert';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ProjectTile from '../project-tile/project-tile';
import { Link } from 'gatsby';
import { size } from '../../styles/index.styles';
import { PageMap } from '../../utility/config';

const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (min-width: ${size.laptopL}) {
		grid-template-columns: repeat(6, 1fr);
	}

	@media screen and (max-width: ${size.tablet}) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: ${size.mobileL}) {
		grid-template-columns: repeat(2, 1fr);
	}
	grid-column-gap: 0.5rem;
	grid-row-gap: 0.5rem;
`;

const ProjectThumbnail = styled(GatsbyImage)`
`;

const ProjectLink = styled(Link)`

`;
const Title = styled.h1`color: white;`;

const ProjectsPageSection = () => {
	const { allContentfulProject } = useStaticQuery(
		graphql`
			query {
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
			}
		`
	);

	let projectsArray = Convert.toModelArray(allContentfulProject, Convert.toProjectModel);
	console.log('PRR', projectsArray);
	return (
		<ProjectsWrapper>
			{projectsArray.map((project, index) => (
				<React.Fragment key={index}>
					<ProjectLink to={`${PageMap.PROJECT.slug}/${project.slug}`}>
						<ProjectTile project={project} />
					</ProjectLink>
					<ProjectTile project={project} />
					<ProjectTile project={project} />
				</React.Fragment>
			))}
		</ProjectsWrapper>
	);
};

export default ProjectsPageSection;
