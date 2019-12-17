import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "./animalCard.css"

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
            <Button className="btn mt3 btn-animal" variant="outline-success">
              Upoznaj me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
