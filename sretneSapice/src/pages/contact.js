import React from "react"
import { graphql, withAssetPrefix } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import "../components/contact.min.css"
import { MdPhoneInTalk } from "react-icons/md"
import { TiLocation } from "react-icons/ti"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "cat_big.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    map: file(relativePath: { eq: "location.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />
    <Image
      fluid={data.file.childImageSharp.fluid}
      style={{ postition: "block", zIndex: "-10" }}
    />

    <div className="contact-container">
      <div className="contact-form">
        <h1 className="contact-label">Kontakt</h1>
        <form
          className="my-contact-form"
          method="post"
          action="https://formspree.io/moqjolak"
        >
          <label className="form-item-contact">
            Ime i prezime
            <input type="text" name="name" id="name" />
          </label>
          <label className="form-item-contact">
            E-mail
            <input type="email" name="_replyto" id="email" />
          </label>
          <label className="form-item-contact">
            Predmet
            <input type="text" name="subject" id="subject" />
          </label>
          <label className="form-item-contact">
            Poruka
            <textarea name="message" id="message" rows="8" />
          </label>
          <div className="buttons-form-contact">
            <button type="submit" className="submit-contact-button">
              Send
            </button>
            <input
              type="reset"
              className="reset-contact-number"
              value="Clear"
            />
          </div>
        </form>
      </div>
      <div className="contact-map">
        <div className="contact-img-div">
          <Image
            className="contact-img"
            fluid={data.map.childImageSharp.fluid}
          />
        </div>
        <div className="info-contact">
          <div style={{ display: "flex" }}>
            <MdPhoneInTalk className="icon-contact" size={50} />
            <p className="text-contact">0915675324</p>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <TiLocation className="icon-contact" size={50} />
            <p className="text-contact">Kozjačka ul. 16, Solin</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
