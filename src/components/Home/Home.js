import './Home.scss'
import LogoTitle from '../../assets/images/letter-n3.png'
import AnimatedLetter from '../AnimatedLetters/AnimatedLetters'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <div className='letter-box'>
            <img src={LogoTitle} alt="developer" /></div>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={'orbert'.split('')}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={'web developer.'.split('')}
              idx={22}
            />
          </h1>
          <h2>Junior Fullstack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
