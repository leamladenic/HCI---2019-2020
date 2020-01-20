import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/login_desktop.css"

import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"
import fb from "../images/fb.png"
import gmail from "../images/gmail.png"
import logo from "../images/logo_header.png"

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

export default class LoginDesktop extends React.Component {
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
          <div className="login-container">
            <div class="login-background-desktop">
              <div class="login-background-overlay-desktop">
                <img class="logo-image-desktop" src={logo} alt="logo" />
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
                        className="login-form-field"
                      />
                    </label>
                    <label className="login-form-text">
                      Lozinka:
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleUpdate}
                        className="login-form-field"
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
                  <div className="div-login-button-desktop">
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
                <button className="login-fb-button-desktop">
                  <img className="fb-image-desktop" id="logo" src={fb}></img>
                  <p className="fb-login-text-desktop">
                    {" "}
                    Prijavi se putem Facebook računa!
                  </p>
                </button>
                <button className="login-gmail-button-desktop">
                  <img
                    className="gmail-image-desktop"
                    id="logo"
                    src={gmail}
                  ></img>
                  <p className="fb-login-text-desktop">
                    Prijavi se putem Google računa!{" "}
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}
