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
        </div>
      </div>
    )
  }
}

export default Filter
