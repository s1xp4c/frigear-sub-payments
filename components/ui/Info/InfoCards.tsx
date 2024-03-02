// InfoCards.tsx
import React from "react";
import Card from "@/components/ui/Card/Card";
import infoData from "@/utils/json-files/info";
import { FaInstagram, FaFacebookF, FaExclamationCircle } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";
import Link from "next/link";

const InfoCards = () => {
  return (
    <div>
      <div className=""></div>
      {infoData.sections.map((section, index) => (
        <Card
          key={index}
          title={section.header}
          description={section.content}
          children={undefined}
        >
          {/* Additional content can be conditionally rendered here if needed */}
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
