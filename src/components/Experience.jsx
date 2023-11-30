import React from "react";

import html from "../assest/html.png";
import css from "../assest/css.png";
import javascript from "../assest/javascript.png";
import github from "../assest/github.png";
import flutter from "../assest/flutter.png";
import react from "../assest/react.png";
import node from "../assest/node.png";
import java from "../assest/java.png";
import Angular from "../assest/angular.png";




const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Angular,
      title: "Angular JS",
      style: "shadow-red-500",
    },
    {
      id: 5,
      src: react,
      title: "React JS",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: flutter,
      title: "Flutter ",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: java,
      title: "Spring Boot",
      style: "shadow-green-700",
    }, 
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 ",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-white to-gray-200 text-gray-700 w-full h-screen"
    >
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-gray-700">
        <div>
          <p
            className="text-4xl font-bold border-b-4
           border-gray-400 p-2 inline "
          >
            Experience
          </p>
          <p className="py-6 ">These are technologies I've worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center
           py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={` shadow-lg hover:scale-105 duration-500 py-2 bg-gradient-to-b from-gray-50 to-gray-400  rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
