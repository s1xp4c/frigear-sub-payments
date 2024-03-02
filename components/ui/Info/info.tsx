// Info.tsx
import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card/Card";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface SocialLinks {
  instagram: string;
  facebook: string;
}

interface InfoData {
  title: string;
  content: string;
  mission: string;
  vision: string;
  contact: ContactInfo;
  socials: SocialLinks;
}

export default function Info() {
  const [infoData, setInfoData] = useState<InfoData | null>(null);

  useEffect(() => {
    fetch("/info.json")
      .then((response) => response.json())
      .then(setInfoData)
      .catch((error) => console.error("Failed to load info", error));
  }, []);

  if (!infoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <Card
        title="Om Frigear"
        description={infoData.content}
        children={undefined}
      >
        {/* Additional content can be added here if needed */}
      </Card>

      <Card
        title="Vores Mission"
        description={infoData.mission}
        children={undefined}
      >
        {/* Additional content can be added here if needed */}
      </Card>

      <Card
        title="Vores Vision"
        description={infoData.vision}
        children={undefined}
      >
        {/* Additional content can be added here if needed */}
      </Card>

      <Card
        title="Kontakt Information"
        footer={
          <div className="flex flex-col md:flex-row justify-between">
            <span>Email: {infoData.contact.email}</span>
            <span>Telefon: {infoData.contact.phone}</span>
            <span>Adresse: {infoData.contact.address}</span>
          </div>
        }
      >
        <div className="flex space-x-4">
          <a
            href={infoData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={infoData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </Card>
    </div>
  );
}
