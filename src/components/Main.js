import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
  className="close"
  onClick={() => {
    this.props.onCloseArticle()
  }}
  />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I'm an exceptional communicator and problem solver experienced with the uncertainty of life, passionate about meaningful endeavours that bring real impact to people. Currently learning more about cybersecurity, machine learning, and software engineering.
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3><a href={"https://github.com/TEAMMATES/teammates"} target="_blank" rel="noopener noreferrer">TEAMMATES</a></h3>
          <p>
            Collaborator for an award winning peer review feedback system utilised by students and educators all over the globe. Primarily involved in testing and security.
          </p>
          <h3><a href={"https://zaproxy.org"} target="_blank" rel="noopener noreferrer">OWASP Zed Attack Proxy</a></h3>
          <p>
            Contributor to the world’s most popular open source web security tool used actively by penetration testers and security specialists worldwide.
          </p>
          <h3>CCRT Case Management System</h3>
          <p>
            Lead developer and project manager for the Cybercrime Response Team Case Management System deployed to all six land divisions of the Singapore Police Force.
          </p>
          {close}
        </article>

        <article
          id="exp"
          className={`${this.props.article === 'exp' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <h3>National University of Singapore</h3>
          <p>
            Bachelor's in Computing with Honours, Computer Science. Enrolled in the University Scholars Programme. Employed as a Teaching Assistant in the School of Computing and as a Residential Assistant in Cinnamon College.
          </p>
          <h3>Singapore Police Force</h3>
          <p>
            Employed by the Criminal Investigation Department of the SPF under the Technology Crime Division as a digital forensics specialist. I doubled up as a devOps engineer and web developer due to my abilities in programming, which meant that I ended up leading various tech projects for both my home department as well as the then newly established Cybercrime Command.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/ahmed-bahajjaj"
                rel="noopener noreferrer"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/madanalogy"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/madanalogy"
                 target="_blank" rel="noopener noreferrer" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/madanalogy"
                 target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/madanalogy"
                 target="_blank" rel="noopener noreferrer" className="icon fa-telegram">
                <span className="label">Telegram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:ahmed@madanalogy.dev"
                className="icon fa-envelope"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
