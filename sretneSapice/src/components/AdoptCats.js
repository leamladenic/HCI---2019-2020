import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AdoptCat from "./AdoptCat"

const getProducts = graphql`
  {
    cats: allContentfulCats {
      edges {
        node {
          age
          breed
          gender
          name
          size
          slug
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
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="main-container-animal">
            <div className="container-padding">
              <div className="container-row">
                {data.cats.edges.map(({ node: cat }) => {
                  return <AdoptCat key={cat.id} product={cat} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
