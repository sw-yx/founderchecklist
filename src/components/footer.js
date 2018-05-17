import React from 'react'
import Link from 'gatsby-link'

const footer = ({ siteTitle }) => (
  <footer className="footer-wrap">
    {' '}
    <span className="footer-border" />{' '}
    <div className="footer">
      {' '}
      <span>
        Made with 💜 by{' '}
        <a href="https://twitter.com/swyx" title="My Twitter">
          swyx
        </a>.
      </span>{' '}
      {/* <span className="coffee">
        <a target="_blank" href="https://cash.me/$jad/5">
          Buy me a coffee
        </a>{' '}
        ☕️
      </span>{' '} */}
    </div>{' '}
  </footer>
)

export default footer
