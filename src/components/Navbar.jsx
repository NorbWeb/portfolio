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
import Logo from '../assets/images/letter-n3.png'
import SubLogo from '../assets/images/name.png'
import './Styles/Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const handleNavLink = () => {
    setOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: faHome,
      className: 'home-link',
    },
    {
      name: 'About',
      path: '/about',
      icon: faUser,
      className: 'about-link',
    },
    {
      name: 'My Work',
      path: '/portfolio',
      icon: faSuitcase,
      className: 'portfolio-link',
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: faEnvelope,
      className: 'contact-link',
    },
  ]

  const listItems = [
    {
      name: 'linkedIn-icon',
      href: 'https://www.linkedin.com/in/norbert-madauss/',
      icon: faLinkedin,
    },
    {
      name: 'github-icon',
      href: 'https://github.com/NorbWeb',
      icon: faGithub,
    },
    {
      name: 'skype-icon',
      href: 'skype:live:norbert151086',
      icon: faSkype,
    },
  ]

  return (
    <div className="box-navbar">
      <div className="box-logo">
        <img src={Logo} alt="Logo" />
        <img src={SubLogo} alt="SubLogo" />
      </div>
      <nav className={open ? 'show' : null}>
        {menuItems.map((item) => {
          return (
            <NavLink
              key={item.name}
              exact="true"
              activeclassname="active"
              className={item.className}
              to={item.path}
              onClick={() => handleNavLink()}
            >
              <FontAwesomeIcon icon={item.icon} />
            </NavLink>
          )
        })}
      </nav>
      <ul>
        {listItems.map((item) => {
          return (
            <li key={item.name}>
              <a target="_blank" rel="noreferrer" href={item.href}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          )
        })}
      </ul>
      <div className="mobile-menu" onClick={() => handleMenu()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  )
}

export default Navbar
