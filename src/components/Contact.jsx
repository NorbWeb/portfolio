import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from './AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import './Styles/Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputSubject, setInputSubject] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1500)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bnrwg44',
        'template_xrtjlfe',
        refForm.current,
        'gJKt689dLpsgkIsZ5'
      )
      .then(
        () => {
          alert('Message successfully send!')
          setInputEmail('')
          setInputMessage('')
          setInputName('')
          setInputSubject('')
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="box-contact">
      <div className="grid-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact'.split('')}
              idx={1}
            />
          </h1>
          <p>
            Do you have some questions about coding, my work or myself? Do you
            want to work with me or have some interesting ideas? Then just
            contact me! I'm looking forward to hearing from you. And if you
            have a job offer, don't hesitate and hit the keys!{' '}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="form-top">
                <input
                  value={inputName}
                  onChange={(event) => setInputName(event.target.value)}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  value={inputEmail}
                  onChange={(event) => setInputEmail(event.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-bottom">
                <input
                  value={inputSubject}
                  onChange={(event) => setInputSubject(event.target.value)}
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
                <textarea
                  value={inputMessage}
                  onChange={(event) => setInputMessage(event.target.value)}
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <input type="submit" className="submit-button" value="SEND" />
              </div>
            </form>
          </div>
        </div>
        <div className="box-effect">
          <div className="info-map">
            <span>
              Norbert Madauß,
              <br />
              Germany,
              <br />
              Somewhere in Potsdam
              <br />
            </span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[52.394919, 13.060529]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[52.394919, 13.060529]}>
                <Popup className="popup">This is NOT my position 😉</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
