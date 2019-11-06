import React from "react"
import { Link, withAssetPrefix } from "gatsby"

import Layout from "../components/layout"
import "../components/shop.css"

import SEO from "../components/seo"

class ShopPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Trgovina" />
        <div className="main-div">
          <div className="left-div">
            <div className="navigation-mark">
              <h1
                style={{
                  color: "white",
                  paddingTop: "5px",
                  fontSize: "48px",
                }}
              >
                Trgovina
              </h1>
            </div>
            <div className="filter">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  padding: "22px",
                  marginBottom: "-10px",
                }}
              >
                Filteri
              </p>
              <div className="filter-buttons">
                <button id="dog-shop" className="animal-filter">
                  PSI
                </button>
                <button id="cat-shop" className="animal-filter">
                  MAČKE
                </button>
              </div>
            </div>
            <div
              className="text-shop"
              style={{
                position: "relative",
                color: "#FC8F9B",
                textAlign: "center",
                width: "280px",
                fontSize: "19px",
                marginTop: "10px",
              }}
            >
              Sav novac ide za potrebe štićenika azila.
            </div>
          </div>

          <div className="right-div">
            <div className="cards"></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ShopPage
