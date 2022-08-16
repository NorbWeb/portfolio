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
              I am a junior fullstack web developer with a lot of passion. By
              now I have complete a bootcamp at
              <a href="https://www.wildcodeschool.com/en-GB">
                {' '}
                Wild Code School{' '}
              </a>
              and I am looking forward for interessting and challenging
              projects. I have got some private projects I am work on, check
              this out in the
              <Link to="/portfolio"> My Work </Link> section.
            </p>
            <p>
              My job portfolio looking like a colourful mix. After school I went
              to military service for a couple of years. Then I started to study
              social sience at the university of Rostock. But I heard a call for
              manual work, so I decide to become a destiller. Yup, I can
              destille booze 🥃.
            </p>
            <p>
              So why coding now? I was always tempted to code, but I never know
              how to start. But then a live changing event occured. I packed my
              things and went on that journey.
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
