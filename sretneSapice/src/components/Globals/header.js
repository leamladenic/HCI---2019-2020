import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo_header.png"
import "./header.css"

import Menu from "./menu"
import { FaCartArrowDown } from "react-icons/fa"

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-sm ">
        <div>
          <Menu />
        </div>
        <Link>
          <img className="logo-image" id="logo" src={logo}></img>{" "}
        </Link>

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
            <button
              className="login-button"
              type="button"
              focus={{
                outline: "none !important",
              }}
            >
              PRIJAVA
            </button>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        ></button>
      </header>
    )
  }
}
