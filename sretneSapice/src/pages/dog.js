import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Link from "gatsby"
import Layout from "../components/layout"
import "../components/shop.css"
import Filter from "../components/animalFilter"

import SEO from "../components/seo"

const ShopPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Psi" />
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
              Udomi psa
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
            <Filter />
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
              marginBottom: "30px",
            }}
          >
            Sav novac ide za potrebe štićenika azila.
          </div>
        </div>

        <div className="right-div"></div>
      </div>
    </Layout>
  )
}

export default ShopPage
