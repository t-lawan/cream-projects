import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BGVideo from '../../assets/videos/video.mp4'
import { Convert } from '../../utility/convert';
const VideoWrapper = styled.div``
const Video = styled.video``

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
					landingPageVideo {
						file {
							url
						}
					}
				}
			}
		`
  );
  
	let meta = Convert.toMetaModel(contentfulMeta);
	console.log('META', meta);


  return (
    <Video
        id="splash"
        loop
        autoPlay
        playsInline
        muted
        src={meta.landingPageUrl}
        type="video/mp4"
      ></Video>
  )
}

export default BackgroundVideo
