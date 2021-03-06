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
	grid-auto-rows: 1fr;
	padding: 1rem;
	/* @media screen and (min-width: ${size.desktop}) {
		grid-template-columns: repeat(6, 1fr);
	} */

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
	margin: 0;
`;
const Title = styled.h1`color: white;`;

const ProjectsPageSection = (props) => {
	let projectThumbnails = props.projects;
	return (
		<ProjectsWrapper>
			{projectThumbnails.map((thumbnail, index) => (
				<React.Fragment key={index}>
					<ProjectLink to={`${PageMap.PROJECT.slug}/${thumbnail.project.slug}`}>
						<ProjectTile image={thumbnail.image} project={thumbnail.project} />
					</ProjectLink>
				</React.Fragment>
			))}
		</ProjectsWrapper>
	);
};

export default ProjectsPageSection;
