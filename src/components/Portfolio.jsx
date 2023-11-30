import React from "react";
import arraydestruct from "../assest/portfolio/arrayDestruct.jpg";
import installNode from "../assest/portfolio/installNode.jpg";
import navbar from "../assest/portfolio/navbar.jpg";
import reactParallax from "../assest/portfolio/reactParallax.jpg";
import reactSmooth from "../assest/portfolio/reactSmooth.jpg";
import reactWeather from "../assest/portfolio/reactWeather.jpg";
import dashboard from "../assest/portfolio/dashboard.png";
import carpooling from "../assest/portfolio/carpooling.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arraydestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: reactSmooth,
    },
    {
      id: 4,
      src: dashboard,
    },
    {
      id: 5,
      src: reactWeather,
    },
    {
      id: 6,
      src: carpooling,
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-200 to-white
     w-full text-white md:h-screen"
    >
      <div
        className="justify-center max-w-screen-lg p-4 mx-auto flex
         flex-col w-full h-full"
      >
        <div className="pb-8  ">
          <p className="font-bold text-4xl inline border-b-4 border-gray-400 text-gray-700 ">
            Portfolio
          </p>
          <p className="py-6  text-gray-700">Check out some of my work here</p>
        </div>
        
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {
        portfolios.map(({id,src}) =>(
          <div  key={id} className="shadow-md shadow-gray-600 rounded-lg  bg-gray-200 text-gray-700  ">
            <img
              src={src}
              alt=""
              className="rounded-md duration-300 hover:scale-105  "
            />

            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                DEMO
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                CODE
              </button>
            </div>
          </div>
      
        ))
        }
      </div>  
      </div>
    </div>
  );
};

export default Portfolio;
