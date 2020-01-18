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
          slug
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
          <section className="main-container-animal">
            <div className="container-padding">
              <div className="container-row">
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
