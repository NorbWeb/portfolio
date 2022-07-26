import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
// import porfolioData from '../data/portfolio.json'
import './Styles/Portfolio.scss'
import { getDocs, collection } from 'firebase/firestore/lite'
import { db } from '../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isHovering, setIsHovering] = useState(false)
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  const handleMouseOver = (item) => {
    setIsHovering(item)
  }

  const handleMouseOut = () => {
    setIsHovering(null)
  }

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

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
          <p>
            Have a look at my recent work. I will show more after a while and
            some of them evolve over time.{' '}
          </p>
          <div className="images-container">
            {portfolio.map((port, index) => {
              return (
                <div
                  key={index}
                  className="image-box"
                  onMouseOver={() => handleMouseOver(port.title)}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={port.cover}
                    className="portfolio-image"
                    alt={port.title}
                  />
                  <div style={port.finished ? { display: 'none' } : null}>
                    <div
                      style={
                        isHovering === port.title ? { opacity: 0.15 } : null
                      }
                      className="progress-tag"
                    >
                      Work in progress
                    </div>
                    <div
                      style={
                        isHovering === port.title ? { opacity: 0.15 } : null
                      }
                      className="progress-tag"
                    />
                  </div>
                  <div className="content">
                    <p className="title">{port.title}</p>
                    <h4 className="description">{port.description}</h4>
                    <p className="info">{port.info}</p>

                    <button
                      className="btn"
                      onClick={() => window.open(port.url)}
                    >
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
