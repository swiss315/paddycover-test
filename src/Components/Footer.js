import React from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/Icons/logo.svg";
import { ReactComponent as Telegramicon } from "../Assets/Icons/telegramicon.svg";
import { ReactComponent as Whatsappicon } from "../Assets/Icons/whatsappicon.svg";
import { ReactComponent as Linkedinicon } from "../Assets/Icons/linkedinicon.svg";
import { ReactComponent as Youtubeicon } from "../Assets/Icons/youtubeicon.svg";
import { ReactComponent as Twittericon } from "../Assets/Icons/twittericon.svg";
import { ReactComponent as Facebookicon } from "../Assets/Icons/facebookicon.svg";
import { ReactComponent as Instagramicon } from "../Assets/Icons/instagramicon.svg";
import { ReactComponent as Appstoreicon } from "../Assets/Icons/appleicon.svg";
import { ReactComponent as Playstoreicon } from "../Assets/Icons/playstoreicon.svg";


import '../Stylesheets/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-description'>
            <Logo />
            <p>
                Brighten your nights with modern designer lighting from Thelightinghaus.com Our range features top brands and all the latest contemporary lighting styles to illuminate your home and garden.
            </p>
        </div>
        <div className='footer-quicklink'>
            <h6 className='footer-title'>Quick Links</h6>
            <div className="">
                <Link>LIGHTING Explorer</Link>
                <Link>OFFICE</Link>
                <Link>HOTEL</Link>
                <Link>Home</Link>
                <Link>MY ACCOUNT</Link>
                <Link>CART</Link>
            </div>
        </div>
        <div className='footer-social-container'>
            <h6 className='footer-title'>Connect</h6>
            <div>
                <p>Connect with us on social media</p>
                <div className='footer-social'>
                    <a href='#0'>
                        <Telegramicon />
                    </a>
                    <a href='#0'>
                        <Whatsappicon />
                    </a>
                    <a href='#0'>
                        <Linkedinicon />
                    </a>
                    <a href='#0'>
                        <Youtubeicon />
                    </a>
                    <a href='#0'>
                        <Twittericon />
                    </a>
                    <a href='#0'>
                        <Facebookicon />
                    </a>
                    <a href='#0'>
                        <Instagramicon />
                    </a>
                </div>
            </div>
        </div>
        <div>
            <div className='footer-mobile'>
                <div className='footer-small-logo'>
                    <Logo />
                </div>
                <div>
                    <h6 className='footer-title'>Download our mobile app</h6>
                    <p>Get access to exclusive offers</p>
                </div>
            </div>
            <div className='footer-download'>
                <Appstoreicon /> 
                <Playstoreicon />
            </div>
        </div>
    </div>
  )
}

export default Footer