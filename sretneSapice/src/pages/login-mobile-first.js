import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logo from "../images/logo_header.png"
import Image from "gatsby-image"
import { Link, navigate } from "gatsby"

import "../components/login_mobile.css"

export default class LoginMobileFirst extends React.Component {
  render() {
    return (
      <div>
        <div class="login-container-mobile">
          <div class="login-background-mobile">
            <div class="login-background-overlay-mobile">
              <img class="logo-image-mobile" src={logo} alt="logo" />
              <div className="first-buttons">
                <Link to="/login_mobile">
                  <button className="first-button">Prijavi se!</button>
                </Link>
                <button className="first-button">Registriraj se!</button>
                <Link to="/">
                  <button className="first-button">Odustani</button>
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    )
  }
}
