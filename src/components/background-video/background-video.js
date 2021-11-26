import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BGVideo from '../../assets/videos/video.mp4';
import { Convert } from '../../utility/convert';
const VideoWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
const Video = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

const BackgroundVideo = () => {
	const { contentfulMeta } = useStaticQuery(
		graphql`
			query {
				contentfulMeta {
					contentful_id
					seoTitle
					seoDescription {
						seoDescription
					}
					seoImage {
						file {
							url
						}
					}
					landingPageUrl
				}
			}
		`
	);

	let meta = Convert.toMetaModel(contentfulMeta);

	return (
		<VideoWrapper>
			<Video id="splash" loop autoPlay playsInline muted src={meta.landingPageUrl} type="video/mp4" />
		</VideoWrapper>
	);
};

export default BackgroundVideo;
