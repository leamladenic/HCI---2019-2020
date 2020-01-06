import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "../components/filter.css"

export default function Product({ product }) {
  console.log(product.animalCategory)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card {product.animalCategory}">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body">
          <p className="product-title">{product.title}</p>
          <div
            className="priceButton"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ paddingRight: "20px", marginTop: "-13px" }}>
              {product.price} kn{" "}
            </h3>
            <Button
              className="btn mt3 btn-animal"
              variant="outline-success"
              style={{ marginTop: "-15px" }}
            >
              Dodaj u košaricu
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
