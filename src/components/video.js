import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {

  useEffect (() => {
    gsap.to("#cream", {
      scrollTrigger: {
        trigger: "#cream",
        start: "bottom 50%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
      },
      opacity: 0,
      duration: 2,
    });
  })

  return (
    <video
        id="splash"
        loop
        autoPlay
        playsInline
        muted
        src="https://res.cloudinary.com/ben-hutchings/video/upload/v1627490956/video_ct77ys.mp4"
        type="video/mp4"
      ></video>
  )
}

export default Video
