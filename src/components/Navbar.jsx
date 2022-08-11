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
  const [isHovering, setIsHovering] = useState(false)
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

  const handleMouseOver = (item) => {
    setIsHovering(item)
  }

  const handleMouseOut = () => {
    setIsHovering(null)
  }

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: faHome,
    },
    {
      name: 'About',
      path: '/about',
      icon: faUser,
    },
    {
      name: 'My Work',
      path: '/portfolio',
      icon: faSuitcase,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: faEnvelope,
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
              to={item.path}
              onClick={() => handleNavLink()}
              onMouseOver={() => handleMouseOver(item.name)}
              onMouseOut={handleMouseOut}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={isHovering === item.name ? { display: 'none' } : null}
              />
              <div
                className="name"
                style={isHovering === item.name ? null : { display: 'none' }}
              >
                {item.name}
              </div>
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
