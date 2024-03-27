import PageMenu from "@/components/page-menu";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/footer";

const CiteIvoire = () => {
  return (
    <div>
      <PageMenu />
      <div>
        <div className="bg-slate-500 flex gap-10 w-full justify-center text-white p-10">
          <div className="flex flex-col justify-start">
            <div className="flex text-4xl font-bold">
              <FaLocationDot /> Cité Ivoire • Ville de Songon
            </div>
            <div className="flex text-2xl pt-4 font-thin">
              <MdOutlineHome /> Villa basse • 3 pièces et 4 pièces | chambres,
              salon, salle de bain
            </div>
          </div>
          <div>
            <div className=" text-orange-500 text-3xl font-extrabold">
              Prix : 18 600 000 F CFA (3 pièces)
            </div>
            <div className=" text-orange-500 text-3xl font-extrabold">
              Prix : 24 600 000 F CFA (4 pièces)
            </div>
            <div className="text-2xl pt-4 font-thin italic underline">
              Conditions : 50% à la souscription et le reste sur 6 mois
            </div>
            <div className="text-2xl pt-4 font-thin italic underline">
              Mode de paiement : cash tempérament credit bancaire
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
