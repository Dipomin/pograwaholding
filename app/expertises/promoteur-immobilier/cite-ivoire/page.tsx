"use client";

import PageMenu from "@/components/page-menu";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/footer";
import HeaderMobile from "@/components/HeaderMobile";

const CiteIvoire = () => {
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
              <FaLocationDot /> Cité Ivoire • Ville de Songon
            </div>
            <div className="flex lg:text-2xl text-xl pt-4 font-thin">
              <MdOutlineHome /> Villa basse • 3 pièces et 4 pièces | chambres,
              salon, salle de bain
            </div>
          </div>
          <div>
            <div className=" text-orange-500 lg:text-3xl text-xl font-extrabold">
              Prix : 18 600 000 F CFA (3 pièces)
            </div>
            <div className=" text-orange-500 lg:text-3xl text-2xl font-extrabold">
              Prix : 24 600 000 F CFA (4 pièces)
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Conditions : 50% à la souscription et le reste sur 6 mois
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Mode de paiement : cash tempérament credit bancaire
            </div>
          </div>
        </div>
        <div className="container pb-20">
          <div className="text-4xl text-center text-orange-500 underline pt-10">
            Galerie
          </div>
          <div className="grid place-items-center lg:grid-cols-2 gap-3 ">
            <div>
              <Image
                src="/cite-ivoire-2.png"
                width={500}
                height={350}
                alt="Cité Ivoire"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/cite-ivoire-3.png"
                width={500}
                height={350}
                alt="Cité Ivoire"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/cite-ivoire-4.png"
                width={500}
                height={350}
                alt="Cité Ivoire"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/cite-ivoire-5.png"
                width={500}
                height={350}
                alt="Cité Ivoire"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/cite-ivoire-6.png"
                width={500}
                height={350}
                alt="Cité Ivoire"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CiteIvoire;
