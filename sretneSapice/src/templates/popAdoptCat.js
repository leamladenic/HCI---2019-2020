import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const popAdoptCat = ({ product }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>Close</Link>
        ) : (
          <header>
            <h1>Website Title</h1>
          </header>
        )}

        <h2>{product.name}</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default popAdoptCat

export const query = graphql`
  query($slug: String!) {
    contentfulCats(slug: { eq: $slug }) {
      age
      breed
      birthday
      vet {
        vet
        json
      }
      chip
      gender
      image {
        fluid {
          src
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      name
      slug
    }
  }
`
