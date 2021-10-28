import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HamburgerBoring } from 'react-animated-burgers';
import AboutImg from '../../assets/images/About.svg';
import AboutOutlineImg from '../../assets/images/About.Outline.svg';

import ContactImg from '../../assets/images/Contact.svg';
import ContactOutlineImg from '../../assets/images/Contact.Outline.svg';

import CreamImg from '../../assets/images/Cream.svg';
import CreamOutlineImg from '../../assets/images/Cream.Outline.svg';

import ProjectsImg from '../../assets/images/Projects.svg';
import ProjectsOutlineImg from '../../assets/images/Projects.Outline.svg';
import { PageMap } from '../../utility/config';
import { useLocation } from '@reach/router';
import { size, Layers } from '../../styles/index.styles';

const NavbarWrapper = styled.header`
	position: ${(props) => (props.displayBelow ? 'relative' : 'fixed')};
	width: 100vw;
	padding: 1rem;
	z-index: ${Layers.NAVBAR};
	@media screen and (max-width: ${size.tablet}) {
		/* display: none; */
		padding: 0rem;
	}
`;

const NavLink = styled(Link)`

`;

export const Hamburger = styled(HamburgerBoring)`
  display: none;
  span, span::before, span::after {
	  height: 2px;
  }
  @media (max-width: ${size.tablet}) {
    display: ${(props) => (props.showInMobile ? 'inherit' : 'none')};
  }
`;

const NavbarDesktopWrapper = styled.div`
	/* display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
    align-items: baseline; */
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 2rem;
	align-items: center;
	@media screen and (max-width: ${size.tablet}) {
		display: none;
	}
`;

const NavbarMobileWrapper = styled.div`
	display: none;

	@media screen and (max-width: ${size.tablet}) {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding: 1rem;
	}
`;
const NavbarMobileOverlayWrapper = styled.div`
	display: none;
	background: black;
	width: 100vw;
	height: 100vh;
	position: absolute;
	@media screen and (max-width: ${size.tablet}) {
		display: ${(props) => (props.show ? 'flex' : 'none')};
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
`;

const NavbarMobileLinksWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 60vw;
	height: 100vh;
`;

const NavbarMobileHamburger = styled.p`z-index: ${Layers.NAVBAR};`;

const NavbarFlexImageItem = styled.div``;

const NavbarImageItem = styled.img`
	-ms-interpolation-mode: nearest-neighbor;
	image-rendering: pixelated;
	mix-blend-mode: lighten;
	width: 100%;
	/* margin-top: -12%; */
	/* fill: pink !important; */

	overflow: hidden;
	.svg {
		/* fill: pink !important; */
	}
`;
const Navbar = (props) => {
	let location = useLocation();
	const [ isMobileOverlayOpen, setIsMobileOverlayOpen ] = useState(false);

	const toggleOpenMobileOverlay = () => {
		setIsMobileOverlayOpen(!isMobileOverlayOpen);
	};

	const isCurrentPage = (page) => {
		let response = false;

		switch (page) {
			case PageMap.HOME.id: {
				response = location.pathname === PageMap.HOME.slug ? true : response;
				break;
			}
			case PageMap.PROJECTS.id: {
				response =
					location.pathname === PageMap.PROJECTS.slug || location.pathname.includes(PageMap.PROJECT.slug)
						? true
						: response;
				break;
			}
			case PageMap.ABOUT.id: {
				response = location.pathname === PageMap.ABOUT.slug ? true : response;
				break;
			}
			case PageMap.CONTACT.id: {
				response = location.pathname === PageMap.CONTACT.slug ? true : response;
				break;
			}

			default:
		}
		return response;
	};

	return (
		<NavbarWrapper displayBelow={props.displayBelow}>
			<NavbarDesktopWrapper>
				<NavLink to={PageMap.HOME.slug}>
					<NavbarImageItem
						src={isCurrentPage(PageMap.HOME.id) ? CreamImg : CreamOutlineImg}
						alt="nav-button"
					/>
				</NavLink>
				<NavLink to={PageMap.PROJECTS.slug}>
					<NavbarImageItem
						src={isCurrentPage(PageMap.PROJECTS.id) ? ProjectsImg : ProjectsOutlineImg}
						alt="nav-button"
					/>
				</NavLink>
				<NavLink to={PageMap.ABOUT.slug}>
					{/* <AboutImg fill='red' /> */}
					<NavbarImageItem
						src={isCurrentPage(PageMap.ABOUT.id) ? AboutImg : AboutOutlineImg}
						alt="nav-button"
					/>
				</NavLink>
				<NavLink to={PageMap.CONTACT.slug}>
					<NavbarImageItem
						src={isCurrentPage(PageMap.CONTACT.id) ? ContactImg : ContactOutlineImg}
						alt="nav-button"
					/>
				</NavLink>
			</NavbarDesktopWrapper>
			<NavbarMobileOverlayWrapper show={isMobileOverlayOpen}>
				<NavbarMobileLinksWrapper>
					<NavLink to={PageMap.HOME.slug}>
						<NavbarImageItem
							src={isCurrentPage(PageMap.HOME.id) ? CreamImg : CreamOutlineImg}
							alt="nav-button"
						/>
					</NavLink>
					<NavLink to={PageMap.PROJECTS.slug}>
						<NavbarImageItem
							src={isCurrentPage(PageMap.PROJECTS.id) ? ProjectsImg : ProjectsOutlineImg}
							alt="nav-button"
						/>
					</NavLink>
					<NavLink to={PageMap.ABOUT.slug}>
						{/* <AboutImg fill='red' /> */}
						<NavbarImageItem
							src={isCurrentPage(PageMap.ABOUT.id) ? AboutImg : AboutOutlineImg}
							alt="nav-button"
						/>
					</NavLink>
					<NavLink to={PageMap.CONTACT.slug}>
						<NavbarImageItem
							src={isCurrentPage(PageMap.CONTACT.id) ? ContactImg : ContactOutlineImg}
							alt="nav-button"
						/>
					</NavLink>
				</NavbarMobileLinksWrapper>
			</NavbarMobileOverlayWrapper>

			<NavbarMobileWrapper>
				<Hamburger
					toggleButton={toggleOpenMobileOverlay}
					showInMobile={true}
					isActive={isMobileOverlayOpen}
					barColor="white"
					buttonWidth={30}
				/>
				{/* <NavbarMobileOverlayWrapper /> */}
			</NavbarMobileWrapper>
		</NavbarWrapper>
	);
};

export default Navbar;
