"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ListeVillas = () => {
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
      link: "/expertises/promoteur-immobilier/cite-ivoire-duplex",
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
      link: "/expertises/promoteur-immobilier/baie-milliadaire",
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
      link: "/expertises/promoteur-immobilier/cite-ivoire/",
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
    <div className="lg:pt-16 pb-10">
      <div className="lg:grid lg:grid-cols-2">
        {villasList.map((villa) => (
          <div key={villa.id} className="p-2 grid grid-cols-1 lg:flex">
            <div className="lg:w-[200px]">
              <Image
                src={villa.pict}
                width={200}
                height={200}
                alt="Pograwa Holding"
                className="w-full object-cover"
              />
            </div>

            <div className="bg-blue-900 gap-2 text-white p-10">
              <div className="text-base uppercase pb-3 font-bold">
                {villa.nomVilla}
              </div>
              <div className="font-thin">{villa.autres}</div>
              <div className="text-2xl font-bold my-3">{villa.superficie}</div>
              <div className="lg:flex lg:justify-between">
                <div className="lg:text-3xl text-2xl font-bold text-orange-300 pt-2">
                  {villa.prix}
                </div>
                <div className="my-3">
                  <Link href={villa.link}>
                    <Button variant={"outline"}>En savoir +</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeVillas;
