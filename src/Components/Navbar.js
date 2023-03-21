import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/Icons/logo.svg";
import { ReactComponent as Searchicon } from "../Assets/Icons/searchicon.svg";
import { ReactComponent as Accounticon } from "../Assets/Icons/accounticon.svg";
import { ReactComponent as Listicon } from "../Assets/Icons/listicon.svg";
import { ReactComponent as Carticon } from "../Assets/Icons/carticon.svg";

import "../Stylesheets/navbar.css";

function Navbar() {

    const [menu, setMenu] = useState(false)

    const hamburger = () => {
        setMenu(!menu)
    }
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-tm">
                    <div>
                        <Logo />
                    </div>
                    <div className="navbar-search">
                        <div>
                            <span>
                                <Searchicon />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for a product, category or space"
                            />
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div>
                            <Accounticon />
                            <p>My Account</p>
                        </div>
                        <div>
                            <Listicon />
                            <p>List</p>
                        </div>
                        <div>
                            <Carticon />
                            <p>CART</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-list">
                    <Link>LIGHTING Explorer</Link>
                    <Link>OFFICE</Link>
                    <Link>HOTEL</Link>
                    <Link>Home</Link>
                    <Link>All Products</Link>
                    <Link>PENDANT LIGHT</Link>
                    <Link>CHANDELIER</Link>
                    <Link>SWITCHES & SOCKETS</Link>
                    <Link>CEILING LAMP</Link>
                    <Link>WALL LAMP</Link>
                </div>
            </div>
            <div className="mobile-navbar">
                <div className="mobile-navbar-container">
                    <div>
                        <div className='hamburger-container' onClick={hamburger}>
                            <span className={`hamburger ${menu ? "hamburgerX1" : ""}`}></span>
                            <span className={`hamburger ${menu ? "hamburgerX3" : ""}`}></span>
                            <span className={`hamburger ${menu ? "hamburgerX2" : ""}`}></span>
                        </div>
                    </div>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <Carticon />
                    </div>
                </div>
                <div className={`${menu ? "show" : "hide"}`}>
                        <li>
                            <Link to="/pastquestions" className="">
                                Past Questions
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/f.a.q" className="">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="">
                                Contact Us
                            </Link>
                        </li>
                        <li className='mobile-button'>
                            <Link to="/register" className="regbutton menureg">
                                Register
                            </Link>
                        </li>
                        <li >
                            <Link to="/login" className="loginbutton menulogin">
                                Log In
                            </Link>
                        </li>
                    </div>
                <div className="mobile-navbar-search">
                <div className="navbar-search">
                        <div>
                            <span>
                                <Searchicon />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for a product, category or space"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
