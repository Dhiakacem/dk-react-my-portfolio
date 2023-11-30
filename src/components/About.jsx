import React from "react";

const About = () => {
  return (
    <div>
      <div
        name="About"
        className="w-full h-screen
     bg-gradient-to-b from-white to-gray-200 text-gray-700"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400 ">
              About
            </p>
          </div>
          <p className="text-xl mt-20 to-gray-700">
            My name is Dhia Kacem, and I am currently a third-year computer
            engineering student specializing in software engineering at École
            Pluridisciplinaire Internationale EPI-Sousse. Passionate about web
            and mobile development, I am actively seeking a professional
            opportunity to apply my skills within an innovative company.
          </p>
          <br />
          <p className="text-xl text-gray-700">
            In my capacity as a junior software engineer, I have dedicated a
            year to actively contributing to innovative projects, demonstrating
            my commitment to software design and development. I am proficient in
            various technologies, including React, Tailwind, Angular, and Spring
            Boot. My continuous exploration of new technologies within the field
            keeps me at the forefront of evolving industry trends.
          </p>
          <br />

          <p className="text-xl text-gray-700">
            My curiosity extends beyond web development into the captivating
            realm of mobile application development. I am enthusiastic about the
            potential offered by technologies such as Flutter and React Native
            to create versatile and seamless mobile solutions. This excitement
            stems from my dedication to staying abreast of emerging technologies
            and my unwavering commitment to crafting innovative solutions,
            making me a valuable asset for dynamic and forward-thinking
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
