"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Villas = () => {
  const route = useRouter();

  const villasList = [
    {
      id: 0,
      nomVilla: "Villa duplex NANCY moyen standing (5pièces) à Songon",
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
      nomVilla:
        "Villas hauts standing Orgey et Jackson • Baie des milliadaires",
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
      nomVilla: "Villa basse • Cité Ivoire (3 pièces) à Songon",
      chambres: "2 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "150 m2",
      autres: "1 Cuisine moderne, 1 Salle à manger",
      pict: "/villa-cite-ivoire.png",
      prix: "18.600.000 FCFA",
      link: "/expertises/promoteur-immobilier/cite-ivoire3/villa-duplex-moyen-standing-cite-ivoire",
    },
    {
      id: 3,
      nomVilla: "Villa duplex • Cité Ivoire (4 pièces) à Songon",
      chambres: "4 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "200 m2",
      autres: "1 Cuisine moderne, 1 Salle à manger,",
      pict: "/villa-cite-ivoire.png",
      prix: "24.600.000 FCFA",
      link: "/expertises/promoteur-immobilier/cite-ivoire4/villa-duplex-moyen-standing-nancy",
    },
    {
      id: 3,
      nomVilla: "Villa basse • Cité ADO (4 pièces) à Agboville",
      chambres: "3 chambres autonomes (dressing + placard + douche wc)",
      salleBain: "1 Salle de bain",
      superficie: "200 m2",
      autres: "1 Cuisine moderne, 1 Salle à manger,",
      pict: "/villa-cite-ivoire.png",
      prix: "24.000.000 FCFA",
      link: "/expertises/promoteur-immobilier/cite-ado/",
    },
  ];

  return (
    <div className="bg-orange-600 w-full place-items-center pt-16 pb-10">
      <div className=" pb-24">
        <div className="flex flex-col bg-slate-600">
          <div className="text-center text-6xl p-16 text-white font-extrabold">
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

          <div className="flex justify-center p-16">
            <video
              src="/pograwa-holding.mp4"
              width={720}
              height={640}
              controls
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="text-5xl font-medium text-center text-white pt-20">
          Découvrez nos projets immobiliers
        </div>
        <div className="text-3xl font-thin text-center text-white pt-10">
          Pograwa Holding dispose de plusieurs villa moyens standing et haut
          standing, des villas basses et des villas duplex. Faites votre choix
          puis contactez-nous.
        </div>
      </div>
      <div className="grid grid-cols-2">
        {villasList.map((villa) => (
          <div key={villa.id} className="w-full p-2 flex">
            <div className="w-[200px]">
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
              <div className="flex lg:justify-between">
                <div className="text-3xl font-bold text-orange-300 pt-2">
                  {villa.prix}
                </div>
                <div className="">
                  <Button
                    variant={"outline"}
                    onClick={() => route.push(villa.link)}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villas;
