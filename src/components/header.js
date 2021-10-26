import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import '../styles/style.scss'

const Header = () => {

    return (
        <header>
            <div class="nav-hitbox-bar">
      <button class="nav-hitbox-1" onClick={() => scrollTo('#cream')}>Cream</button>
      <button class="nav-hitbox-2" onClick={() => scrollTo('#work')}>Work</button>
      <button class="nav-hitbox-3" onClick={() => scrollTo('#about')}>About</button>
      <button class="nav-hitbox-4" onClick={() => scrollTo('#contact')}>Contact</button>
    </div>
    <div class="navigation">
      <div class="nav-1">
        <img class="nav-item-1" src="/cream-off.svg" alt="nav-button"></img>
      </div>
      <div class="nav-1-mobile">
        <img class="nav-item-1" src="/cream-on.gif" alt="nav-button"></img>
      </div>
      <div class="nav-2">
        <img class="nav-item-2" src="/work-off.svg" alt="nav-button"></img>
      </div>
      <div class="nav-3">
        <img class="nav-item-3" src="/about-off.svg" alt="nav-button"></img>
      </div>
      <div class="nav-4">
        <img class="nav-item-4" src="/contact-off.svg" alt="nav-button"></img>
      </div>
    </div>
        </header>
    )
}

export default Header