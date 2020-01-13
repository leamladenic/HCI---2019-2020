import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "./animalCard.min.css"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

export default function AdoptDog({ product }) {
  let age = product.age

  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body ">
          <div className="card-text">
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
            >
              <Button className="btn mt3 btn-animal" variant="outline-success">
                Upoznaj me!
              </Button>
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
