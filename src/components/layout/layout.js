import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../styles/index.styles";
import SEO from '../seo/seo'
// import Header from '../header'
import Navbar from '../navbar/navbar'
const LayoutWrapper = styled.div`
  /* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */

`

const MainWrapper = styled.main`

`

const Layout = props => {
  console.log('props', props)
    return (
      <LayoutWrapper>
        <GlobalStyle />
        <SEO />
        <Navbar displayBelow={props.displayBelow} />
        <MainWrapper>
            {props.children}
        </MainWrapper>
      </LayoutWrapper>
    )
  }
  Layout.defaultProps = {
    displayBelow: false,
  };
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
    withPadding: PropTypes.bool
  }
  
  export default Layout