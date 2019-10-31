import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo_header.png"
import izbornik from "../../images/izbornik.png"
import { FaCartArrowDown, FaRegBell } from "react-icons/fa"
import opensans from "../../fonts/OpenSans.ttf"

export default class navBar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }

  navbarHandler = () => {
    console.log("Heloo")
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm "
        style={{ backgroundColor: "rgb(252, 143, 155)", maxHeight: "80px" }}
      >
        <Link to="/" className="navbar-brand"></Link>
        <img
          src={izbornik}
          style={{ height: "45px", marginTop: "30px", marginLeft: "-20px" }}
        ></img>
        <img
          src={logo}
          style={{
            height: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
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
              fontFamily: { opensans },
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
      </nav>
    )
  }
}
