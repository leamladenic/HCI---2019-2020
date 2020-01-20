import React from "react"

import "../components/login.min.css"

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
