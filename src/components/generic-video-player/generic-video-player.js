import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'

const GenericVideoPlayerWrapper = styled.div`
    height: 100%;
    width: 100%;
`

const StyledReactPlayer = styled(ReactPlayer)`
        /* height: 100%; */
    /* width: 100%; */
`



const GenericVideoPlayer = (props) => {
    return (
        <GenericVideoPlayerWrapper>
            <StyledReactPlayer url={"https://vimeo.com/674818085"} light={false}  height={'100%'} width={`100%`}/>
        </GenericVideoPlayerWrapper>
    )
}

GenericVideoPlayer.propTypes = {
    url: PropTypes.string.isRequired
  }


  export default GenericVideoPlayer
