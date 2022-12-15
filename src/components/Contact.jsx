import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-200 to-white p-4 text-gray-700"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>

        <div className="flex justify-center items-center ">
          <form action="https://getform.io/f/fc3e0bfd-764e-4ff2-ac9f-b7f9b6b80e31" method="POST" className="flex flex-col w-full md:w-1/2 ">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  border-4
             rounded-md text-gray-700 focus:outline-none"
            />

            <input
              type="text"
              name="Email"
              placeholder="Enter your Email"
              className="p-2 m-4 border-4
              rounded-md text-gray-700 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your Message"
              className="p-2  border-4
              rounded-md text-gray-700 focus:outline-none"
              rows="10"
            ></textarea>
            <button
              className=" text-white w-fit 
                 cursor-pointer  from-gray-500 to-gray-800 bg-gradient-to-r   px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
