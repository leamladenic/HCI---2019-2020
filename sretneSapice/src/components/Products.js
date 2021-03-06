import React from "react"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"

export const getProducts = graphql`
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

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="main-container-animal">
            <div className="container-padding">
              <div className="container-row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
