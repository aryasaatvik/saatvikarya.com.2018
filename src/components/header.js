import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/about"><button>About</button></Link>
      <Link to="/portfolio"><button>Portfolio</button></Link>
      <Link to="/resume"><button>Resume</button></Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
