"use client";

import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import HeaderMobile from "@/components/HeaderMobile";

export default function BaieMilliadaire() {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="lg:hidden block">
        <HeaderMobile />
      </div>
      <div>
        <div className="bg-slate-500 lg:flex lg:flex-col gap-10 w-full justify-center text-white lg:p-10">
          <div className="flex flex-col justify-start p-3">
            <div className="flex text-3xl lg:text-4xl font-bold space-x-4">
              <div>
                <FaLocationDot />
              </div>
              <div>Baie des milliadaires</div>
            </div>
            <div className="flex text-2xl pt-4 font-thin">
              <MdOutlineHome /> Terrains | 500 mètres carré avec ACD
            </div>
          </div>
          <div className="p-5">
            <div className=" text-orange-500 text-3xl font-extrabold">
              Prix : 20 000 000 F CFA
            </div>
            <div className="lg:text-2xl text-xl pt-4 font-thin italic underline">
              Mode de paiement : cash tempérament credit bancaire
            </div>
          </div>
        </div>
        <div className="container pb-20">
          <div className="text-4xl text-center text-orange-500 underline pt-10"></div>
          <div className="flex justify-center">
            <div>
              <Image
                src="/baie-milliadaires.png"
                width={900}
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
