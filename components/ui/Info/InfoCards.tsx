"use client";
import React from "react";
import Card from "@/components/ui/Card/Card";
import infoData from "@/utils/json-files/info";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";
import { motion } from "framer-motion";
import Logo_rf_bgr from "@/components/icons/Logo_rf_bgr";

const InfoCards = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Logo_rf_bgr className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full" />
          </div>
        </motion.div>
      </div>
      {infoData.sections.map((section, index) => (
        <Card key={index} title={section.header} description={section.content}>
          <></>
        </Card>
      ))}

      <Card title={infoData.contact.header}>
        {/* For the contact card, instead of using `footer` prop for actionable icons, placing them directly as children */}
        <div className="flex justify-between items-center text-2xl text-indigo-500">
          {/* Interactive icons as previously setup, wrapped in divs for clickable actions */}
          <div
            onClick={() =>
              window.open(`mailto:${infoData.contact.email}`, "_blank")
            }
            className="cursor-pointer"
          >
            <TbMailHeart className="text-2xl" />
          </div>
          <div
            onClick={() => window.open(infoData.socials.instagram, "_blank")}
            className="cursor-pointer"
          >
            <FaInstagram className="text-2xl" />
          </div>
          <div
            onClick={() => window.open(infoData.socials.facebook, "_blank")}
            className="cursor-pointer"
          >
            <FaFacebookF className="text-2xl" />
          </div>
        </div>
        {/* Maintaining an empty fragment as children if no additional content is to be passed */}
        <></>
      </Card>
    </div>
  );
};

export default InfoCards;
