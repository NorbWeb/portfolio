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
              strArray={'About'.split('')}
              idx={1}
            />
          </h1>
          <p>
            I am a junior fullstack web developer with a lot of passion. By now
            I have complete a bootcamp at
            <a href="https://www.wildcodeschool.com/en-GB">
              {' '}
              Wild Code School{' '}
            </a>
            and I am looking forward for interessting and challenging projects.
            I have got some private projects I am work on, check this out in the
            <Link to="/portfolio"> My Work </Link> section.
          </p>
          <p>
            My job portfolio looking like a colourful mix. After school I went
            to military service for a couple of years. Then I started to study
            social sience at the university of Rostock. But I heard a call for
            manual work, so I decide to become a destiller. Yup, I can destille
            booze 🥃.
          </p>
          <p>
            So why coding now? I was always tempted to code, but I never know
            how to start. But then a live changing event occured. I packed my
            things and went on that journey.
          </p>
        </div>
        <div className="box-effect">
          <h3>Placeholder</h3>
        </div>
      </div>
    </div>
  )
}

export default About
