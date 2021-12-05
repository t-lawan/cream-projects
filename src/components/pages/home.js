import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../background-video/background-video'
import CreamProjects from '../../assets/images/Cream_Projects_Stack.svg';
import { size, Layers } from '../../styles/index.styles';
const HomeWrapper = styled.div``;

const MobileLogoWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: none;
	@media screen and (max-width: ${size.tablet}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Logo = styled.img`
	-ms-interpolation-mode: nearest-neighbor;
	image-rendering: pixelated;
	mix-blend-mode: lighten;
	width: 80%;
	z-index: ${Layers.BACKGROUND_VIDEO};
	margin: 0;
	/* overflow: hidden; */
`;
const Home = () => {
	return (
		<HomeWrapper>
			<BackgroundVideo />
			<MobileLogoWrapper>
				<Logo src={CreamProjects} />
			</MobileLogoWrapper>
		</HomeWrapper>
	);
};

export default Home;
