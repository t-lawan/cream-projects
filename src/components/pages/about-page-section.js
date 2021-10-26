import React from 'react';
import styled from 'styled-components';
import { StandardPadding, size } from '../../styles/index.styles';
import { useStaticQuery, graphql } from 'gatsby';
import { richTextOptions } from '../../utility/richtext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutPageSectionWrapper = styled.div``;

const AboutPageGrid = styled.div`
	display: grid;
	grid-template-columns: 4fr 2fr;
	grid-column-gap: 1rem;

	@media screen and (max-width: ${size.tablet}) {
		grid-template-columns: 1fr;
	}
`;

const ListSection = styled.div`
	margin-bottom: 2rem;
`
const Title = styled.h4`
	margin-bottom: 1rem;
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
							<Title>Staff </Title>
							{page.staff ? (
								<>
									{page.staff.map((name,index) => (
										<ListItem key={index}> {name}</ListItem>
									))}
								</>
							) : null}
						</ListSection>

						<ListSection>
							<Title>Selected clients and collaborators </Title>
							{page.selectedClientsAndCollaborators ? (
								<>
									{page.selectedClientsAndCollaborators.map((name,index) => (
										<ListItem key={index}> {name}</ListItem>
									))}
								</>
							) : null}
						</ListSection>

						<ListSection>
							<Title>Press </Title>
						</ListSection>
					</Column>
				</AboutPageGrid>
			</StandardPadding>
		</AboutPageSectionWrapper>
	);
};

export default AboutPageSection;
