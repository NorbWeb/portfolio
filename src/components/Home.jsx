import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../assets/images/letter-n3.png'
import Logo400 from '../assets/images/letter-n3-400x400.png'
import AnimatedLetters from './AnimatedLetters'
import './Styles/Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hoverTiles, setHoverTiles] = useState([''])

  // Set tile to 'hoverTiles' -- tile directly on mouse and tiles on top, right, bottom and left of it
  // If tile is on edge, it do not take the next tile to it, because it would be on another line
  const handleMouseOver = (item) => {
    if (
      item === 1 ||
      item === 9 ||
      item === 17 ||
      item === 25 ||
      item === 33 ||
      item === 41 ||
      item === 49 ||
      item === 57
    ) {
      setHoverTiles([
        `hover-${item}`,
        `hover-${item - 8}-n`,
        `hover-${item + 1}-n`,
        `hover-${item + 8}-n`,
      ])
    } else if (
      item === 8 ||
      item === 16 ||
      item === 24 ||
      item === 32 ||
      item === 40 ||
      item === 48 ||
      item === 56 ||
      item === 64
    ) {
      setHoverTiles([
        `hover-${item}`,
        `hover-${item - 8}-n`,
        `hover-${item + 8}-n`,
        `hover-${item - 1}-n`,
      ])
    } else {
      setHoverTiles([
        `hover-${item}`,
        `hover-${item - 8}-n`,
        `hover-${item + 1}-n`,
        `hover-${item + 8}-n`,
        `hover-${item - 1}-n`,
      ])
    }
  }

  const handleMouseOut = () => {
    setHoverTiles([''])
  }

  console.log(hoverTiles)

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
          <div
            className="grid-box"
            style={{
              gridTemplateColumns: `repeat(${squareRoot}, 1fr)`,
              gridTemplateRows: `repeat(${squareRoot}, 1fr)`,
            }}
          >
            {arr.map((tile, index) => {
              return (
                <div
                  key={tile + index}
                  className={`tile tile-${tile} ${hoverTiles[0]} ${hoverTiles[1]} ${hoverTiles[2]} ${hoverTiles[3]} ${hoverTiles[4]}`}
                  onMouseOver={() => handleMouseOver(tile)}
                  onMouseOut={() => handleMouseOut()}
                >
                  <img
                    className={`img-${tile} ${hoverTiles[0]} ${hoverTiles[1]} ${hoverTiles[2]} ${hoverTiles[3]} ${hoverTiles[4]}`}
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
