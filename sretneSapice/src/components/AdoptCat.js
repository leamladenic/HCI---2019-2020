import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"

export default function AdoptCat({ product }) {
  let age = product.age

  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img
          fluid={product.image.fluid}
          className="card-img-top"
          style={{ minHeight: "300px", maxHeight: "301px" }}
        />
        <div className="card-body text-center" style={{ maxHeight: "120px" }}>
          <div
            className="card-text"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              className="priceButton"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <h3 style={{ marginBottom: "20px", fontSize: "30px" }}>
                {product.name}
              </h3>
              <p
                style={{
                  paddingRight: "20px",
                  color: "#7e7e7e",
                  marginTop: "-10px",
                  fontSize: "20px",
                }}
              >
                {age}
              </p>
            </div>
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
              Upoznaj me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
