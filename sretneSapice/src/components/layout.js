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
      <div
        className="quote"
        style={{
          fontSize: "22px",
          fontStyle: "italic",
          paddingTop: "25px",
          marginBottom: "-15px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        "Koliko god da ste siromašni, ukoliko imate psa – vi ste zapravo
        bogati."
      </div>
      <div
        className="author"
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          fontFamily: "Roboto, sans-serif",
          paddingTop: "15px",
          marginBottom: "-10px",
        }}
      >
        Louis Sabin
      </div>
      <div
        className="second-part"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          style={{
            height: "110px",
            paddingTop: "15px",
            paddingLeft: "10px",
          }}
        ></img>
        <div
          className="footer-links"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "40px",
            marginTop: "10px",
          }}
        >
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
