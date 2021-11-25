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
            <img src={pic01} alt="" width={100} />
          </span>
          <p>
            I'm an exceptional communicator and problem solver experienced with the uncertainty of life. I'm dedicated towards lifelong learning, constantly striving to grow as both an Engineer and a human being.
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
          <h2 className="major">Open Source</h2>
          <h3>
            <a href={"https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+author%3Amadanalogy"} target="_blank" rel="noopener noreferrer">TEAMMATES</a>&nbsp;
            <a
              href="https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+author%3Amadanalogy"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">TEAMMATES GitHub</span>
            </a>
          </h3>
          <p>
            Core developer and security lead for an award winning peer review feedback portal utilised by half a million students and educators all over the globe. Major contributions include API endpoint security as well as data privacy management.
          </p>
          <h3>
            <a href={"https://github.com/search?q=org%3Azaproxy+is%3APR+author%3Amadanalogy"} target="_blank" rel="noopener noreferrer">OWASP Zed Attack Proxy</a>&nbsp;
            <a
              href="https://github.com/search?q=org%3Azaproxy+is%3APR+author%3Amadanalogy"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">ZAP GitHub</span>
            </a>
          </h3>
          <p>
            Contributor to the world’s most popular open source web security tool used actively by penetration testers and security specialists worldwide.
          </p>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <h3>Open Government Products (OGP), GovTech Singapore</h3>
          <p>
            I spent the summer and fall of 2021 as a software engineer intern with OGP where I got the opportunity to work on active products being used by Singapore citizens. I spent the first half of my internship working on PaySG, leveraging on Stripe, React, and Express, to build a production ready product. I was the engineer tasked with implementing user services such as authentication and access control. The second half was spent with RedeemSG, where I launched a signup portal to be used by a million households in Singapore. I also had the opportunity to learn mobile app development with React Native.
          </p>
          <h3>Home Team Science & Technology Agency (HTX)</h3>
          <p>
            I worked for HTX in the summer of 2020 as a cloud engineer where I was tasked to come up with solutions for common problems in digital forensics. I leveraged on cloud computing to aid in data preservation tasks, developing ForensiCloud: a web platform for digital forensic specialists to automate retrieval of data from online sources. See it live: <a href="https://forensicloud.web.app">https://forensicloud.web.app</a>
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
                <span className="label">Email</span>
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
