import React from 'react';
import styled from 'styled-components';
import { StandardPadding, size } from '../../styles/index.styles';
import { richTextOptions } from '../../utility/richtext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ContactPageSectionWrapper = styled.div``;

const ContactPageGrid = styled.div`
	display: grid;
	grid-template-columns: 4fr 2fr;
	grid-column-gap: 1rem;

	@media screen and (max-width: ${size.tablet}) {
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
	}
`;

const Column = styled.div``;

const ContactText = styled.div`
	> p,
	a {
		font-family: "VT323";

		font-size: 1.25rem;
		@media screen and (max-width: ${size.tablet}) {
			margin: 0;
			font-size: 1rem;
		}
	}
`;
const ContactPageSection = (props) => {
	let page = props.page;

	return (
		<ContactPageSectionWrapper>
			<StandardPadding>
				<ContactPageGrid>
					{/* First Column */}
					<Column>{documentToReactComponents(JSON.parse(page.firstColumnText), richTextOptions)}</Column>
					<Column>
						{' '}
						<ContactText>
							{documentToReactComponents(JSON.parse(page.contactText), richTextOptions)}
						</ContactText>
					</Column>
				</ContactPageGrid>
			</StandardPadding>
		</ContactPageSectionWrapper>
	);
};

export default ContactPageSection;
