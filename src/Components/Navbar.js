import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/Icons/logo.svg";
import { ReactComponent as Searchicon } from "../Assets/Icons/searchicon.svg";
import { ReactComponent as Accounticon } from "../Assets/Icons/accounticon.svg";
import { ReactComponent as Listicon } from "../Assets/Icons/listicon.svg";
import { ReactComponent as Carticon } from "../Assets/Icons/carticon.svg";

import "../Stylesheets/navbar.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
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
    );
}

export default Navbar;
