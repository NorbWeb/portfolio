import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from './AnimatedLetters'
import './Styles/About.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1500)
  }, [])

  return (
    <div className="box-about">
      <div className="grid-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About  me'.split('')}
              idx={1}
            />
          </h1>
          <div>
            <p>
              Hello, my Name is Norbert and I am a junior fullstack web
              developer and got a lot of passion building web applications.
              Until now I have completed a bootcamp at
              <a
                href="https://www.wildcodeschool.com/en-GB"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Wild Code School{' '}
              </a>
              and I am looking forward to interesting new challenges. I got a
              few private projects in the works, check them out under the
              <Link to="/portfolio"> My Work </Link> section link.
            </p>
            <p>
              My job portfolio is a diverse mix. After school I attended
              military service for a couple of years, then I chose to go to
              college and study social siences at the university of Rostock. Not
              being completely convinced with that decision I followed the call
              of the craft and became a distiller. Yup, I can make booze 🥃.
            </p>
            <p>
              So why coding now? Because I always wanted to. I was always
              attracted to code, but I never knew where to start. But after I
              experienced a life changing event, I packed my stuff and decided
              to go down that journey. Check out my
              <a
                href="https://www.linkedin.com/in/norbert-madauss/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                linkedIn{' '}
              </a>{' '}
              profile for further information.
            </p>
          </div>
        </div>
        <div className="box-effect">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="#215732" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
