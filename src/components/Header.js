import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-id-card"/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ahmed Bahajjaj</h1>
        <p>
          Ex Digital Forensics Specialist and Web Developer at the Singapore Police Force.&nbsp;
          <br/>
          Computer Science Undergraduate at the National University of Singapore.&nbsp;
          <br/>
          Resume available <a href={"http://bit.ly/Ahmed-Resume"} target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Who
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            What
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('exp')
            }}
          >
            When
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Where
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
