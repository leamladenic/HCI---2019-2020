import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AdoptCat from "./AdoptDog"

const getProducts = graphql`
  {
    dogs: allContentfulDogs {
      edges {
        node {
          age
          gender
          name
          size
          breed
          image {
            fluid {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function AdoptDogs() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <div className="row">
                {data.dogs.edges.map(({ node: dog }) => {
                  return <AdoptCat key={dog.id} product={dog} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
