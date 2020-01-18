import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import "../components/filter.min.css"
import { Link } from "gatsby"
import "./productCard.min.css"

export default function Product({ product }) {
  console.log(product.animalCategory)
  return (
    <div className="container-column">
      <div className="card {product.animalCategory}">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body card-body-animal">
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
              <h3 style={{ paddingRight: "20px", margin: "0" }}>
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
                <button className="btn-product">Pogledaj</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
