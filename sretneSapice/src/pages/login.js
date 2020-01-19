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
          <div>
            <SEO title="Prijava" />
            <Media queries={{ small: { maxWidth: 970 } }}>
              {matches =>
                matches.small ? <LoginMobileFirst /> : <LoginDesktop />
              }
            </Media>
          </div>
        )}
      />
    )
  }
}
