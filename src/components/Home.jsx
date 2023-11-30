import React from "react";
import HeroImage from "../assest/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const home = () => {
  return (
    <div
      Name="home"
      className="w-full bg-gradient-to-b from-gray-200 to-white 
    text-gray h-screen "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-3xl sm:text-5xl font-bold text-gray-700">
            Kacem Dhia
          </h3>
          <p className=" text-3xl font-medium sm:text-xl text-gray-700 py-4  max-w-md ">
            I'm a Full Stack Developper
          </p>

          <p className=" text-gray-700 py-4  max-w-lg ">
            As a junior software engineer with one year of hands-on experience
            in software development, my focus remains on designing and building
            software. I am particularly drawn to web application development,
            employing technologies such as React, Angular and Spring Boot and
            extend my expertise to mobile application development, exploring the
            realms of Flutter and React Native.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 items-center
             flex my-2 rounded-md cursor-pointer  from-gray-500 to-gray-800 bg-gradient-to-r"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-0.5" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="  rounded-3xl shadow-slate-500 hover:scale-105 duration-300 shadow-xl mx-auto w-2/3  "
          />
        </div>
      </div>
    </div>
  );
};

export default home;
