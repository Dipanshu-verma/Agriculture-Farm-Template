import React, { useState } from "react";
import { FaFacebook, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./TeamMembers.css";
import shalinipatel from "../../assest/team1.jpg";
import omkarjypuria from "../../assest/team2.jpg";
import Gadadharmartha from "../../assest/team3.jpg";
import Amitkumarpatel from "../../assest/team4.jpg";

const teamData = [
    {
      name: "Omkar Jaypuria",
      role: "agriculture Engineer",
      email: "agriculture@gmail.com",
      imageSrc: omkarjypuria,
    },
    {
      name: "Gadadhar Martha",
      role: "agriculture Engineer",
      email: "agriculture@gmail.com",
      imageSrc: Gadadharmartha,
    },
    {
      name: "Shalini Patel",
      role: "Architect",
      email: "agriculture@gmail.com",
      imageSrc: shalinipatel,
    },
    {
      name: "Amitkumar Patel",
      role: "agriculture cum founder",
      email: "agriculture@gmail.com",
      imageSrc: Amitkumarpatel,
    },
  
  ];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="px-8 pt-24 pb-28 xl:px-5 min-h-screen place-content-center grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto teams">
        <h1
          style={{ color: "var(--orange-color)" }}
          className="capitalize text-center mb-5 md:mb-10 sm:col-span-2 lg:col-span-4 text-4xl sm:text-5xl xl:text-4xl font-extrabold"
        >
          meet our team
        </h1>
        {teamData.map((team, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index ? "active" : ""
            } bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-green-800 duration-300 cursor-pointer`}
            onMouseOver={() => handleMouseOver(index)}
          >
            <div className="relative">
              <img
                src={team.imageSrc}
                alt={team.name}
                className="w-full object-cover"
              />
              <div className="overlay absolute bg-green-500 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100">
                <ul className="logos w-full opacity-0 transition-opacity group-hover:opacity-100 ease-in-out delay-150 flex flex-wrap gap-1 text-xl place-items-center transform rotate-45">
                  <li className="icon-box1 w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                    <a href="#">
                      <FaFacebook className="text-white" />
                    </a>
                  </li>
                  <li className="icon-box2 w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                    <a href="#">
                      <FaEnvelope className="text-white" />
                    </a>
                  </li>
                  <li className="icon-box3 w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                    <a href="#">
                      <FaLinkedin className="text-white" />
                    </a>
                  </li>
                  <li className="icon-box4 w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                    <a href="#">
                      <FaTwitter className="text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-5 pb-7 px-5 text-center">
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <span className="text-gray-500 capitalize inline-block mt-1 mb-4">
                {team.role}
              </span>
              <p className="text-gray-500">
                Email:{" "}
                <a href="#" className="font-medium group-hover:text-gray-800">
                  {team.email}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
