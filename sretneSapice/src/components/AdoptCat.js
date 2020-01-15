import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "./animalCard.min.css"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

export default function AdoptCat({ product }) {
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
    allContentfulCats {
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
