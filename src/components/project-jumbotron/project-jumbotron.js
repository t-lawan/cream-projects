import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player';
import GenericVideoPlayer from '../generic-video-player/generic-video-player';


const ProjectJumbrotronWrapper = styled.div`
    position: relative;
    /* background:red; */
    text-align: center;
`
const Image = styled(GatsbyImage)`
    /* display: block; */
    width: 100%;
    object-fit: cover;
    height: 100%;
`;

const JumbotronMediaWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`


const ProjectJumbotron = (props) => {
    let jumbotron = props.jumbotron;
    let image;
    if(jumbotron.type == "IMAGE"){
        image = getImage(jumbotron.image.gatsbyImageData);
    }

    return (
        <ProjectJumbrotronWrapper>
            {/* <p> Hey </p> */}
            <JumbotronMediaWrapper>
            {jumbotron.type === "IMAGE" ? <Image objectFit={'cover'} image={image} alt={"Image"} /> : null}
            {jumbotron.type === "VIDEO" ? <VideoPlayer url={jumbotron.videoUrl} /> : null}
            {jumbotron.type === "VIMEO_VIDEO" ? <VideoPlayer url={jumbotron.videoUrl} /> : null}
            {/* {jumbotron.type === "VIDEO" ? <GenericVideoPlayer url={jumbotron.videoUrl} /> : null} */}
            {/* {jumbotron.type === "VIMEO_VIDEO" ? <GenericVideoPlayer /> : null} */}
            </JumbotronMediaWrapper>

        </ProjectJumbrotronWrapper>
    )
}

ProjectJumbotron.propTypes = {
    jumbotron: PropTypes.object.isRequired
  }


  export default ProjectJumbotron
