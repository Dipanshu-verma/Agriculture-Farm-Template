import React from "react";
import "./Herosection.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
 import imghero from "../../assest/heroimg.jpg"
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      
      <img src={imghero} alt=""  className="w-full h-[100vh] max-h-[900px] hero-img" />

      <div className="hero-text-box w-[97%] box-border md:top-[20%] lg:top-[30%] absolute flex justify-center lg:px-32 md:px-20 px-5">
        <div className="text-center">
          <h1 className="typed-text fading-text1 civil-text lg:text-6xl md:text-[2.5rem]">
            Welcome to Farmar
          </h1>
          <p className="fading-text2 font-bold text-white lg:text-5xl md:text-[1.8rem]  ">
           We Produce Natural Goods. High Quality Frash Organic Food!{" "}
          </p>

          <button
            className="find-course-btn"
            onClick={() => {
              navigate("/course-page");
            }}
          >
             Discover more{" "}
            <AiOutlineDoubleRight
              className="right-arrow-icon"
              style={{ marginTop: "4px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
