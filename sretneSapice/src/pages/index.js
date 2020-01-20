import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import "../components/index.min.css"
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
        <div class="big-hero-image">
          <span className="text-over-big-image">
            {isLoggedIn() ? "Dobar dan, " + getUser().name + "!" : ""}
          </span>
        </div>
        {/* <Image
          fluid={data.file.childImageSharp.fluid}
          className="big-hero-photo"
        /> */}
      </div>
      <div className="big-quote">
        <p className="big-quote-text">Upoznaj me. Spasi me. Usreći me!</p>
      </div>

      <div className="adopt-animal">
        <div className="adopt-anima-image">
          <div className="adopt-anima-image-overlay">
            <p className="over-image-text">Udomi ljubimca</p>
          </div>
        </div>
        {/* <Image
          fluid={data.animals.childImageSharp.fluid}
          className="big-hero-photo"
        /> */}
      </div>
      <div className="choose-animal">
        {" "}
        <Link to="/dog/" className="dog-url">
          <div className="dog-animal">
            <div className="div-dog-icon">
              {" "}
              <TiArrowLeftOutline className="button-click-arrow" />
              <FaDog className="dog-icon" />
            </div>
          </div>
        </Link>
        <div class="vl"></div>
        <Link to="/cat/" className="cat-url">
          {" "}
          <div className="cat-animal">
            <div className="div-cat-icon">
              {" "}
              <FaCat className="cat-icon" />
              <TiArrowLeftOutline className="cat-arrow button-click-arrow" />
            </div>
          </div>
        </Link>
      </div>

      <div className="choose-product">
        <div className="choose-product-image">
          <div className="achoose-product-overlay">
            <p className="over-image-text">Naši proizvodi</p>
          </div>
        </div>
        {/* <Image
          fluid={data.products.childImageSharp.fluid}
          className="big-hero-photo product-hero"
        /> */}
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
