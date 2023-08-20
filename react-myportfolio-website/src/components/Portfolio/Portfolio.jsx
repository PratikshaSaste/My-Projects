import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
     id: 1,
     image:IMG1,
     title: 'Crypto Currency Dashboard & Finantial Visualization',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  },
  {
     id: 2,
     image:IMG2,
     title: 'Charts templates & information in figma',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  },
  {
     id: 3,
     image:IMG3,
     title: 'Figma dashboard UI kit for data design web design',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  },
  {
     id: 4,
     image:IMG4,
     title: 'Maintaining tasks and tracking progress',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  },
  {
     id: 5,
     image:IMG5,
     title: 'Charts templates & infographics in Figma',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  },
    {
     id: 6,
     image:IMG6,
     title: 'Charts templates & infographics in Figma',
     github: 'https://github.com/PratikshaSaste/My-Projects',
     demo: 'https://dribbble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Porttfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id , image, title,github, demo}) => {
        return(
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={image} alt=""/>
            <h3> This is portfolio item</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' >Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
          </div>
        </article>
        )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio