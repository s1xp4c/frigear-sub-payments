"use client";
import { FormEvent } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

import Link from "next/link";

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
    const endpoint = "/api/email";

    const options = {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    };

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      console.error("Error response from server:", response);
      return;
    }

    const resData = await response.json();

    if (resData.status === 200) {
      console.log("Message sent.");
      // setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-44 gap-2 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-[80%] -left-2 transform -translate-x-1/2 -translate-1/2 z-0"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">✉ Kontakt os</h5>
        <p className="text-[#ADB7BE] mb-2 max-w-md">
          {" "}
          Smid os en besked hvis du har nogen spørgsmål, så vender vi tilbage
          ASAP 💜 - Frigear frivillige
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Imens du venter ka&apos; du ta&apos; et kig på vores SoMe her 🐼
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://instagram.com" target="_blank">
            <FaInstagramSquare className="w-10 h-10" />
          </Link>
          <Link href="https://www.facebook.com/Frigear.nu" target="_blank">
            <FaFacebookSquare className="w-10 h-10" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <FaYoutubeSquare className="w-10 h-10" />
          </Link>
        </div>
      </div>
      <div>
        {/* {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">E-mail afsendt!</p>
        ) : ( */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Dit seje navn
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hei, hvad hedder du? . . put her"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Din email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="volunteerHero@someDomain.lol"
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
              placeholder="Jeg vil snakke om et awesome Frigear projekt ..."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 border-2 border-transparent hover:border-indigo-300 hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            SEND BESKED
          </button>
        </form>
        {/* )} */}
      </div>
    </section>
  );
};

export default EmailSection;
