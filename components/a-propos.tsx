"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import CountUp from "react-countup";

const APropos = () => {
  const route = useRouter();

  return (
    <section className='bg-[url("/bg-mot.jpg")]'>
      <div className=" pb-24">
        <div className="container">
          <h2 className=" text-4xl text-orange-500 text-center font-bold pt-8">
            À propos
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-center p-8 lg:p-12">
            Qui sommes-nous ?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:flex justify-center gap-8 pb-16">
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
            <div className="container text-xl lg:text-2xl text-justify font-thin pb-8 lg:leading-10 truncate-7">
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
            <div className="flex justify-center">
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
        <div className="w-full bg-orange-700 bg-opacity-95 shadow-md">
          <div className="container grid place-items-center grid-cols-1 lg:flex justify-between gap-y-16 lg:my-0 pb-10 text-white pt-10">
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
      </div>
    </section>
  );
};

export default APropos;
