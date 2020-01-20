import React from "react"

import { FaFacebookSquare, FaEnvelope } from "react-icons/fa"

import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"

import logo from "../images/logo.png"
import "../components/login_mobile.min.css"

export default class LoginMobile extends React.Component {
  state = {
    username: ``,
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }
    return (
      <div class="login-active-container">
        <div class="login-active-background">
          <div class="login-active-background-overlay">
            <div class="login-active-elements">
              <img class="login-active-logo-image" src={logo} alt="logo" />
              <div class="login-active-form">
                <form
                  className="my-login-form"
                  method="post"
                  onSubmit={event => {
                    this.handleSubmit(event)
                    navigate(`/`)
                  }}
                >
                  <div className="top-form-div">
                    <label className="login-form-text">
                      <p className="login-form-text-name">Korisničko ime:</p>
                      <input
                        type="text"
                        name="username"
                        onChange={this.handleUpdate}
                        className="login-form-field-mobile"
                      />
                    </label>
                    <label className="login-form-text">
                      <p className="login-form-text-password">Lozinka:</p>
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleUpdate}
                        className="login-form-field-mobile"
                      />
                    </label>
                    <div className="container-remember">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        Zapamti moju prijavu
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <a href="/" class="login-active-button">
                Prijavi se
              </a>

              <div class="login-active-button-options">
                <a href="/" class="login-active-button-full">
                  <FaFacebookSquare className="button-icon-active" />
                  Prijavi se putem Facebooka
                </a>
                <a href="/" class="login-active-button-full">
                  <FaEnvelope className="button-icon-active" />
                  Prijavi se putem Gmaila
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
