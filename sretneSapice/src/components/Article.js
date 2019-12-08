import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"

export default function Article({ product }) {
  return (
    <div
      className="articlesCards"
      style={{
        margin: "10px",
      }}
    >
      <div
        className="card"
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Img
          fluid={product.image.fluid}
          className="card-img"
          style={{ minHeight: "280px", maxHeight: "281px", maxWidth: "280px" }}
        />
        <div className="card-body text-left" style={{ maxHeight: "120px" }}>
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
                {product.title}
              </h3>
              <p
                style={{
                  paddingRight: "20px",
                  color: "#7e7e7e",
                  marginTop: "-10px",
                  fontSize: "20px",
                }}
              >
                {product.smallText.smallText}
              </p>
            </div>
            <Button
              className="btn mt3"
              style={{
                backgroundColor: "#fc8f9b",
                color: "white",
                outlineColor: "#fc8f9b",
                minHeight: "60px",
                maxHeight: "61px",
                minWidth: "200px",
                marginTop: "180px",
              }}
              variant="outline-success"
            >
              Nastavi čitati!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
