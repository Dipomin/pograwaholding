import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const expertises = [
  {
    id: "0",
    iconExpert: "/btp-icon.png",
    expertiseTitle: "Bureau de Travaux Public",
    descTitle:
      "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner.",
  },
  {
    id: "0",
    iconExpert: "/ascenseur-icon.png",
    expertiseTitle: "Technologie",
    descTitle:
      "Bénéficiez de notre expertise pour une installation et une maintenance de qualité.",
  },
  {
    id: "0",
    iconExpert: "/industry-icon.png",
    expertiseTitle: "Industrie extractive",
    descTitle: "Nous sommes engagés à minimiser notre impact environnemental.",
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
        <div className="flex justify-center w-full bg-blue-900 p-16">
          {expertises.map((expertise) => (
            <div className="container flex flex-col w-80">
              <div className="flex justify-center">
                <Image
                  src={expertise.iconExpert}
                  width={130}
                  height={130}
                  alt="Pograwa Holding"
                />
              </div>
              <div className="text-white text-xl font-thin text-center line-clamp-3">
                {expertise.descTitle}
              </div>
              <div className="flex justify-center p-6">
                <Button size={"lg"} variant={"orange"}>En savoir plus {"->"}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisesHome;
