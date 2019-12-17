/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"
import logo from "../images/logo_bijeli.png"

import Header from "./Globals/header"

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <footer
      style={{
        minHeight: "150px",
        backgroundColor: "#ffb5b5",
        position: "fixed",
        left: "0px",
        bottom: "0px",
        width: "100%",
        marginBottom: "0px",
        color: "white",
        textAlign: "center",
        position: "inline",
        paddingBottom: "20px",
      }}
    >
      <img
        src={logo}
        style={{
          height: "60px",
          paddingTop: "15px",
        }}
      ></img>
      <div
        className="quote"
        style={{
          fontSize: "22px",
          fontStyle: "italic",
          marginTop: "-15px",
        }}
      >
        Koliko god da ste siromašni, ukoliko imate psa – vi ste zapravo bogati.
      </div>
      <div
        className="author"
        style={{
          fontSize: "13px",
          fontStyle: "italic",

          paddingTop: "15px",
        }}
      >
        Louis Sabin
      </div>
    </footer>
  </div>
)

Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout
