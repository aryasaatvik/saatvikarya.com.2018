import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="30"/></Link>
      <Link to="/resume">Resume</Link>
    </div>
  </div>
)

export default Header
