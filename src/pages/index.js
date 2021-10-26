import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollTo from "gatsby-plugin-smoothscroll"
import Head from "../components/head"

import Layout from "../components/layout/layout"
import { Carousel } from "react-bootstrap"

import Slide1 from "../images/cp-1.jpg"
import Slide2 from "../images/cp-2.jpg"
import Slide3 from "../images/cp-3.jpg"
import Slide4 from "../images/cp-4.jpg"
import Slide5 from "../images/cp-5.jpg"
import Slide6 from "../images/cp-6.jpg"
import Slide7 from "../images/cp-7.jpg"
import Slide8 from "../images/cp-8.jpg"
import Slide9 from "../images/cp-9.jpg"
import Slide10 from "../images/cp-10.jpg"
import Slide11 from "../images/cp-11.jpg"
import Slide12 from "../images/cp-12.jpg"
import Slide13 from "../images/cp-13.jpg"
import Slide14 from "../images/cp-14.jpg"
import Slide15 from "../images/cp-15.jpg"
import Slide16 from "../images/cp-16.jpg"
import Slide17 from "../images/cp-17.jpg"
import Slide18 from "../images/cp-18.jpg"
import Slide19 from "../images/cp-19.jpg"
import Slide20 from "../images/cp-20.jpg"
import Slide21 from "../images/cp-21.jpg"
import Slide22 from "../images/cp-22.jpg"
import Slide23 from "../images/cp-23.jpg"
import Slide24 from "../images/cp-24.jpg"
import Slide25 from "../images/cp-25.jpg"
import Slide26 from "../images/cp-26.jpg"

import "../styles/Life_EF.css"
import "../styles/style.scss"
import Video from "../components/video"
import About from "../components/about"
import Contact from "../components/contact"
import Home from '../components/pages/home';

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {

useEffect (() => {
  gsap.from("#work", {
    scrollTrigger: {
      trigger: "#work",
      start: "top 100%",
      end: "top 50%",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    duration: 2,
  });
  gsap.from("#work", {
    scrollTrigger: {
      trigger: "#work",
      start: "bottom 50%",
      end: "bottom 0%",
      // markers: true,
      scrub: true,
    },
    opacity: 1,
    duration: 2,
  });
})




  return (
    <Layout>
      <Head />
{/* 
      <Carousel fade={true} id="work" onClick={() => scrollTo("#work")}>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="Slide 1" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Slide 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Slide 3" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide4} alt="Slide 4" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide5} alt="Slide 5" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide6} alt="Slide 6" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide7} alt="Slide 7" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide8} alt="Slide 8" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide9} alt="Slide 9" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide10} alt="Slide 10" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide11} alt="Slide 11" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide12} alt="Slide 12" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide13} alt="Slide 13" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide14} alt="Slide 14" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide15} alt="Slide 15" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide16} alt="Slide 16" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide17} alt="Slide 17" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide18} alt="Slide 18" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide19} alt="Slide 19" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide20} alt="Slide 20" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide21} alt="Slide 21" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide22} alt="Slide 22" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide23} alt="Slide 23" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide24} alt="Slide 24" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide25} alt="Slide 25" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slide26} alt="Slide 26" />
        </Carousel.Item>
      </Carousel>

      <About />
      <Contact /> */}
      <Home />
    </Layout>
  )
}

export default IndexPage
