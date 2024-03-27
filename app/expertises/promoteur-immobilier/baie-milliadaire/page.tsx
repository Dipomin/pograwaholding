import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";

const BaieMilliadaire = () => {
  return (
    <div>
      <PageMenu />
      <div>
        <div className="bg-slate-500 flex gap-10 w-full justify-center text-white p-10">
          <div className="flex flex-col justify-start">
            <div className="flex text-4xl font-bold">
              <FaLocationDot /> Baie des milliadaires
            </div>
            <div className="flex text-2xl pt-4 font-thin">
              <MdOutlineHome /> Terrains | 500 mètres carré avec ACD
            </div>
          </div>
          <div>
            <div className=" text-orange-500 text-3xl font-extrabold">
              Prix : 20 000 000 F CFA
            </div>
            <div className="text-2xl pt-4 font-thin italic underline">
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
};

export default BaieMilliadaire;
