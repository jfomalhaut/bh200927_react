import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import treepic from "../../../dist/img/tree.jpg";
// import logopic from "../../../dist/img/logo.png";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav-extended  deep-orange lighten-1 ">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            SamYangFoods
            {/* <span>
              <img src={logopic}></img>
            </span> */}
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/store">점포등록</Link>
            </li>
            <li>
              <Link to="/promotion">행사등록</Link>
            </li>
            <li>
              <Link to="/order">주문하기</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={treepic} />
            </div>
            <a href="#user">
              <img className="circle" src="" />
            </a>
            <a href="#name">
              <span className="white-text name ">BuHo Jang</span>
            </a>
            <a href="#email">
              <span className="white-text email">mose23@samyangfoods.com</span>
            </a>
          </div>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/store">점포등록</Link>
        </li>
        <li>
          <Link to="/promotion">행사등록</Link>
        </li>
        <li>
          <Link to="/order">주문하기</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
