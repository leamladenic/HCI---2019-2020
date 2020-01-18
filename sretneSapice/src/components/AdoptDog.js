import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "./animalCard.min.css"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

export default function AdoptDog({ product }) {
  let age = product.age

  return (
    <div className="container-column">
      <div className="card">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body card-body-animal">
          <div className="card-text card-text-animal">
            <div className="priceButton">
              <h3 className="animal-name">{product.name}</h3>
              <p className="animal-age">{age}</p>
            </div>

            <Link
              to={`/${product.slug}`}
              product={product}
              state={{
                modal: true,
              }}
              style={{margin: `5px auto` }}
              className="animal-store-button"
            >
              <button className="btn-animal">Upoznaj me!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulDogs {
      edges {
        node {
          age
          size
          breed
          gender
          name
          slug
          image {
            fluid {
              tracedSVG
              src
            }
          }
        }
      }
    }
  }
`
