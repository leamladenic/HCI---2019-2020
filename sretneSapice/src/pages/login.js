import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/login.css"
import Image from "gatsby-image"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout, handleLogin } from "../services/auth"

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
                  method="post"
                  onSubmit={event => {
                    this.handleSubmit(event)
                    navigate(`/`)
                  }}
                >
                  <label>
                    Korisničko ime:
                    <input
                      type="text"
                      name="username"
                      onChange={this.handleUpdate}
                    />
                  </label>
                  <label>
                    Lozinka:
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleUpdate}
                    />
                  </label>
                  <input type="submit" value="Log In" />
                </form>
              </div>
              <div className="remember-login"></div>
              <div className="login-register"></div>
              <div className="login-buttons"></div>
            </div>
          </div>
        )}
      />
    )
  }
}
