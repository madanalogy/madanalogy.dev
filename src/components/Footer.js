import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy;{' '}
      <a
        href="https://github.com/madanalogy/madanalogy.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        madanalogy
      </a>
      . Design:{' '}
      <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">
        HTML5 UP
      </a>
      . Background:{' '}
      <a
        href="https://unsplash.com/@philbotha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        rel="noopener noreferrer"
      >
        Phil Botha
      </a>
      . Built with:{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
