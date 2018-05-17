import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="site-header" role="banner">
    <div className="wrapper">
      <div className="header-inner">
        <a
          className="site-title"
          rel="author"
          href="/"
          title="Design Systems Repo"
        >
          <h1 style={{ color: 'white' }}>FOUNDER CHECKLISTS</h1>
        </a>
        <button
          className="pull lines-button"
          type="button"
          role="button"
          aria-label="Toggle Navigation"
        >
          <span className="lines" />
        </button>
      </div>
      <nav className="responsive-nav">
        <ul className="nav">
          <li>
            <Link activeClassName="active" to="/" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/categories/" title="Categories">
              Categories
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about/" title="About">
              About
            </Link>
          </li>
          <li>
            <a
              className="submit"
              href="https://jad8.typeform.com/to/XnIDFZ"
              target="_blank"
              title="Submit a Resource"
            >
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <circle cx="12" cy="12" r="12" fill="#73FFE1" />
                  <polygon
                    fill="#000"
                    fillRule="nonzero"
                    points="13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
