import styled, { createGlobalStyle } from "styled-components"
import LifeEFRegularWoff from '../fonts/LifeEF-Regular.woff'
import LifeEFRegularWoff2 from '../fonts/LifeEF-Regular.woff2'
import VT323 from '../fonts/VT323-Regular.ttf'

export const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "1500px"
  }

export const Layers = {
    BACKGROUND_VIDEO: 10,
    NAVBAR: 60,
    VIDEO_PLAYER_ICONS: 50 
  }

export const Colour = {
    grey: '#d4dbde',
    progress_scroll_bg: 'rgb(255,255,255, 0.2)',
    progress_scroll: 'rgb(255,255,255,0.8)',

}

export const StandardPadding = styled.div`
  padding: 1rem;
`

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: "LifeEFRegular";
  src: url(${LifeEFRegularWoff2}) format('woff2'), url(${LifeEFRegularWoff}) format('woff');
  font-display: block;
}

@font-face {
  font-family: "VT323";
  src: url(${VT323}) format('truetype');
  font-display: block;
}


  * {
box-sizing: border-box;
}
html,
body {
margin: 0 auto;
font-family: 'LifeEFRegular';
background-color: black;
font-weight: 300;
color: ${Colour.grey};
}
h1,h2,h3,h4,h5,h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  color: white;
  }
a {
  text-decoration: none;
  color: white;

}
h1 {
margin-bottom: 1.45rem;
font-size: 2.5rem;
line-height: 1.1;
}
h2 {
margin-bottom: 1.45rem;
font-size: 1.6rem;
line-height: 1.1;
}
h3 {
margin-bottom: 1.45rem;
font-size: 1.3rem;
line-height: 1.1;
}
h4 {
margin-bottom: 1.45rem;
font-size: 1.2rem;
line-height: 1.1;
}
h5 {
margin-bottom: 1.45rem;
font-size: 0.85028rem;
line-height: 1.1;
}
h6 {
margin-bottom: 1.45rem;
font-size: 0.78405rem;
}
img {
max-width: 100%;
margin-left: 0;
margin-right: 0;
margin-top: 0;
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
margin-bottom: 1.45rem;
}
p, a{
margin-left: 0;
margin-right: 0;
margin-top: 0;
margin-bottom: 1rem;
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
font-size: 2.25rem;
line-height: 1.15;
font-style: normal;
@media screen and (max-width: ${size.tablet}) {
  font-size: 1.25rem;

	}

}

a {
margin: 0;
margin-bottom: 0.25rem;
}
`