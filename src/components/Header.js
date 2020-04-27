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
          Ex Digital Forensics Specialist, DevOps Engineer, and Web Developer.&nbsp;
          <br/>
          Computer Science Undergraduate at the National University of Singapore.&nbsp;
          <br/>
          <br/>
          <b>SITE IN DEVELOPMENT</b>. Resume available <a href={"https://drive.google.com/file/d/1c8xXFCdk6XDKWq450z9nP2vvYCcup_St/view?usp=sharing"} target="_blank" rel="noopener noreferrer">here</a>.
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
              props.onOpenArticle('work')
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
