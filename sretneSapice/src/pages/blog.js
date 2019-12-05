import React from "react"
import Layout from "../components/layout"
import "../components/shop.css"

import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Udomi mačku" />
      <div className="main-div">
        <div className="left-div">
          <div className="navigation-mark">
            <h1
              style={{
                color: "white",
                paddingTop: "5px",
                fontSize: "43px",
              }}
            >
              Blog
            </h1>
          </div>
          <div className="filter">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                padding: "18px",
                marginBottom: "-10px",
              }}
            >
              Filteri
            </p>
            <label>
              <input type="text"></input>
            </label>
          </div>
        </div>

        <div className="right-div"></div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    blog: allContentfulBlogArticles {
      edges {
        node {
          article {
            article
          }
          date(formatString: "MMMM-D-YYYY")
          image {
            fluid(maxHeight: 1000) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          title
        }
      }
    }
  }
`
