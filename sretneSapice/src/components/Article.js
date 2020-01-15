import React from "react"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "./article.min.css"

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
          </div>
          <Link key={product.id} to={`/${product.slug}`} state={product}>
            <button className="article-button-mod">Nastavi čitati!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
