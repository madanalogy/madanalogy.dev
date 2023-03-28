import PropTypes from 'prop-types'
import React from 'react'

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
          <p>
          I'm a user-centric developer with interests in information security and automation. I like building systems and software that help improve the lives of others. I'm always on the lookout for opportunities to learn and grow!
          </p>
          <p>
            I graduated from the National University of Singapore with a major in Computer Science whilst enriching myself in the University Scholars Programme. I spent most of my time teaching content that I genuinely enjoyed learning; which is how I figured that software engineering is for me :)
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
            <a
              href="https://teammatesv4.appspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TEAMMATES
            </a>
            &nbsp;
            <a
              href="https://github.com/TEAMMATES/teammates"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">TEAMMATES GitHub</span>
            </a>
          </h3>
          <p>
            Core developer and security lead for an award winning peer review
            feedback portal utilised by half a million students and educators
            all over the globe. Major contributions include API endpoint
            security as well as data privacy management.
          </p>
          <h3>
            <a
              href="https://www.zaproxy.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Zed Attack Proxy
            </a>
            &nbsp;
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
            Contributor to the world’s most popular open source web security
            tool used actively by penetration testers and security specialists
            worldwide.
          </p>
          <h3>
            <a
              href="https://se-education.org/learningresources/contents/testing/security-testing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security Testing (SE-EDU)
            </a>
            &nbsp;
            <a
              href="https://github.com/se-edu/learningresources"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">SE-EDU GitHub</span>
            </a>
          </h3>
          <p>
            Wrote an introduction to security testing publication for the
            Software Engineering Education (SE-EDU) open source project.
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
          <h3>Indeed Singapore</h3>
          <p>
           I worked on the Payments Unified Gateway to enable recurring credit card charges for
            Indeed clients. We leveraged on Adyen as a payments provider for our funnel via APIs.
            I also took up the opportunity to lead a Monetization initiative aimed at experimenting on freemium levers to increase
            revenue.
          </p>
          <h3>Home Team Science & Technology Agency (HTX)</h3>
          <p>
           I took some time before I graduated to help lead the development of the Cloud Evidence Portal for Digital Information Forensics.
            This involved architecting microservices via the AWS Serverless
            Application Model (SAM).
          </p>
          <h3>Open Government Products (OGP), GovTech Singapore</h3>
          <p>
            I spent the summer and fall of 2021 as a software engineer intern
            with OGP where I got the opportunity to work on active products
            being used by Singapore citizens. I spent the first half of my
            internship working on{' '}
            <a
              href="https://pay.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              PaySG
            </a>
            , leveraging on Stripe, React, and Express, to build a production
            ready product.
          </p>
          <p>
            The second half was spent with{' '}
            <a
              href="https://redeem.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              RedeemSG
            </a>
            , where I launched a signup portal to be used by a million
            households in Singapore via integration with Singpass and MyInfo. I
            also had the opportunity to deep dive into mobile app development
            with React Native for deployment on both Android and iOS.
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
              <a
                href="https://t.me/madanalogy"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-telegram"
              >
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
