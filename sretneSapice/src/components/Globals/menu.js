import React from "react"
import { Motion, spring, presets } from "react-motion"
import { GoSearch } from "react-icons/go"
import { GoTriangleUp } from "react-icons/go"
import "./menu.css"
import { StaticQuery, graphql } from "gatsby"

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarOpen: false,
    }
  }

  onEnter = () => {
    var input = document.getElementById("myInput")

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault()

        document.getElementById("myBtn").click()
      }
    })
  }

  handleMenuButtonClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { isSidebarOpen } = this.state
    const style = {
      overflow: "visible",
      cursor: "pointer",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      color: "white",
      height: "35px",
      marginLeft: "-20px",
    }

    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                menuItems {
                  link
                  text
                }
              }
            }
          }
        `}
        render={data => (
          <div className="container">
            <div className="menu-button" onClick={this.handleMenuButtonClick}>
              <svg
                viewBox="0 0 96 96"
                height="1em"
                onClick={this.handleMenuButtonClick.bind(this)}
                style={style}
              >
                <Motion
                  style={{
                    x: spring(this.state.isSidebarOpen ? 1 : 0, presets.wobbly),
                    y: spring(this.state.isSidebarOpen ? 0 : 1, presets.wobbly),
                  }}
                >
                  {({ x, y }) => (
                    <g
                      id="navicon"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line
                        transform={`translate(${x * 12}, ${x * -7}) rotate(${x *
                          45}, 7, 26)`}
                        x1="7"
                        y1="26"
                        x2="89"
                        y2="26"
                      />
                      <line
                        transform={`translate(${x * 12}, ${x * 7}) rotate(${x *
                          -45}, 7, 70)`}
                        x1="7"
                        y1="70"
                        x2="89"
                        y2="70"
                      />
                      <line
                        transform={`translate(${x * -96})`}
                        opacity={y}
                        x1="7"
                        y1="48"
                        x2="89"
                        y2="48"
                      />
                    </g>
                  )}
                </Motion>
              </svg>
            </div>

            <nav className={`nav ${isSidebarOpen ? "show" : "nav"}`}>
              <GoTriangleUp className="triangle" size={70} />

              {data && (
                <ul className="menu-items">
                  {data.site.siteMetadata.menuItems.map(item => (
                    <li key={item.text} className="menu-list">
                      <a href={item.link} className="menu-link">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <div className="search">
                <input
                  className="search-field"
                  type="text"
                  placeholder="Unesite tekst..."
                ></input>
                <div className="v1"></div>
                <button className="search-button" type="submit">
                  <GoSearch
                    size={20}
                    style={{
                      marginLeft: "-20px",
                    }}
                  />
                </button>
              </div>
            </nav>
          </div>
        )}
      />
    )
  }
}
export default Menu
