import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PropTypes from "prop-types";


const ProjectMediaWrapper = styled.div`
    /* position: relative; */
    /* background:red; */
    text-align: center;
`
const Image = styled(GatsbyImage)`
    /* display: block; */
    width: 100%;
    /* height: 100%; */
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
`
const ProjectMedia = (props) => {
    let media = props.media

    let image;
    if(media.type == "IMAGE"){
        image = getImage(media.image.gatsbyImageData);
    

    return (
        <ProjectMediaWrapper>
            {/* <p> Hey </p> */}
            {media.type == "IMAGE" ? <Image image={image} alt={"hey"} /> : null}
            {media.type == "VIDEO" ? <Video src={media.video.file.url} autoPlay loop muted /> : null}
        </ProjectMediaWrapper>
    )
}

ProjectMedia.propTypes = {
    media: PropTypes.object.isRequired
  }


  export default ProjectMedia
