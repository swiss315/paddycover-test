import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Mailbox from "../Components/Mailbox";
import Navbar from "../Components/Navbar";
import Popularproduct from "../Components/Popular-product";
import Productonsale from "../Components/Product-on-sale";

import Ceilinglamp from "../Assets/Images/pcategories_cieling.png";
import chandelierimage from "../Assets/Images/chanderlierimage.png";
import Homeimage from "../Assets/Images/Homeimage.png";
import Officeimage from "../Assets/Images/Officeimage.png";
import Hotelimage from "../Assets/Images/hotelimage.png";

import "../Stylesheets/home.css";
import CarouselHome from "../Components/Carousels_h";

function Home() {
  return (
    <div>
      <Contact />
      <Navbar />
      <CarouselHome />
      <div className="sbs-container">
        <div className="sbs-title">
          <div>
            <h6>Shop By Space</h6>
            <Link>View All</Link>
          </div>
          <p>Select the type of apartment you want to light up.</p>
        </div>
        <div className="sbs-box-container">
          <div className="product-categories-slider sbs-categgories">
            <img src={Homeimage} alt="Ceiling Lamp" loading="lazy"/>
            <div>
              <p>HOME</p>
            </div>
          </div>
          <div className="product-categories-slider sbs-categgories">
            <img src={Officeimage} alt="Ceiling Lamp" />
            <div>
              <p>OFFICE</p>
            </div>
          </div>
          <div className="product-categories-slider sbs-categgories">
            <img src={Hotelimage} alt="Ceiling Lamp" />
            <div>
              <p>HOTEL</p>
            </div>
          </div>
        </div>
      </div>

      {/* product categories */}
      <div className="product-categories-container">
        <div className="product-categories-title">
          <h6>Popular Categories</h6>
          <Link>View All</Link>
        </div>
        <div className="product-slider-container">
          <div className="product-categories-slider product-categories-slider-2">
            <img src={Ceilinglamp} alt="Ceiling Lamp" loading="lazy"/>
            <div>
              <p>CEILING LAMPS</p>
            </div>
          </div>
          <div className="product-categories-slider product-categories-slider-2">
            <img src={chandelierimage} alt="Ceiling Lamp" loading="lazy"/>
            <div>
              <p>CHANDELIERS</p>
            </div>
          </div>
        </div>
      </div>
      <Popularproduct />
      <Productonsale />
      <Mailbox />
      <Footer />
      <Contact />
    </div>
  );
}

export default Home;
