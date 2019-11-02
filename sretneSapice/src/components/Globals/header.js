import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo_header.png"

import Menu from "./menu"

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
        }}
      >
        <div>
          <Menu />
        </div>
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
        ></img>
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
            }}
          >
            PRIJAVA
          </button>
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
