import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "../components/filter.min.css"
import { Link } from "gatsby"
import "./productCard.min.css"

export default function Product({ product }) {
  console.log(product.animalCategory)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card {product.animalCategory}">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body">
          <div
            className="priceButton"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="priceProduct">
              <p className="product-title">{product.title}</p>
              <h3 style={{ paddingRight: "20px", marginTop: "-13px" }}>
                {product.price} kn{" "}
              </h3>
            </div>

            <div className="buttonProduct">
              {" "}
              <Link
                to={`/${product.slug}`}
                product={product}
                state={{
                  modal: true,
                }}
              >
                <Button
                  className="btn mt3 btn-product"
                  variant="outline-success"
                >
                  Pogledaj
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
