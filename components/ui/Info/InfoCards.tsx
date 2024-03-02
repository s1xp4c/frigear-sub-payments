"use client";
import React from "react";
import Card from "@/components/ui/Card/Card";
import infoData from "@/utils/json-files/info";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo_rf_bgr from "@/components/icons/Logo_rf_bgr";

const InfoCards = () => {
  return (
    <div>
      <div className="flex justify-center items-center ">
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
          <div className="flex justify-between items-center text-2xl text-indigo-500">
            <div className="flex-row flex">
              email
              <Link
                aria-label={infoData.contact.email}
                href={`mailto: ${infoData.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 m-2"
              >
                <TbMailHeart /> {/* Instagram icon */}
              </Link>
            </div>
            <div className="flex-row flex">
              instagram
              <Link
                aria-label={infoData.socials.instagram}
                href={infoData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 m-2"
              >
                <FaInstagram /> {/* Instagram icon */}
              </Link>
            </div>
            <div className="flex-row flex">
              facebook
              <Link
                aria-label={infoData.socials.facebook}
                href={infoData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 m-2"
              >
                <FaFacebookF /> {/* Facebook icon */}
              </Link>
            </div>
          </div>
        }
        children={undefined}
      ></Card>
    </div>
  );
};

export default InfoCards;
