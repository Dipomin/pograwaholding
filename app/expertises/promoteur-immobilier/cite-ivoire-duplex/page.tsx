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
        <div className="bg-slate-500 lg:flex gap-10 w-full justify-center text-white lg:p-10 p-4">
          <div className="flex flex-col justify-start">
            <div className="flex lg:text-4xl text-2xl font-bold">
              <FaLocationDot /> Cité Ivoire • Ville de Songon
            </div>
            <div className="flex lg:text-2xl text-xl pt-4 font-thin">
              <MdOutlineHome /> Villa duplex • 4 pièces | chambres, salon, salle
              de bain, cuisine
            </div>
          </div>
          <div>
            <div className=" text-orange-500 lg:text-3xl text-2xl font-extrabold">
              Prix : 48 000 000 F CFA (4 pièces)
            </div>

            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Conditions : 50% à la souscription et le reste sur 6 mois
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Mode de paiement : cash tempérament credit bancaire{" "}
            </div>
          </div>
        </div>
        <div className="container pb-20">
          <div className="text-4xl text-center text-orange-500 underline p-10">
            Galerie
          </div>

          <div className="flex justify-center">
            <Image
              src="/promotion-immobiliere-VILLA-DUPLEX-NANCY-1.jpeg"
              width={800}
              height={350}
              alt="Cité Ivoire"
              className="overflow-hidden rounded-xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CiteIvoire;
