import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";

const CiteAdo = () => {
  return (
    <div>
      <PageMenu />
      <div>
        <div className="bg-slate-500 flex gap-10 w-full justify-center text-white p-10">
          <div className="flex flex-col justify-start">
            <div className="flex text-4xl font-bold">
              <FaLocationDot /> Cité ADO • Ville d'Agboville
            </div>
            <div className="flex text-2xl pt-4 font-thin">
              <MdOutlineHome /> Villa basse • 4 pièces | 3 chambres salon, salle
              de bain
            </div>
          </div>
          <div>
            <div className=" text-orange-500 text-3xl font-extrabold">
              Prix : 24 000 000 F CFA
            </div>
            <div className="text-2xl pt-4 font-thin italic underline">
              Conditions : 50% à la souscription et le reste sur 24 mois
            </div>
          </div>
        </div>
        <div className="container pb-20">
          <div className="text-4xl text-center text-orange-500 underline pt-10">
            Galerie
          </div>
          <div className="grid place-items-center grid-cols-2 gap-3 ">
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
};

export default CiteAdo;
