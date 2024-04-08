import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiMap } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { Button } from "./ui/button";
import { BsHouse } from "react-icons/bs";
import MobileMenu from "./mobile-menu";

const HeaderMobile = () => {
  const mainMenu = [
    {
      menuId: 0,
      labelMenu: "Accueil",
      menuLink: "/",
    },
    {
      menuId: 1,
      labelMenu: "À propos",
      menuLink: "/qui-sommes-nous/presentation",
    },
    {
      menuId: 2,
      labelMenu: "Expertises",
      menuLink: "/expertises",
    },
    {
      menuId: 3,
      labelMenu: "Filiales",
      menuLink: "/filiales",
    },
    {
      menuId: 3,
      labelMenu: "Partenaires",
      menuLink: "/partenaires",
    },
    {
      menuId: 4,
      labelMenu: "Galerie",
      menuLink: "#",
    },
    {
      menuId: 5,
      labelMenu: "Blog",
      menuLink: "/blog",
    },
    {
      menuId: 6,
      labelMenu: "Contacts",
      menuLink: "/contacts",
    },
  ];

  return (
    <div>
      <div className="grid place-items-center grid-cols-1 rounded-lg top-0">
        <MobileMenu />

        <div className="w-full flex justify-center bg-orange-200/10 my-6">
          <div>
            <Link href={"/"}>
              <Image
                src={"/pograwa_holding.png"}
                width={250}
                height={70}
                alt="Pograwa Holding"
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
