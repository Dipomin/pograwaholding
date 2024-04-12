import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const OffresAvril = () => {
  return (
    <div>
      <div className="text-3xl lg:text-5xl bg-orange-500 text-white text-center font-bold p-3">
        Nos offres du moment
      </div>
      <h2 className="text-xl lg:text-3xl text-center pt-4 text-white">
        Saisissez l'opportunité de devenir propriétaire et de créer des
        souvenirs inoubliables.
      </h2>
      <div className="flex flex-col lg:flex lg:flex-row gap-6 lg:border-2 border-gray-400 p-8 w-full my-5 lg:my-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-center text-gray-300">
            Villa basse, Cité ADO • Agboville
          </h2>
          <div className="my-8">
            <Image
              src={"/cite-ado-agboville.png"}
              width={554}
              height={388}
              alt="promotion immobilière à Agboville"
            />
          </div>
          <div className="text-4xl font-bold text-center lg:text-left">
            Villa 4 pièces
          </div>
          <div className="text-2xl text-center lg:text-left">
            Superficie: 200 m2
          </div>
          <div className="text-4xl text-orange-500 font-black">
            25 000 000 F CFA
          </div>
        </div>
        <hr className="lg:hidden block my-10" />
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-center text-gray-300">
            Terrains • Baie des milliadaires
          </h2>
          <div className="my-8">
            <Image
              src={"/baie-des-milliadaires.png"}
              width={554}
              height={388}
              alt="promotion immobilière à Agboville"
            />
          </div>
          <div className="text-2xl text-center lg:text-3xl font-bold bg-slate-400 p-3">
            18 000 m2 avec ACD
          </div>

          <div className=" text-gray-800">
            Découvrez le terrain de vos ambitions et façonnez votre propre
            paradis ici, dans ce joyau côtier exclusif. Préparez-vous à investir
            dans l'extraordinaire et à réaliser des succès immobiliers
            remarquables
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold text-orange-400 text-center">
        <div>Contactez-nous dès maintenant pour plus d'informations </div>
        <div className="flex justify-center text-white gap-3">
          <FaWhatsapp color="white" />{" "}
          <div className="text-3xl lg:text-4xl font-black">
            +225 07 58 31 47 64
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default OffresAvril;
