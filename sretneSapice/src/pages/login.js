import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/login.min.css"
import Image from "gatsby-image"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"
import fb from "../images/fb.png"
import gmail from "../images/gmail.png"

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

export default class login extends React.Component {
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
            <div className="login-image-container">
              <Image
                fluid={data.file.childImageSharp.fluid}
                className="login-image"
              />
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
                <button className="login-fb-button">
                  <img className="fb-image" id="logo" src={fb}></img>
                  <p className="fb-login-text">
                    {" "}
                    Prijavi se putem Facebook računa!
                  </p>
                </button>
                <button className="login-gmail-button">
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
