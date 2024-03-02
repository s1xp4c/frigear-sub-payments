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

      <Card
        title={infoData.contact.header}
        footer={
          <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center text-zinc-500">
            <span>Fang os her:</span>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {/* Icons are wrapped in divs for alignment but act as buttons or links */}
              <div
                onClick={() =>
                  window.open(`mailto:${infoData.contact.email}`, "_blank")
                }
                className="cursor-pointer"
              >
                <TbMailHeart className="text-2xl" />
              </div>
              <div
                onClick={() =>
                  window.open(infoData.socials.instagram, "_blank")
                }
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
          </div>
        }
      >
        <></>
      </Card>
    </div>
  );
};

export default InfoCards;
