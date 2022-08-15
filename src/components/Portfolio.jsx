import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import porfolioData from '../data/portfolio.json'
import './Styles/Portfolio.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <div className="box-portfolio">
      <div className="grid-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={1}
            />
          </h1>
          <div className="images-container">
          {porfolioData.portfolio.map((port, index) => {
            return (
              <div key={index} className="image-box">
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt={port.title}
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <p className="info">{port.info}</p>

                  <button className="btn" onClick={() => window.open(port.url)}>
                    view
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio
