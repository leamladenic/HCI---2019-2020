import React from "react"

import Layout from "../components/layout"
import "../components/shop.min.css"
import Filter from "../components/animalFilter"
import AdoptDogs from "../components/AdoptDogs"
import SEO from "../components/seo"

const ShopPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Udomi psa" />
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

        <div className="right-div">
          <AdoptDogs />
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage
