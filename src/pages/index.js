import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header';

const IndexPage = () => (
<div>
  <Header />
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Saatvik Arya</h1>
      <p>Welcome</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
</div>
)

export default IndexPage
