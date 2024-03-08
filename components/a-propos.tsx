import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const APropos = () => {
  return (
    <section className='bg-[url("/bg-mot.jpg")]'>
      <div className="container pb-24">
        <div>
          <h2 className=" text-4xl text-orange-500 text-center font-bold pt-8">
            À propos
          </h2>
          <h2 className="text-4xl font-bold text-center p-12">
            Qui sommes-nous ?
          </h2>
        </div>
        <div className="flex justify-center gap-8">
          <div>
            <Image
              src={"/Moumouni-pograwa-PDG.jpg"}
              width={500}
              height={535}
              alt="Moumouni Pograwa • PDG"
              className="w-96 border-2 shadow-md"
            />
          </div>
          <div className="w-[700px]">
            <div className="text-2xl font-thin pb-8 leading-10">
              Pograwa Holding, société anonyme de droit ivoirien, se distingue
              par sa diversification et son leadership dans plusieurs secteurs
              clés de l'économie. Dirigée par M. Pograwa Moumouni, PDG dynamique
              et visionnaire, la holding regroupe quatre entités distinctes : 1.
              AGINEC GROUPE: Spécialisée dans l'immobilier et la construction,
              AGINEC GROUPE est à l'origine de réalisations remarquables, telles
              que la Cité haut de gamme de Bassam, un projet immobilier
              d'envergure.
            </div>
            <Button variant={"orange"} size={"lg"}>Lire la suite</Button>
          </div>
        </div>
      </div>
      <div className="w-full  bg-orange-700 bg-opacity-95 shadow-md">
        <div className="container flex justify-between pb-24 text-white p-10">
          <div className="flex">
            <div className="text-6xl font-bold text-border border-orange-400">
              +12
            </div>
            <div className="text-lg">
              années <br /> d'expérience
            </div>
          </div>
          <div className="flex">
            <div className="text-6xl font-bold">+200</div>
            <div className="text-lg">
              villas <br /> construites
            </div>
          </div>
          <div className="flex">
            <div className="text-6xl font-bold">+600</div>
            <div className="text-lg">
              clients <br /> satisfaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
