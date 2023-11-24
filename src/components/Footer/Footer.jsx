import React from "react";
import "./Footer.css";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate()
  return (
    <div>
    <footer className="footer">
        <div className="footer__addr">
            <h1 className="footer__logo">Agricultural Dynamics</h1>

            <h2>Contact</h2>

            <address>
                Farm Plot No: 363, Near Crops Overbridge Agriville
                <br />
                Agriculture City, Harvestland-752054
                <br />
                <div className="flex gap-2 p-4 cursor-pointer">
                    <a href="https://wa.me/9124732888" target="_blank">
                        <AiOutlineWhatsApp className="socialmedia-icons" />
                    </a>

                    <a
                        href="https://www.instagram.com/agri_dynamic/"
                        target="_blank"
                    >
                        <AiOutlineInstagram className="socialmedia-icons" />
                    </a>
                    <a href="mailto:agridynamic1@gmail.com" target="_blank">
                        <AiOutlineMail className="socialmedia-icons" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61552953963690"
                        target="_blank"
                    >
                        <AiOutlineFacebook className="socialmedia-icons" />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC27fZEy5Z1TPjag6MvC_Zaw"
                        target="_blank"
                    >
                        <AiOutlineYoutube className="socialmedia-icons" />
                    </a>
                </div>
            </address>
        </div>

        <ul className="footer__nav">
            <li className="nav__item">
                <h2 className="nav__title">Agricultural Media</h2>

                <ul className="nav__ul">
                    <li>
                        <a href="#">Crop Management</a>
                    </li>

                    <li>
                        <a href="#">Soil Health</a>
                    </li>

                    <li>
                        <a href="#">Agricultural Technology</a>
                    </li>
                    <li>
                        <a href="#">Environmental Impact</a>
                    </li>
                    <li>
                        <a href="#">Field Survey & Mapping</a>
                    </li>
                </ul>
            </li>

            <li className="nav__item nav__item--extra">
                <Link to={'/about'} className="nav__title">About Agriculture</Link>

                <ul className="nav__ul nav__ul--extra">
                    <li>
                        <Link to={'/'}>Our Farming Mission & Vision</Link>
                    </li>

                    <li>
                        <Link to={'/'}>Expert Agriculturists</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact Our Farm</Link>
                    </li>
                </ul>
            </li>

            <li className="nav__item">
                <h2 className="nav__title">Agricultural Legal</h2>

                <ul className="nav__ul">
                    <li>
                        <a href="#">Farm Privacy Policy</a>
                    </li>

                    <li>
                        <a href="#">Terms of Agricultural Use</a>
                    </li>

                    <li>
                        <a href="#">Farm Sitemap</a>
                    </li>
                </ul>
            </li>
        </ul>

        <div className="legal">
            <p>&copy; 2023 Agricultural Dynamics. All rights reserved.</p>

            <div className="legal__links">
                <span>
                    Cultivated with <span className="heart">♥</span> to build a strong agricultural community.
                </span>
            </div>
        </div>
    </footer>
</div>

  );
}

export default Footer;
