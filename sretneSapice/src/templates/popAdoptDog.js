import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { graphql } from "gatsby"
import { MdClose } from "react-icons/md"
import "./popAnimal.css"
import Image from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const post = data.contentfulDogs

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

  const mypost = documentToReactComponents(post.vet.json, options)
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div className="modalWindowContainer">
          <div className="popContainer">
            <div className="popImage">
              <Image fluid={post.image.fluid} className="popImageItem" />
            </div>
            <div className="popInfo">
              <div>
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
                  <h3>IME: </h3>
                  <p className="info-text">{post.name}</p>
                </div>
                <div className="infoDetail">
                  <h3>PASMINA: </h3>
                  <p className="info-text">{post.breed}</p>
                </div>
                <div className="infoDetail">
                  <h3>SPOL: </h3>
                  <p className="info-text">{post.gender}</p>
                </div>
                <div className="infoDetail">
                  <h3>ROĐENDAN: </h3>
                  <p className="info-text">{post.birthday}</p>
                </div>
                <div className="infoDetail">
                  <h3>VISINA: </h3>
                  <p className="info-text">{post.size + "cm"} </p>
                </div>
                <div className="infoDetail">
                  <h3>BROJ ČIPA: </h3>
                  <p className="info-text">{post.chip}</p>
                </div>
                <div className="infoDetailVet">
                  <h3>VETERINARSKA OBRADA: </h3>
                  <p className="info-text">{mypost}</p>
                </div>
                <div className="popButtons">
                  <Link to={closeTo}>
                    <button className="cancelpop">ODUSTANI</button>
                  </Link>
                  <Link to={/adoptForm/}>
                    <button className="searchpop">UDOMI ME</button>
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
    contentfulDogs(slug: { eq: $slug }) {
      age
      breed
      birthday
      vet {
        vet
        json
      }
      chip
      gender
      image {
        fluid {
          src
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      name
      slug
      size
    }
  }
`
