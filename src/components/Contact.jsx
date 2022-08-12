import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1500)
  }, [])

  return (
    <div className="box-contact">
      <div className="text-zone">
      <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Contact'.split('')}
            idx={1}
          />
        </h1>
      </div>
    </div>
  )
}

export default Contact
