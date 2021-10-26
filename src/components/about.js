import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

useEffect (() => {
  gsap.from(".paragraph1", {
    scrollTrigger: {
      trigger: ".paragraph1",
      start: "top 100%",
      end: "bottom 80%",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    duration: 2,
  });
  gsap.from(".paragraph1", {
    scrollTrigger: {
      trigger: ".paragraph1",
      start: "top 40%",
      end: "bottom 20%",
      // markers: true,
      scrub: true,
    },
    opacity: 1,
    duration: 2,
  });
  gsap.from(".paragraph2", {
    scrollTrigger: {
      trigger: ".paragraph2",
      start: "top 100%",
      end: "bottom 80%",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    duration: 2,
  });
  gsap.from(".paragraph2", {
    scrollTrigger: {
      trigger: ".paragraph2",
      start: "top 40%",
      end: "bottom 20%",
      // markers: true,
      scrub: true,
    },
    opacity: 1,
    duration: 2,
  });
  gsap.from(".paragraph3", {
    scrollTrigger: {
      trigger: ".paragraph3",
      start: "top 100%",
      end: "bottom 80%",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    duration: 2,
  });
  gsap.from(".paragraph3", {
    scrollTrigger: {
      trigger: ".paragraph3",
      start: "top 40%",
      end: "bottom 20%",
      // markers: true,
      scrub: true,
    },
    opacity: 1,
    duration: 2,
  });
})



  return (
      <div class="about" id="about">
        <ul>
          <li class="paragraph1">
            <span>
              Cream is a digital arts studio based in London, with a focus on
              game engine technology. We collaborate with artists, designers and
              creatives to build worlds and create original content using
              computer generated imagery.
            </span>
          </li>
          <li class="paragraph2">
            <span>
              With a set of references coming from the fields of architecture,
              media art and photography, we explore contemporary tools and
              innovative workflows to create still images, animations and films,
              VR experiences and immersive installations.
            </span>
          </li>
          <li class="paragraph3">
            <span>
              Our collaborative projects have been exhibited internationally,
              including the Arts and Science Museum in Singapore, Centre
              Pompidou in Paris, the V&#x26;A and Tate Britain in London.
            </span>
          </li>
        </ul>
      </div>
  )
}

export default About
