import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import "../components/index.css"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { FaDog, FaCat } from "react-icons/fa"
import { TiArrowLeftOutline } from "react-icons/ti"
import Carousel from "../components/carousel.js"
import { getUser, isLoggedIn, logout } from "../services/auth"

export const query = graphql`
  query {
    file(relativePath: { eq: "big_hero3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    products: file(relativePath: { eq: "big_hero4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    animals: file(relativePath: { eq: "big_hero7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="big-hero-photo-div">
        <Image
          fluid={data.file.childImageSharp.fluid}
          className="big-hero-photo"
        />
        <span className="text-over-big-image">
          Hello {isLoggedIn() ? getUser().name : ""}!
        </span>
      </div>
      <div className="big-quote">
        <p className="big-quote-text">Upoznaj me. Spasi me. Usreći me!</p>
      </div>

      <div className="adopt-animal">
        <Image
          fluid={data.animals.childImageSharp.fluid}
          className="big-hero-photo"
        />
        <p className="over-image-text">Udomi ljubimca</p>
      </div>
      <div className="choose-animal">
        {" "}
        <Link to="/dog/">
          <div className="dog-animal">
            <div className="div-dog-icon">
              {" "}
              <TiArrowLeftOutline className="button-click-arrow" size={130} />
              <FaDog className="dog-icon" size={130} />
            </div>
          </div>
        </Link>
        <div class="vl"></div>
        <Link to="/cat/">
          {" "}
          <div className="cat-animal">
            <div className="div-cat-icon">
              {" "}
              <FaCat className="cat-icon" size={130} />
              <TiArrowLeftOutline
                className="cat-arrow button-click-arrow"
                size={130}
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="choose-product">
        <Image
          fluid={data.products.childImageSharp.fluid}
          className="big-hero-photo product-hero"
        />
        <p className="over-image-text">Naši proizvodi</p>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="more-products">
        <Link to="/shop/">
          <button className="more-products-text">
            <span>Još proizvoda &nbsp;</span>
          </button>
        </Link>
      </div>
      <div className="div-second-quote">
        <div className="second-quote">
          <p className="second-quote-text">
            “Pas je jedino biće na zemlji koje te voli više nego što ti voliš
            sebe.”
          </p>
          <p className="author-of-quote"> - Josh Billings</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
