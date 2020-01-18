import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { graphql } from "gatsby"
import { MdClose } from "react-icons/md"
import "./popAnimal.min.css"
import Image from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const post = data.contentfulMyProducts

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

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div className="modalWindowContainer" style={{overflow: "hidden", height: "100%"}}>
          <div className="popContainer">
            <div className="popImage">
              <Image fluid={post.image.fluid} className="popImageItem" />
            </div>
            <div className="popInfo">
              <div className="x-button">
                {modal ? (
                  <Link to={closeTo}>
                    <div className="close-link">
                      <MdClose size={50} className="close-button" />
                    </div>
                  </Link>
                ) : (
                  <header>
                    <h1>Pas</h1>
                  </header>
                )}
              </div>
              <div className="popInfoDetails">
                {" "}
                <div className="infoDetail">
                  <h3>PROIZVOD: </h3>
                  <p className="info-text">{post.title}</p>
                </div>
                <div className="infoDetail">
                  <h3>MARKA: </h3>
                  <p className="info-text">{post.brend}</p>
                </div>
                <div className="infoDetail">
                  <h3>BOJA: </h3>
                  <p className="info-text">{post.color}</p>
                </div>
                <div className="infoDetail">
                  <h3>NAMIJENJENO ZA: </h3>
                  <p className="info-text">{post.for}</p>
                </div>
                <div className="infoDivPrice">
                  <div className="infoDetailPrice">
                    <h1>CIJENA: </h1>
                    <p className="info-text-price">{post.price + "kn"}</p>
                  </div>
                  <div className="pdvContainer">
                    <p className="pdvDiv">&#x2A;uključen PDV</p>
                  </div>
                </div>
                <div className="popButtons">
                  <Link to={closeTo}>
                    <button className="cancelpop">ODUSTANI</button>
                  </Link>
                  <Link to={/adoptForm/}>
                    <button className="searchpop">KUPI</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulMyProducts(slug: { eq: $slug }) {
      brend
      for
      color
      price
      slug
      title
      image {
        fluid {
          src
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
