import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            
          </div>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="http://github.com" className='btn'>Github</a>
          <a href="http://github.com" className='btn btn-primary'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default React.memo(Portfolio)