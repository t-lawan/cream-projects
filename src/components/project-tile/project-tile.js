import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const ProjectTitleWrapper = styled.div`
    position: relative;
`
const ProjectThumbnail = styled(GatsbyImage)`
    display: block;
    height: 100%;
    width: 100%;

`;
const ProjectOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.6);
    opacity: 0;
    transition: opacity 0.5s;
    &:hover {
        opacity: 1;
    }
    /* &--blur { */
        backdrop-filter: blur(5px);
    /* } */
`

const ProjectTitle = styled.p`
    color: white;
    text-align: center;
`
 
const ProjectTile = (props) => {
    let project = props.project
    let image = getImage(project.thumbnailImage.gatsbyImageData);

    return (
        <ProjectTitleWrapper>
            <ProjectThumbnail image={image} alt={project.title} />
            <ProjectOverlay>
                <ProjectTitle> {project.title} </ProjectTitle>
            </ProjectOverlay>
        </ProjectTitleWrapper>
    )
}

ProjectTile.propTypes = {
    project: PropTypes.object.isRequired
  }


  export default ProjectTile
