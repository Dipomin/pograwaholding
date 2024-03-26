"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { redirect, useRouter } from "next/navigation";

const APropos = () => {
  const route = useRouter();

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
              Dans l'objectif d'efficacité et de compétitivité, toute entreprise
              fait face à de nombreux défis à relever pour la satisfaction de sa
              clientèle et surtout faire partir des compagnies qui comptent dans
              la politique publique du gouvernement en matière de croissance. Vu
              l'importance du secteur privé dans cette politique, nos
              entreprises AGINEC GROUPE SA, SAITX TECHNOLOGIES ET BIM.C ont été
              regroupé en holding pour devenir POGRAWA HOLDING. Les secteurs de
              l'immobilier, des nouvelles technologies, des mines et des
              énergies renouvelables sont nos domaines de compétences.
            </div>
            <Button
              variant={"orange"}
              size={"lg"}
              onClick={() => route.push("/qui-sommes-nous/presentation")}
            >
              Lire la suite
            </Button>
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
