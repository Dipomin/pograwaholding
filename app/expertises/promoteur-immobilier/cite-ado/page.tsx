"use client";

import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import HeaderMobile from "@/components/HeaderMobile";

export default function CiteAdo() {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="lg:hidden block">
        <HeaderMobile />
      </div>
      <div>
        <div className="bg-slate-500 lg:flex gap-10 w-full justify-center text-white lg:p-10 p-3">
          <div className="flex flex-col justify-start">
            <div className="flex lg:text-4xl text-2xl font-bold">
              <FaLocationDot /> Cité ADO • Ville d'Agboville
            </div>
            <div className="flex text-2xl pt-4 font-thin">
              <MdOutlineHome /> Villa basse • 4 pièces | 3 chambres salon, salle
              de bain
            </div>
          </div>
          <div>
            <div className=" text-orange-500 lg:text-3xl text-2xl my-5 font-extrabold">
              Prix : 24 000 000 F CFA
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Conditions : 50% à la souscription et le reste sur 24 mois
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Mode de paiement : cash tempérament credit bancaire
            </div>
          </div>
        </div>
        <div className="container pb-20">
          <div className="text-4xl my-6 text-center text-orange-500 underline pt-10">
            Galerie
          </div>
          <div className="grid place-items-center lg:grid-cols-2 gap-3 ">
            <div>
              <Image
                src="/cite-ado.jpeg"
                width={500}
                height={350}
                alt="Cité ADO"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/cite-ado-2.jpeg"
                width={500}
                height={350}
                alt="Cité ADO"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/villa-basse-cite-ado-agboville-1.png"
                width={500}
                height={350}
                alt="Cité ADO"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/villa-basse-cite-ado-agboville-2.png"
                width={500}
                height={350}
                alt="Cité ADO"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/villa-basse-cite-ado-agboville-3.png"
                width={500}
                height={350}
                alt="Cité ADO"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
