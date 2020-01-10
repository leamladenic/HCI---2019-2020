import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/login.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

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

export default function login() {
  return (
    <StaticQuery
      query={big_photo}
      render={data => {
        return (
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
                <div className="login-title">PRIJAVA</div>
              </div>

              <div className="login-form"></div>
              <div className="remember-login"></div>
              <div className="login-register"></div>
              <div className="login-buttons"></div>
            </div>
          </div>
        )
      }}
    />
  )
}
