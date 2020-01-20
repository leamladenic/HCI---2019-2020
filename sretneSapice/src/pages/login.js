import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/login.min.css"
import Image from "gatsby-image"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"
import SEO from "../components/seo"
import Media from "react-media"
import LoginDesktop from "./login_desktop"
import LoginMobileFirst from "./login-mobile-first.js"

export default class login extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Prijava" />
        <Media queries={{ small: { maxWidth: 970 } }}>
          {matches => (matches.small ? <LoginMobileFirst /> : <LoginDesktop />)}
        </Media>
      </div>
    )
  }
}
