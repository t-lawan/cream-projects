import React from "react"

const About = () => {
  return (
      <div class="about" id="about">
        <ul>
          <li
            class="fade"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <span>
              Cream is a digital arts studio based in London, with a focus on
              game engine technology. We collaborate with artists, designers and
              creatives to build worlds and create original content using
              computer generated imagery.
            </span>
          </li>
          <li
            class="fade"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <span>
              With a set of references coming from the fields of architecture,
              media art and photography, we explore contemporary tools and
              innovative workflows to create still images, animations and films,
              VR experiences and immersive installations.
            </span>
          </li>
          <li
            class="fade"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
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
