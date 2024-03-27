import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";
import { BiSolidMap, BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <section className="bg-gray-200/90">
      <div className="container lg:flex justify-center gap-6 pt-20">
        <div className="text-4xl text-orange-400 font-bold">Newsletter</div>
        <div className="lg:flex w-full my-2 lg:max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Votre adresse email" />
          <Button variant={"orange"} type="submit">
            Sinscrire
          </Button>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:flex justify-between gap-8 pt-16">
        <div>
          <div className="uppercase font-bold text-xl pb-4">Expertises</div>
          <ul className="font-bold uppercase leading-10">
            <Link href={"/expertises/promoteur-immobilier"} className="hover:underline">
              <li className="hover:text-orange-600">• Promotion immobilière</li>
            </Link>
            <Link href={"/expertises/industrie-extractive"} className="hover:underline">
              <li className="hover:text-orange-600">• Industrie extractive</li>
            </Link>
            <Link href={"/expertises/technologie"} className="hover:underline">
              <li className="hover:text-orange-600">• Technologie</li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="uppercase font-bold text-xl pb-4">Contacts</div>
          <div>
            <div className="flex">
              <BiSolidMap /> Abidjan Cocody 2 plateaux, Saint Jacques
            </div>
            <div className="flex my-3">
              <BiSolidPhoneCall /> +225 27 22 41 92 28
            </div>
            <div className="flex">
              <MdEmail /> info@pograwaholding.com
            </div>
          </div>
        </div>
        <div className="pb-10 lg:pb-0 lg:w-96">
          <div>
            <Image
              src={"/pograwa_holding.png"}
              width={160}
              height={70}
              alt="Pograwa Holding"
            />
          </div>
          <div className="pt-4">
            Pograwa Holding, société anonyme de droit ivoirien, se distingue par
            sa diversification et son leadership dans plusieurs secteurs clés de
            l'économie. Dirigée par M. Pograwa Moumouni, PDG dynamique et
            visionnaire.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
