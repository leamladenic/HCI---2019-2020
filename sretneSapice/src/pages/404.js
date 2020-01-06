import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({}) => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ witdh: "10px" }}>
        <h1 style={{ marginTop: "20px", marginLeft: "70px", fontSize: "50px" }}>
          FOUND NOT
        </h1>
        <p style={{ marginLeft: "70px", fontSize: "25px" }}>
          A route you hit just exist doesn&#39;t... the sadness.
        </p>
      </div>
      <div style={{ witdh: "200px !important" }}>
        <img
          src={"../../yoda.png"}
          height="400"
          width="400"
          style={{ margin: "30px", marginTop: "100px" }}
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
