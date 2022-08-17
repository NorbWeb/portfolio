import { Routes, Route } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Authentification/Dashboard'
import Home from './components/Home'
import Main from './components/Main'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
