import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colour, Layers } from '../../styles/index.styles';
import PlayImage from '../../assets/images/play.png';
import PauseImage from '../../assets/images/pause.png';

const VideoWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
const Video = styled.video`
z-index: ${Layers.BACKGROUND_VIDEO};
opacity: 0.8;
`;

const IconWrapper = styled.div`
	z-index: ${Layers.VIDEO_PLAYER_ICONS};

	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Icon = styled.img`
	/* position: absolute;
	bottom: 45%;
	left: 45%;
	color: red;
	text-align: center;
	
	z-index: 50; */
	width: 7.5%;
	display: ${(props) => (props.show ? 'block' : 'none')};
	filter: invert(1);
`;

const PlayButton = styled.p`display: ${(props) => (props.show ? 'block' : 'none')};`;

const ProgressBarWrapper = styled.div`
	position: absolute;
	width: 100%;
	bottom: 2.5%;
	text-align: center;
	z-index: ${Layers.VIDEO_PLAYER_ICONS};
	display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ProgressBar = styled.progress`
	/* width: 100%; */
	width: 95%;
	background-color: ${Colour.progress_scroll_bg};
	&[value] {
		-webkit-appearance: none;
		appearance: none;
		background-color: ${Colour.progress_scroll_bg};
		color: ${Colour.progress_scroll};
		height: 0.75rem;
		border: 0;
		/* height: 5px; */
	}
	&[value]::-webkit-progress-bar {
		background-color: ${Colour.progress_scroll_bg};

		border: 0;
		color: ${Colour.progress_scroll};
	}

	&::-moz-progress-bar {
		background: #000;
		border: 0;
		color: ${Colour.progress_scroll};
	}

	&::-webkit-progress-value {
		color: ${Colour.progress_scroll};
		background-color: ${Colour.progress_scroll_bg};

		::after {
			border: 2px solid #000;
			display: flex;
			position: absolute;
			content: '';
			box-sizing: border-box;
			top: -5px;
			right: -1px;
			margin-right: -5px;
			width: 15px;
			height: 15px;
			background-color: #000;
			border-radius: 50%;
		}
	}
`;
/**
 * VideoPlayer React Component
 *
 * @param {*} props
 * @returns
 */
const VideoPlayer = (props) => {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ currentTime, setCurrentTime ] = useState(0);
	const [ length, setLength ] = useState(0);
	const videoEl = useRef(null);
	const progressBarEl = useRef(null);

	const play = () => {
		videoEl.current.play();
		setIsPlaying(true);
	};

	const pause = () => {
		videoEl.current.pause();
		setIsPlaying(false);
	};

	const seekTime = (event) => {
		if (isPlaying) {
			let rect = progressBarEl.current.getBoundingClientRect();
			const percent = (event.clientX - rect.left) / rect.width;
			videoEl.current.currentTime = percent * length;
		}
	};

	const updateProgressBar = () => {
		let vid = videoEl.current;

		setCurrentTime(vid.currentTime);
		setLength(vid.duration);
	};
	return (
		<VideoWrapper>
			<IconWrapper>
				<Icon show={!isPlaying} onClick={() => play()} src={PlayImage} />
				<Icon show={isPlaying} onClick={() => pause()} src={PauseImage} />
			</IconWrapper>

			<Video
				ref={videoEl}
				onTimeUpdate={() => updateProgressBar()}
				loop
				// autoPlay
				playsInline
				muted
				src={props.url}
				type="video/mp4"
			/>
			<ProgressBarWrapper show={isPlaying}>
				<ProgressBar
					ref={progressBarEl}
					onClick={(event) => seekTime(event)}
					value={currentTime}
					max={length}
				/>
			</ProgressBarWrapper>
		</VideoWrapper>
	);
};

VideoPlayer.propTypes = {
	url: PropTypes.string.isRequired
};

export default VideoPlayer;
