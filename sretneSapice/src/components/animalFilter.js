import React, { lazy } from "react"
import "./input.module.css"
import "../components/filter.min.css"

class Filter extends React.Component {
  render() {
    return (
      <div>
        <div className="filter-space">
          <div className="filter-buttons">
            <div className="animalFilters">
              {" "}
              <div className="animalAge">
                <p className="filter-category-name">Starost</p>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  &lt; 6 mjeseci
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>6 mjeseci - 1 godina
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>1 godina - 5 godina
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>5 godina - 10 godina
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  &gt; 10 godina
                </label>
              </div>
              <div className="filter-label">
                <p className="filter-category-name">Veličina</p>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  &lt; 20 cm
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>20 - 50 cm
                </label>

                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  &gt; 50 cm
                </label>
              </div>
              <div className="filter-label">
                <p className="filter-category-name">Spol</p>
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Mužjak
                </label>
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Ženka
                </label>
              </div>
              <div className="filter-label">
                <p className="filter-category-name">Pasmina</p>
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Čistokrvni
                </label>
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Mješanci
                </label>
              </div>
            </div>
          </div>
          <div className="animal-filter-buttons">
            <button className="cancel">PONIŠTI</button>
            <button className="search">PRETRAŽI</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter
