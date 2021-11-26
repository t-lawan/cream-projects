import React, {useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../styles/index.styles';
import SEO from '../seo/seo';
import { connect } from 'react-redux';
import Navbar from '../navbar/navbar';
import { showNavbar, hideNavbar } from '../../store/actions';
import { globalHistory } from '@reach/router';
const LayoutWrapper = styled.div`/* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */`;

const MainWrapper = styled.main``;

const Layout = (props) => {
	useEffect(() => {
		return globalHistory.listen((action) => {
				props.showNavbar();
		})
	  }, [])

	return (
		<LayoutWrapper>
			<GlobalStyle />
			<SEO title={props.seoTitle} />
			<Navbar displayBelow={props.displayBelow} />
			<MainWrapper>{props.children}</MainWrapper>
		</LayoutWrapper>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		showNavbar: () => dispatch(showNavbar()),
		hideNavbar: () => dispatch(hideNavbar())
	};
};

const mapStateToProps = (state) => {
	return {
		show_navbar: state.showNavbar
	};
};
Layout.defaultProps = {
	displayBelow: false
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	withPadding: PropTypes.bool
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
