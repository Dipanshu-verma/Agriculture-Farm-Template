import React, { useEffect, useState } from "react";
import logo from "../../assest/agri_logo.png";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenuBar = () => {
    setMenu(!menu);
  };

  const hideNavItems = () => {
    setMenu(false);
  };

  return (
    <div
      className={`w-[100%] max-w-[2600px]  h-[60px] responsive-header pl-6 pr-20   ${
        isScrolled ? "scrolled" : "no-scrolled"
      } 
      } overflow-hidden  ${menu ? "bg-white" : ""} fixed top-0 z-10`}
    >
      <header className="h-full w-full box-border flex justify-between items-center">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {}}
          src={logo}
          alt=""
          className={`${
            isMobile ? "w-[130px] h-[30px]" : "w-[150px] h-[50px] logo-img"
          }  `}
        />
        {isMobile && menu && (
          <RxCross2
            cursor="pointer"
            color={isScrolled ? "black" : "white"}
            size={25}
            onClick={toggleMenuBar}
          />
        )}
        {isMobile && !menu && (
          <RiMenu2Fill
            cursor="pointer"
            size={25}
            color={isScrolled ? "black" : "white"}
            onClick={toggleMenuBar}
          />
        )}
        <ul
          onClick={hideNavItems}
          className={
            isMobile
              ? `flex flex-col gap-5 nav-bg  absolute h-[43vh] top-[50px] ${
                  !menu ? "-right-[100%] " : "right-0 left-0"
                } items-center  text-lg cursor-pointer scrolled`
              : `flex justify-between items-center gap-10 nav-text ${
                  isScrolled ? "text-[var(--logo-color)]" : "text-white"
                }`
          }
        >
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
              isMobile ? "mt-4" : ""
            } `}
          >
            Home
          </Link>
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            About Us
          </Link>
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            {" "}
            Contact Us
          </Link>
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            {" "}
            Service
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
