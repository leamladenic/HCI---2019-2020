import { StaticQuery, graphql } from "gatsby"
import ItemsCarousel from "react-items-carousel"
import React, { Component, useState } from "react"
import "../components/index.css"

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
          <div
            className="main-carousel"
            style={{ padding: `0 ${chevronWidth}px` }}
          >
            <ItemsCarousel
              infiniteLoop={true}
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {data.products.edges.map(({ node: product }) => {
                return (
                  <div key={product.id}>
                    <div style={{ height: 300, background: "#EEE" }}>
                      First card
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
