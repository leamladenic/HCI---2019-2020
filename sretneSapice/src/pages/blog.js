import React from "react"
import Layout from "../components/layout"
import "../components/shop.min.css"
import Article from "../components/Article"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.blog.edges
  let years = []
  let months = []
  posts.map(year => years.push(year.node.date.substr(6, 4)))
  posts.map(month => months.push(month.node.date.substr(0, 2)))
  let unique = [...new Set(years)]
  let unique_months = [...new Set(months)]
  unique.sort()
  unique_months.sort()

  let mymonths = []

  unique_months.forEach(monthNum => {
    switch (monthNum) {
      case "01":
        mymonths.push("siječanj")
        break
      case "02":
        mymonths.push("veljača")
        break
      case "03":
        mymonths.push("ožujak")
        break
      case "04":
        mymonths.push("travanj")
        break
      case "05":
        mymonths.push("svibanj")
        break
      case "06":
        mymonths.push("lipanj")
        break
      case "07":
        mymonths.push("srpanj")
        break
      case "08":
        mymonths.push("kolovoz")
        break
      case "09":
        mymonths.push("rujan")
        break
      case "10":
        mymonths.push("listopad")
        break
      case "11":
        mymonths.push("studeni")
        break
      case "12":
        mymonths.push("prosinac")
        break
    }
  })

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
                <select
                  className="blog-date-items"
                  onChange={e => console.log(e.target.value)}
                >
                  <option value="" disabled selected>
                    Izaberite godinu
                  </option>
                  {unique.map(year => (
                    <option key={year} className="year-item">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label>
              <div className="year-container">
                <p className="year-label">Mjesec</p>
                <select className="blog-date-items">
                  <option value="" disabled selected>
                    Izaberite mjesec
                  </option>

                  {mymonths.map(month => (
                    <option key={month} className="year-item">
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            <button className="cancel">PONIŠTI</button>
            <button className="search">PRETRAŽI</button>
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
