import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const expertises = [
  {
    id: "0",
    iconExpert: "/btp-icon.png",
    expertiseTitle: "AGINEC",
    descTitle:
      "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner.",
    btnLink: "/expertises/promoteur-immobilier",
  },
  {
    id: "1",
    iconExpert: "/ascenseur-icon.png",
    expertiseTitle: "Sait-x",
    descTitle:
      "Bénéficiez de notre expertise pour une installation et une maintenance de qualité.",
    btnLink: "https://www.sait-x.com",
  },
  {
    id: "2",
    iconExpert: "/industry-icon.png",
    expertiseTitle: "Bic Mining",
    descTitle: "Nous sommes engagés à minimiser notre impact environnemental.",
    btnLink: "/expertises/industrie-extractive",
  },
];

const ExpertisesHome = () => {
  return (
    <section className="">
      <div>
        <h2 className="text-orange-500 font-bold text-4xl text-center pt-28">
          Expertises
        </h2>
        <div className="text-center my-10 text-2xl font-medium">
          Votre bonheur commence chez vous, trouvez votre bonheur avec nous
        </div>
        <div className="grid grid-cols-1 lg:flex justify-center w-full bg-blue-900 space-y-8 lg:space-y-0  lg:my-0 lg:p-16">
          {expertises.map((expertise) => (
            <div
              key={expertise.id}
              className="container flex flex-col w-96 pt-16 hover:bg-orange-400"
            >
              <div className="uppercase text-center font-bold text-orange-400 hover:text-white text-2xl">
                {expertise.expertiseTitle}
              </div>
              <div className="flex justify-center">
                <Image
                  src={expertise.iconExpert}
                  width={130}
                  height={130}
                  alt="Pograwa Holding"
                />
              </div>
              <div className="text-white text-xl font-thin text-center hover:text-bold line-clamp-2">
                {expertise.descTitle}
              </div>
              <div className="flex justify-center p-6">
                <Link href={expertise.btnLink}>
                  <Button size={"lg"} variant={"orange"}>
                    En savoir plus {"->"}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisesHome;
