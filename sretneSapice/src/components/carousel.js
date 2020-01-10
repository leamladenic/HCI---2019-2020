import { StaticQuery, graphql } from "gatsby"
import ItemsCarousel from "react-items-carousel"
import React, { Component, useState } from "react"
import "../components/index.css"
import { Link } from "gatsby"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"
import Image from "gatsby-image"

export const myProducts = graphql`
  {
    products: allContentfulMyProducts {
      edges {
        node {
          animalCategory
          category
          title
          slug
          price
          image {
            fluid(maxHeight: 500) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function AdoptCats() {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <StaticQuery
      query={myProducts}
      render={data => {
        return (
          <div className="main-carousel" style={{ padding: `50px` }}>
            <ItemsCarousel
              infiniteLoop={true}
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={4}
              gutter={20}
              leftChevron={
                <button className="arrow-carousel">
                  <IoMdArrowDropleft />
                </button>
              }
              rightChevron={
                <button className="arrow-carousel">
                  <IoMdArrowDropright />
                </button>
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {data.products.edges.map(({ node: product }) => {
                return (
                  <div key={product.id}>
                    <div style={{ height: 320, background: "white" }}>
                      <div className="carousel-card">
                        <div className="carousel-card-image">
                          <Image
                            fluid={product.image.fluid}
                            className="carousel-card-image-image"
                          />
                        </div>
                        <div className="card-bottom">
                          {" "}
                          <div className="carousel-card-info">
                            <p className="price-label-carousel">CIJENA:</p>
                            <p className="price-carousel">
                              {product.price + "kn"}
                            </p>
                          </div>
                          <div className="carousel-card-button">
                            <Link
                              to={`/${product.slug}`}
                              product={product}
                              state={{
                                modal: true,
                              }}
                            >
                              <button className="buy-carousel">Pogledaj</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ItemsCarousel>
          </div>
        )
      }}
    />
  )
}
