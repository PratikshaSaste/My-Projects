import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Porttfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG1} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG2} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG3} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG4} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG5} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG6} alt=""/>
            <h3> This is portfolio item</h3>
            <a href="https://github.com/PratikshaSaste/My-Projects" className='btn' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio