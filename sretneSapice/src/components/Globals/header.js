import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import logo from "../../images/logo_header.png"
import "./header.min.css"
import { Motion, spring, presets } from "react-motion"
import { GoSearch } from "react-icons/go"
import { GoTriangleUp } from "react-icons/go"
import "./menu.min.css"
import { StaticQuery, graphql } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"
import { FaCartArrowDown } from "react-icons/fa"

export default class Header extends Component {
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
          <header className="navbar navbar-expand-sm ">
            <div class="header-menu">
              <div className="menu-button" onClick={this.handleMenuButtonClick}>
                <svg
                  className="svg-menu"
                  viewBox="0 0 96 96"
                  height="1em"
                  onClick={this.handleMenuButtonClick.bind(this)}
                >
                  <Motion
                    style={{
                      x: spring(
                        this.state.isSidebarOpen ? 1 : 0,
                        presets.wobbly
                      ),
                      y: spring(
                        this.state.isSidebarOpen ? 0 : 1,
                        presets.wobbly
                      ),
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
                          transform={`translate(${x * 12}, ${x *
                            -7}) rotate(${x * 45}, 7, 26)`}
                          x1="7"
                          y1="26"
                          x2="89"
                          y2="26"
                        />
                        <line
                          transform={`translate(${x * 12}, ${x *
                            7}) rotate(${x * -45}, 7, 70)`}
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
                        <a
                          href={item.link}
                          className="menu-link"
                          sytle={{
                            TextDecoration: "none",
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="search-menu">
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Unesite tekst..."
                  ></input>
                  <div className="v1"></div>

                  <button className="search-button" type="submit">
                    <GoSearch className="GoSearch-element" size={20} />
                  </button>
                </div>
              </nav>
            </div>

            <div class="header-link">
              <Link>
                <img className="logo-image" id="logo" src={logo}></img>{" "}
              </Link>
            </div>

            <div className="header-buttons">
              <div className="cart">
                <button
                  className="cart-button"
                  focus={{
                    outline: "none !important",
                  }}
                >
                  <FaCartArrowDown size={30} />
                </button>
              </div>
              <div id="login">
                <Link to="/login/">
                  <button
                    className="login-button"
                    type="button"
                    focus={{
                      outline: "none !important",
                    }}
                  >
                    PRIJAVA
                  </button>
                </Link>
              </div>
            </div>
          </header>
        )}
      />
    )
  }
}
