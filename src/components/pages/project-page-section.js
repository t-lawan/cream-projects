import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextOptions } from '../../utility/richtext';
import { StandardPadding, size } from '../../styles/index.styles';
import ProjectMedia from '../project-media/project-media';
import { Link } from 'gatsby';
import { PageMap } from '../../utility/config';
import VideoPlayer from '../video-player/video-player';
const ProjectWrapper = styled.div``;

const ProjectDetailText = styled.p`
	padding-right: 1rem;
	white-space: nowrap;
	font-size: 1.25rem;
	font-family: "VT323";
	margin-bottom: 0.25rem;


	@media screen and (max-width: ${size.tablet}) {
		white-space: normal;
		font-size: 1rem;


	}
`;
const Description = styled.div`
padding-top: 1rem;
	> p {
		/* font-size: 2.25rem; */
	}
`;


const ProjectsLink = styled(Link)`

`;
const ContentSectionsWrapper = styled.div``;

const MediaWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props) => props.numberOfColumns}, 1fr);
	grid-auto-rows: min-content;
	/* flex-direction: row; */
`;

const ProjectDetailsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 1rem;
	width: 40%;
`;

const ProjectThumbnail = styled(GatsbyImage)`
`;

const Title = styled.h1`color: white;`;

const ProjectPageSection = (props) => {
	let project = props.project;
	let renderTextArr = [
		{
			key: 'Project',
			value: project.title
		},
		{
			key: 'Year',
			value: project.year
		},
		{
			key: 'Client',
			value: project.clientName
		},
		{
			key: 'Detail',
			value: project.detail
		}
	];

	return (
		<ProjectWrapper>
			<VideoPlayer url={project.mainVideo.file.url} />
			<StandardPadding>
			<ProjectDetailsGrid>

				{renderTextArr.map((text, index) => (
					<React.Fragment key={index}>
						{text.value ? (
							<>
								<ProjectDetailText>{text.key}</ProjectDetailText>
								<ProjectDetailText>{text.value}</ProjectDetailText>
							</>
						) : null}
						
					</React.Fragment>
				))}
				</ProjectDetailsGrid>
				
				<Description>
				{documentToReactComponents(JSON.parse(project.description), richTextOptions)}
				</Description>
			</StandardPadding>
			{project.contentSections ? (
				<ContentSectionsWrapper>
					{project.contentSections.map((section, index) => (
						<MediaWrapper key={index} numberOfColumns={section.media.length}>
							{section.media.map((media, i) => <ProjectMedia key={i} media={media} />)}
						</MediaWrapper>
					))}
				</ContentSectionsWrapper>
			) : null}
			<StandardPadding>
				<ProjectsLink to={PageMap.PROJECTS.slug}> {`⟵ Return to projects`}</ProjectsLink>
			</StandardPadding>
			

		</ProjectWrapper>
	);
};

ProjectPageSection.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectPageSection;
