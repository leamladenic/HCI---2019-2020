import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h4>{product.title}</h4>
          <div
            className="priceButton"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ paddingRight: "20px", marginTop: "10px" }}>
              {product.price} kn{" "}
            </h3>
            <Button
              className="btn mt3"
              style={{
                backgroundColor: "#fc8f9b",
                color: "white",
                outlineColor: "#fc8f9b",
                maxHeight: "60px",
              }}
              variant="outline-success"
            >
              Dodaj u košaricu
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
