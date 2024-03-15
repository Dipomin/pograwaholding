"use client"

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import CountUp from 'react-countup';

const APropos = () => {
  return (
    <section className='bg-[url("/bg-mot.jpg")]'>
      <div className="container pb-24">
        <div>
          <h2 className=" text-4xl text-orange-500 text-center font-bold pt-8">
            À propos
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-center p-8 lg:p-12">
            Qui sommes-nous ?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:flex justify-center gap-8">
          <div>
            <Image
              src={"/Moumouni-pograwa-PDG.jpg"}
              width={500}
              height={535}
              alt="Moumouni Pograwa • PDG"
              className="w-96 border-2 shadow-md"
            />
          </div>
          <div className="lg:w-[700px]">
            <div className="text-xl lg:text-2xl text-justify font-thin pb-8 lg:leading-10">
              Pograwa Holding, société anonyme de droit ivoirien, se distingue
              par sa diversification et son leadership dans plusieurs secteurs
              clés de l'économie. Dirigée par M. Pograwa Moumouni, PDG dynamique
              et visionnaire, la holding regroupe quatre entités distinctes : 
              AGINEC GROUPE: Spécialisée dans l'immobilier et la construction,
              Pograwa Holding est à l'origine de réalisations remarquables, telles
              que la Cité haut de gamme de Bassam, un projet immobilier
              d'envergure.
            </div>
            <Link href={"/qui-sommes-nous/presentation"}>
              <Button variant={"orange"} size={"lg"}>Lire la suite</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full container bg-orange-700 bg-opacity-95 shadow-md">
        <div className="container grid place-items-center grid-cols-1 lg:flex justify-between gap-y-16 lg:my-0 pb-24 text-white p-10">
          <div className="flex">
            <div className="text-7xl font-bold text-border border-orange-400">
              +<CountUp start={0} end={12} delay={5} />
            </div>
            <div className="text-xl text-thin">
              années <br /> d'expérience
            </div>
          </div>
          <div className="flex">
            <div className="text-7xl font-bold">
              +<CountUp start={0} end={200} delay={5} />
            </div>
            <div className="text-xl text-thin">
              villas <br /> construites
            </div>
          </div>
          <div className="flex">
            <div className="text-7xl font-bold">
              +<CountUp start={0} end={600} delay={5} />
            </div>
            <div className="text-xl text-thin">
              clients <br /> satisfaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
