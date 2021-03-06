import React, { Component } from "react";
import Navbar from "./index.js";
import NavWrapper from "./styles.js";
import Link from "next/link";

import logo from "./logo.png";



class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="Header">
          <img className="image" alt="Logo" src={logo} />
          <div className="contact">
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            (+91) 73380 40655
          </div>
        </div>
        <div className="Navbar">
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>

          <input type="checkbox" id="nav-check" />

          <ul className="nav-links">
            {this.props.links.map(({ key, href, label }) => (
              <li id="alink" key={key}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
            <li key="formli">
              <form action="/">
                <input type="text" placeholder="Search.." name="search" />
                <i className="fa fa-search" />
              </form>
            </li>
          </ul>
          <div className="mobilelogo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </NavWrapper>
    );
  }
}

export default Nav;
