import React, { lazy } from "react"

import "../components/filter.css"

class Filter extends React.Component {
  render() {
    return (
      <div>
        <div className="filter-space">
          <div className="filter-buttons">
            <div className="animalFilters">
              {" "}
              <div className="animalAge">
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "-15px",
                    marginBottom: "10px",
                  }}
                >
                  Starost
                </p>

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
              <label style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "-15px",
                    marginBottom: "10px",
                  }}
                >
                  Veličina
                </p>

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
              </label>
              <label style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "-15px",
                    marginBottom: "10px",
                  }}
                >
                  Spol
                </p>
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
              </label>
              <label style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "-15px",
                    marginBottom: "10px",
                  }}
                >
                  Pasmina
                </p>
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
              </label>
            </div>
          </div>

          <button className="cancel">PONIŠTI</button>
          <button className="search">PRETRAŽI</button>
        </div>
      </div>
    )
  }
}

export default Filter
