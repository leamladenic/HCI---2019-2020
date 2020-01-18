/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"
import logo from "../images/logo_header.png"

import Header from "./Globals/header"

const Layout = ({ children }) => (
  <div class="main-container">
    <Header />
    {children}
    <footer className="footer-div">
      <div className="quote">
        "Koliko god da ste siromašni, ukoliko imate psa – vi ste zapravo
        bogati."
      </div>
      <div className="author" style={{}}>
        Louis Sabin
      </div>
      <div className="second-part">
        <img src={logo}></img>
        <div className="login-div-footer">
          <Link to="/login">
            <button className="login-button-footer">Prijavi se!</button>
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            O nama
          </Link>
          <Link to="/contact" className="footer-link">
            Kontakt
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  </div>
)

Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout
