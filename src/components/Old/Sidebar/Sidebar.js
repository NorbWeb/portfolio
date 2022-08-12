import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoN from '../../assets/images/letter-n3.png'
import LogoName from '../../assets/images/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

const handleNavLink = () => {
  setOpen(false);
  window.scrollTo({top:0, left:0, behavior: 'smooth'})

};

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoN} alt="logo" />
        <img className="sub-logo" src={LogoName} alt="logo-subtitle" />
      </Link>
      <nav className={open ? 'show' : null}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => handleNavLink()}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => handleNavLink()}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => handleNavLink()}
        >
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => handleNavLink()}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/norbert-madauss/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/NorbWeb">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="skype:live:norbert151086">
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
      </div>
    </div>
  )
}

export default Sidebar