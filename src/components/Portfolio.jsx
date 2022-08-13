import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'

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
        </div>
        <div className="box-effect">
          <h3>Placeholder</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
