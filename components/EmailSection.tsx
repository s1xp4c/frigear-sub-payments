"use client";
import React, { useState, FormEvent } from "react";
import { FaInstagramSquare } from "react-icons/fa/";
import { FaFacebookSquare } from "react-icons/fa/";
import { FaYoutubeSquare } from "react-icons/fa/";

import Link from "next/link";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">✉ Kontakt os</h5>
        <p className="text-[#ADB7BE] mb-2 max-w-md">
          {" "}
          Smid os en besked hvis du har nogen spørgsmål, så vender vi tilbage
          ASAP ❤️
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Mens du venter ka' du jo lige ta' et kig på vores SoMe
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="instagram.com" target="_blank">
            <FaInstagramSquare className="w-10 h-10" />
          </Link>
          <Link href="https://www.facebook.com/Frigear.nu" target="_blank">
            <FaFacebookSquare className="w-10 h-10" />
          </Link>
          <Link href="youtube.com" target="_blank">
            <FaYoutubeSquare className="w-10 h-10" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">E-mail afsendt!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Din e-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="volunteerHero@frigear.nu"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Emne
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Ville bare lige smide et virtuelt kram :)"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Besked
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Lad os snakke om hvor awesome Frigear er ..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 border-2 border-transparent hover:border-indigo-300 hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send besked
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
