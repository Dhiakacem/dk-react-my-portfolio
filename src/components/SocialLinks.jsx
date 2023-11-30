import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/dhia-kacem/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/Dhiakacem",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:dhiaa.kacem@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[40%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center  w-40 h-11 px-3 ml-[-115px] hover:ml-[-10px] hover:rounded-md duration-300 bg-white" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-700"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
