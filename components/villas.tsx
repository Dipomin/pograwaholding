import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Villas = () => {
  const villasList = [
    {
      id: 0,
      nomVilla: "Villa duplex NANCY moyen standing (5pièces)",
      chambres: "4 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "200 m2",
      autres:
        "1 Cuisine moderne, 1 Salle à manger, 2 Terrasses avant et arrière, 1 balcon, 1 garage",
      pict: "/villa-duplex-nancy.png",
      prix: "48.000.000 FCFA",
      link: "/villa-duplex-moyen-standing-nancy",
    },
    {
      id: 1,
      nomVilla: "Villas hauts standing Orgey et Jackson",
      chambres:
        "6 chambres totalement autonomes, 3 salons, 1 salle à manger, 1 bureau, 1 salle de sport, 4 terrasses, 1 cuisine moderne, 1 garage pour deux véhicules",
      salleBain: "6 Salle de bain",
      superficie: "400 m2",
      autres:
        "1 Cuisine moderne, 1 Salle à manger, 2 Terrasses avant et arrière, 1 balcon, 1 garage",
      pict: "/villa-orgey-jackson.png",
      prix: "130.000.000 FCFA",
      link: "/villa-duplex-haut-standing-orgey-jackson",
    },
    {
      id: 2,
      nomVilla: "Villa duplex • Cité Ivoire (3 pièces)",
      chambres: "2 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "150 m2",
      autres: "1 Cuisine moderne, 1 Salle à manger",
      pict: "/villa-duplex-nancy.png",
      prix: "16.000.000 FCFA",
      link: "/villa-duplex-moyen-standing-cite-ivoire",
    },
    {
      id: 3,
      nomVilla: "Villa duplex • Cité Ivoire (4 pièces)",
      chambres: "4 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "200 m2",
      autres: "1 Cuisine moderne, 1 Salle à manger,",
      pict: "/villa-cite-ivoire.png",
      prix: "24.600.000 FCFA",
      link: "/villa-duplex-moyen-standing-nancy",
    },
  ];

  return (
    <div className="bg-orange-600 w-full place-items-center lg:pt-16 pb-10">
      <div className="lg:p-16 pb-10 lg:pb-24">
        <div className="flex flex-col">
          <div className="text-center text-3xl lg:text-6xl text-white font-extrabold pt-10">
            L'immobilier, c'est notre passion
          </div>

          <div className="flex justify-center gap-3 pt-8 ">
            <Link href={"facebook.com"}>
            <div className="hover:to-blue-600">
              <FaFacebookSquare size={24} color="white" />
            </div>
            </Link>
            <div>
              <FaLinkedin size={24} color="white" />
            </div>
            <div>
              <FaXTwitter size={24} color="white" />
            </div>
            <div>
              <FaSquareInstagram size={24} color="white" />
            </div>
          </div>
        </div>
        <div className="text-3xl lg:text-5xl font-normal text-center uppercase lg:text-white pt-8 lg:pt-20 text-blue-900">
         Découvrez nos projets immobiliers
        </div>
        <div className="text-xl lg:text-3xl font-thin text-center text-white pt-10">
          Pograwa Holding dispose de plusieurs villa moyens standing et haut standing, des villas basses et des villas duplex. Faites votre choix puis contactez-nous.
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
      {villasList.map((villa) => (
        <div key={villa.id} className="w-full p-2 grid grid-cols-1 lg:flex">
          <div className="lg:w-[200px]">
            <Image
              src={villa.pict}
              width={200}
              height={200}
              alt="Pograwa Holding"
              className="w-full object-cover"
            />
          </div>
          <div className=" bg-blue-900 w-full gap-2 text-white p-4">
            <div className="text-base uppercase pb-3 font-bold">
              {villa.nomVilla}
            </div>
            <div className="font-thin">{villa.autres}</div>
            <div className="font-bold">{villa.superficie}</div>
            <div className="text-3xl font-bold text-orange-300 pt-2">
              {villa.prix}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Villas;
