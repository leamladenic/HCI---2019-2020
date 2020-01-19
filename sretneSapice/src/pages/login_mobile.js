import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logo from "../images/logo_header.png"
import Image from "gatsby-image"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"
import fb from "../images/fb.png"
import gmail from "../images/gmail.png"

import "../components/login_mobile.css"

export const big_photo = graphql`
  query {
    file(relativePath: { eq: "login_hero_pink.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

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
      <StaticQuery
        query={big_photo}
        render={data => (
          <div className="login-container-mobile">
            <div class="login-background-mobile">
              <div class="login-background-overlay-mobile-white">
                <img class="logo-image-mobile" src={logo} alt="logo" />
              </div>
            </div>
            <div className="login-form-container">
              <div className="login-div-title">
                {" "}
                <p className="login-title">PRIJAVA</p>
              </div>

              <div className="login-form">
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
                      Korisničko ime:
                      <input
                        type="text"
                        name="username"
                        onChange={this.handleUpdate}
                        className="login-form-field-mobile"
                      />
                    </label>
                    <label className="login-form-text">
                      Lozinka:
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
                  <div className="div-login-button">
                    <Link to="/">
                      <button className="my-login-button-exit">Odustani</button>
                    </Link>
                    <input
                      className="my-login-button"
                      type="submit"
                      value="Prijavi se"
                    />
                  </div>
                </form>
              </div>

              <div className="login-register">
                <p className="p-login">Nemaš račun?</p>
                <button className="login-register-button">
                  {" "}
                  Registriraj se!
                </button>
              </div>
              <div className="out-login-buttons">
                <button className="login-fb-button-mobile">
                  <img className="fb-image" id="logo" src={fb}></img>
                  <p className="fb-login-text">
                    {" "}
                    Prijavi se putem Facebook računa!
                  </p>
                </button>
                <button className="login-gmail-button-mobile">
                  <img className="gmail-image" id="logo" src={gmail}></img>
                  Prijavi se putem Google računa!
                </button>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}
