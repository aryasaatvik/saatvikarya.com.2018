import React from 'react'
import './socials.css'

const Socials = ({ siteTitle }) => (
  <div className="Socials">
    <div className="SocialsGroup">
      <a href="https://github.com/aryasaatvik/" target="_blank"><img src={require("../images/socials/github.png")}></img></a>
      <a href="https://www.linkedin.com/in/aryasaatvik/" target="_blank"><img src={require("../images/socials/linkedin.png")}></img></a>
      <a href="https://www.twitter.com/aryasaatvik/" target="_blank"><img src={require("../images/socials/twitter.png")}></img></a>
      <a href="mailto:aryasaatvik@email.com" target="_blank"><img src={require("../images/socials/email.png")}></img></a>
    </div>
  </div>
)

export default Socials
