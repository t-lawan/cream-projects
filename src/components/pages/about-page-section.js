import React from 'react';
import styled from 'styled-components';
import { StandardPadding, size } from '../../styles/index.styles';
import { useStaticQuery, graphql } from 'gatsby';
import { richTextOptions } from '../../utility/richtext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutPageSectionWrapper = styled.div``;

const AboutPageGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 4rem;
	width: 100%;
	@media screen and (max-width: ${size.tablet}) {
		grid-template-columns: 1fr;
		width: 100%;

	}
`;


const ListSection = styled.div`
	margin-bottom: 2rem;
`
const Title = styled.h4`
	font-size: 1.25rem;
	font-family: 'VT323';
	margin-bottom: 1rem;
	@media screen and (max-width: ${size.tablet}) {
		font-size: 1rem;
	}
`
const TextWrapper = styled.div`
	p, a {
		margin: 0;
	}
`
const ListItem = styled.p`
	/* padding: 0; */
	margin: 0;
`

const Column = styled.div`
	/* padding: 1rem; */
`;
const AboutPageSection = (props) => {
	let page = props.page;

	return (
		<AboutPageSectionWrapper>
			<StandardPadding>
				<AboutPageGrid>
					{/* First Column */}
					<Column>
						{documentToReactComponents(JSON.parse(page.firstColumnText), richTextOptions)}
					</Column>

					{/* Second Column */}
					<Column>
						<ListSection>
							<Title>Team </Title>
							<TextWrapper>
								{documentToReactComponents(JSON.parse(page.staff), richTextOptions)}
							</TextWrapper>

						</ListSection>

						<ListSection>
							<Title>Extended Collaborators </Title>
							<TextWrapper>
								{documentToReactComponents(JSON.parse(page.selectedClientsAndCollaborators), richTextOptions)}
							</TextWrapper>


						</ListSection>

						<ListSection>
							<Title>Selected Clients </Title>
							<TextWrapper>
								{documentToReactComponents(JSON.parse(page.pressText), richTextOptions)}

							</TextWrapper>

						</ListSection>
					</Column>
				</AboutPageGrid>
			</StandardPadding>
		</AboutPageSectionWrapper>
	);
};

export default AboutPageSection;
