import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo_header.png"

import Menu from "./menu"
import { FaCartArrowDown } from "react-icons/fa"

export default class Header extends Component {
  render() {
    return (
      <header
        className="navbar navbar-expand-sm "
        style={{
          backgroundColor: "#FC8F9B",
          maxHeight: "80px",
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <div>
          <Menu />
        </div>
        <Link>
          <img
            id="logo"
            src={logo}
            style={{
              height: "75px",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "28px",
              justifyContent: "center",
            }}
          ></img>{" "}
        </Link>

        <div
          className="header-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="cart">
            <button
              style={{
                overflow: "visible",
                cursor: "pointer",
                margin: "20px",
                color: "white",
                marginLeft: "-20px",
                backgroundColor: "#FC8F9B",
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
                border: "none",
                outline: "none",
              }}
              focus={{
                outline: "none !important",
              }}
            >
              <FaCartArrowDown size={30} />
            </button>
          </div>
          <div id="login-button">
            <button
              type="button"
              style={{
                height: "80px",
                marginRight: "-20px",
                backgroundColor: "#E77F8A",
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                display: "inline-block",
                fontFamily: "'Roboto', sans-serif",
                fontStyle: "normal",
                fontSize: "16px",
                outline: "none",
              }}
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
