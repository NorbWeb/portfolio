import { useEffect, useState } from 'react'
import LogoTitle from '../assets/images/letter-n3.png'
import AnimatedLetters from './AnimatedLetters'
import './Styles/Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="box-home">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} _1`}>H</span>
          <span className={`${letterClass} _2`}>i,</span>
          <br />
          <span className={`${letterClass} _3`}>I</span>
          <span className={`${letterClass} _4`}>'m</span>
          <div className="letter-box">
            <img src={LogoTitle} alt="developer" />
          </div>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'orbert'.split('')}
            idx={5}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'web developer.'.split('')}
            idx={11}
          />
        </h1>
        <h2>Junior Fullstack Developer</h2>
      </div>
    </div>
  )
}

export default Home
