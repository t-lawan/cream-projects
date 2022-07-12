import React, { useState, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import PlayImage from "../../assets/images/play.png"
import PauseImage from "../../assets/images/pause.png"
import { Icon, IconWrapper } from "../video-player/video-player"
import { connect } from "react-redux"
import { showNavbar, hideNavbar } from "../../store/actions"

const GenericVideoPlayerWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const StyledReactPlayer = styled(ReactPlayer)`
  /* height: 100%; */
  /* width: 100%; */
  /* object-fit: cover; */
`

// https://vimeo.com/728800970/c9697541bd
const GenericVideoPlayer = props => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShowing, setIsShowing] = useState(true)
  const videoEl = useRef(null);

  const play = () => {
    setIsPlaying(true)
    props.hideNavbar()

    if (isShowing) {
      setTimeout(() => {
        setIsShowing(false)
      }, 3000)
    }
  }

  const pause = () => {
    setIsPlaying(false)
    props.showNavbar()
  }

  const mouseMove = () => {
    if (!isShowing) {
      setIsShowing(true)
    }
  }

  const onProgress = () => {
	const vid = videoEl.current;

    if(!isInViewPort(vid)) {
        pause();
    }

    if (isShowing) {
        setTimeout(() => {
            setIsShowing(false);
        }, 5000);
    }
  }

  const isInViewPort = element => {
    const rect = element.getBoundingClientRect()
    return Math.abs(rect.y) <= rect.height / 2
  }

  return (
    <GenericVideoPlayerWrapper onMouseMove={() => mouseMove()} ref={videoEl}>
      <IconWrapper>
        <Icon show={!isPlaying} onClick={() => play()} src={PlayImage} />
        <Icon
          show={isPlaying && isShowing}
          onClick={() => pause()}
          src={PauseImage}
        />
      </IconWrapper>
      <StyledReactPlayer
        url={props.url}
        playing={isPlaying}
        muted={true}
        loop={true}
        height={"100%"}
        width={`100%`}
        style={{ objectFit: "cover" }}
        onProgress={() => onProgress()}
      />
    </GenericVideoPlayerWrapper>
  )
}

GenericVideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    showNavbar: () => dispatch(showNavbar()),
    hideNavbar: () => dispatch(hideNavbar()),
  }
}
export default connect(null, mapDispatchToProps)(GenericVideoPlayer)
