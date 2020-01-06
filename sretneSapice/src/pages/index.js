import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const IndexPage = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
