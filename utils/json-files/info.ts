// infoData.ts
interface Section {
  header: string;
  content: string;
}

interface ContactInfo {
  header: string;
  email: string;
  phone: string;
  address: string;
}

interface SocialLinks {
  instagram: string;
  facebook: string;
}

interface InfoData {
  sections: Section[];
  contact: ContactInfo;
  socials: SocialLinks;
}

const infoData: InfoData = {
  sections: [
    {
      header: "Om Frigear",
      content:
        "Frigear er en forening, der støtter og faciliterer non-profit frivillig projekter i Danmark. Vi arbejder for at skabe et fællesskab baseret på interesse for kunst, frivillighed og kultur udført ved genbrug, vedvarende energiteknologi, samarbejde og professionel afvikling.",
    },
    {
      header: "Vores mission",
      content:
        "Vores mission er at skabe, facilitere og støtte projekter, der fremmer innovation og kreativitet i samfundet ved at understøtte frivllig inklusion og samarbejde.",
    },
    {
      header: "Om inklusion",
      content:
        "Frigear er et åbent og inkluderende fælleskab hvor alle støtter op om hinanden og vores forskelligehder. Her er der ingen racer, herkomst, hudfarver, køn, seksualitet, alder eller politiske holdninger på dagsordenen. Vi er her for frivillighed og sammenholdet. I Frigear er alle velkomne",
    },
    {
      header: "Vores vision",
      content:
        "Vi stræber efter at være en katalysator for frivillighed og udvikling inden for teknologiske, venskabelige, sociale, kunstneriske og kreative fællesskaber.",
    },
  ],
  contact: {
    header: "Kontakt Frigear",
    email: "kontakt@frigear.nu",
    phone: "+45 000 069",
    address: ", Danmark",
  },

  socials: {
    instagram: "https://instagram.com/frigear",
    facebook: "https://facebook.com/frigear",
  },
};

export default infoData;
