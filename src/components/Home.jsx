import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  // const arr =
  //   '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36'.split(
  //     ' '
  //   )

  return (
    <div className="box-home">
      <div className="grid-container">
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
          <div className="box-btn">
            <Link className="contact-btn" to="/contact">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className="box-effect">
          <img alt='Logo' src={LogoTitle}/>
          {/* <div className="grid-box">
            {arr.map((tile, index) => {
              return <div key={tile + index} className={`tile tile-${tile}`}>
                <img className={`img-${tile}`} src={LogoTitle} alt={`Tile ${tile}`} />
              </div>
            })}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
