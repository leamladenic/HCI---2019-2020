import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "./article.css"

export default function Article({ product }) {
  return (
    <div className="articlesCards">
      <div className="card-article">
        <Img
          fluid={product.image.fluid}
          className="card-img card-image-article"
        />
        <div className="card-body text-left card-text-article">
          <div className="card-text text-article">
            <div className="article-button">
              <h3 className="article-title">{product.title}</h3>
              <p className="article-smalltext">{product.smallText.smallText}</p>
            </div>

            <Link key={product.id} to={`/${product.slug}`} state={product}>
              <Button
                className="btn mt3 article-button-mod"
                variant="outline-success"
              >
                Nastavi čitati!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
