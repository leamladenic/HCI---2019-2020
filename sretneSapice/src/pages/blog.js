import React from "react"
import Layout from "../components/layout"
import "../components/shop.css"
import Article from "../components/Article"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
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
              <div className="year-container">
                <p className="year-label">Godina</p>
                <select className="blog-date-items">
                  {data.blog.edges.map(({ node: year }) => (
                    <option key={year.date} className="year-item">
                      {year.date.substr(6, 4)}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>
        </div>

        <div
          className="right-div"
          style={{
            marginTop: "-33px",
          }}
        >
          <section className="py-5">
            <div className="container">
              <div className="row">
                {data.blog.edges.map(({ node: article }) => {
                  return <Article key={article.id} product={article} />
                })}
              </div>
            </div>
          </section>
        </div>
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
          date(formatString: "MM-DD-YYYY")
          image {
            fluid {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slug
          title
          smallText {
            smallText
          }
        }
      }
    }
  }
`
