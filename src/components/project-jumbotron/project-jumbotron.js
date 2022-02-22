import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player';


const ProjectJumbrotronWrapper = styled.div`
    /* position: relative; */
    /* background:red; */
    text-align: center;
`
const Image = styled(GatsbyImage)`
    /* display: block; */
    width: 100%;
    object-fit: cover;
    height: 100vh;
`;


const ProjectJumbotron = (props) => {
    let jumbotron = props.jumbotron;
    let image;
    if(jumbotron.type == "IMAGE"){
        image = getImage(jumbotron.image.gatsbyImageData);
    }

    return (
        <ProjectJumbrotronWrapper>
            {/* <p> Hey </p> */}
            {jumbotron.type === "IMAGE" ? <Image objectFit={'cover'} image={image} alt={"Image"} /> : null}
            {jumbotron.type === "VIDEO" ? <VideoPlayer url={jumbotron.videoUrl} /> : null}
        </ProjectJumbrotronWrapper>
    )
}

ProjectJumbotron.propTypes = {
    jumbotron: PropTypes.object.isRequired
  }


  export default ProjectJumbotron
