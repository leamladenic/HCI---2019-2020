import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import "./blog.min.css"
import { FaRegCalendarCheck } from "react-icons/fa"
import { IoIosArrowDropleft } from "react-icons/io"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const post = data.contentfulBlogArticles
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (data, children) => <Text>{children}</Text>,
    },
  }

  const mypost = documentToReactComponents(post.article.json, options)

  return (
    <Layout>
      <SEO title={post.title} />
      <div className="main-article-container">
        <Image fluid={post.image.fluid} className="main-article-photo" />
        <div className="above-article">
          <div>
            <Link to="/blog/">
              <button className="back-button">
                <IoIosArrowDropleft className="arrow-icon-article" size={35} />
                Natrag na blog
              </button>
            </Link>
          </div>
          <div className="date-container">
            <p className="article-date">{post.date}</p>
            <FaRegCalendarCheck className="date-icon-article" size={28} />
          </div>
        </div>

        <div className="article-main-text">
          <h1 className="article-main-title">{post.title}</h1>
          <p className="article-article">{mypost}</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogArticles(slug: { eq: $slug }) {
      article {
        article
        json
      }
      date(formatString: "DD-MM-YYYY")
      title
      slug
      image {
        fluid {
          src
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
