import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../assets/images/letter-n3.png'
import Logo400 from '../assets/images/letter-n3-400x400.png'
import AnimatedLetters from './AnimatedLetters'
import './Styles/Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const arr = []
  let squareRoot = 0
  const tileNumber = (num) => {
    for (let i = 1; i <= num; i++) {
      arr.push(i)
    }

    squareRoot = Math.sqrt(num)
    return arr + squareRoot
  }

  tileNumber(64)

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
          {/* <img alt='Logo' src={LogoTitle}/> */}
          <div
            className="grid-box"
            style={{
              gridTemplateColumns: `repeat(${squareRoot}, 1fr)`,
              gridTemplateRows: `repeat(${squareRoot}, 1fr)`,
            }}
          >
            {arr.map((tile, index) => {
              return (
                <div key={tile + index} className={`tile tile-${tile}`}>
                  <img
                    className={`img-${tile}`}
                    src={Logo400}
                    alt={`Tile ${tile}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
