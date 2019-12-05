import React, { lazy } from "react"
import { Link, withAssetPrefix } from "gatsby"

import Layout from "../components/layout"
import "../components/filter.css"

import SEO from "../components/seo"

class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      catFilterActive: true,
      dogFilterActive: true,
    }
  }

  handlDogButtonClick = () => {
    this.setState({ dogFilterActive: !this.state.dogFilterActive })
  }

  handlCatButtonClick = () => {
    this.setState({ catFilterActive: !this.state.catFilterActive })
  }

  render() {
    const btn_class_cat = this.state.catFilterActive
      ? "cat-shop-active"
      : "cat-shop"
    const btn_class_dog = this.state.dogFilterActive
      ? "dog-shop-active"
      : "dog-shop"
    return (
      <div>
        <div className="filter-space">
          <div className="filter-buttons">
            <button
              className={btn_class_dog}
              onClick={this.handlDogButtonClick}
            >
              PSI
            </button>

            <button
              className={btn_class_cat}
              onClick={this.handlCatButtonClick}
            >
              MAČKE
            </button>
          </div>

          <p
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              marginBottom: "10px",
            }}
          >
            Kategorija
          </p>
          <div className="category-filter">
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Hrana
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Igračke
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Sredstva za dlaku
            </label>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Povodci
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Modni dodaci
            </label>
          </div>
          <p
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Cijena
          </p>
          <div className="price-filter">
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              &lt; 30 kn
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              30 - 50 kn
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              50 - 100 kn
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              100 - 150 kn
            </label>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              150 - 200 kn
            </label>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              &gt; 200 kn
            </label>
          </div>
          <p
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Namjena
          </p>
          <div className="purpose-filter">
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Junior
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Adult
            </label>

            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Senior
            </label>
          </div>
          <button className="cancel">PONIŠTI</button>
          <button className="search">PRETRAŽI</button>
        </div>
      </div>
    )
  }
}

export default Filter
