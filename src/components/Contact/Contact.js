import Loader from 'react-loaders'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
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
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              inx={15}
            />
          </h1>
          <p>
            Do you have some questions about coding, my work or my self? Do you
            want to work with me or have some interesting ideas? Then just
            contact me! I am looking forward to hearing from you. And if you
            have a job offer, don't hesitate and hit the keys!{' '}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Norbert Madauß,
          <br />
          Germany,
          <br />
          Somewhere in Potsdam
          <br />
          <span>norbert.madauss@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer type="pacman" center={[52.394919, 13.060529]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[52.394919, 13.060529]}>
              <Popup className="popup">This is not my position...</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader />
    </>
  )
}
export default Contact
