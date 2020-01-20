import React from "react"

import logo from "../images/logo_header.png"

import "../components/login_mobile.css"

export default class LoginMobileFirst extends React.Component {
  render() {
    return (
      <div>
        <div class="login-inactive-container">
          <div class="login-inactive-background">
            <div class="login-inactive-background-overlay">
              <div class="login-inactive-elements">
                <img class="login-inactive-logo-image" src={logo} alt="logo" />
                <div class="login-inactive-buttons">
                  <a
                    href="/login_mobile"
                    class="login-inactive-button-transparent"
                  >
                    Prijavi se!
                  </a>
                  <a href="/" class="login-inactive-button-full">
                    Registriraj se!
                  </a>
                  <a
                    href="/"
                    class="login-inactive-button-full login-inactive-button-full-grey"
                  >
                    Odustani
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
