import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiMap } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { Button } from "./ui/button";
import { BsHouse } from "react-icons/bs";
import { useRouter } from "next/navigation";

const PageMenu = () => {
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

  const router = useRouter();

  return (
    <div>
      <div className="grid place-items-center grid-cols-1 rounded-lg top-0">
        <div className="flex justify-center gap-x-4 uppercase bg-orange-600 w-full text-white text-xl font-medium top-0">
          <div className="flex my-3">
            {mainMenu.map((menu) => (
              <div key={menu.menuId}>
                <Link href={menu.menuLink}>
                  <div className="hover:p-4 p-4 hover:underline">
                    {menu.labelMenu}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="my-6">
            <Button
              onClick={() => router.push("/reservation")}
              variant={"outline"}
              className="uppercase font-semibold"
            >
              <div>Réserver maintenant</div>
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-between bg-orange-200/10 p-4">
          <div>
            <Link href={"/"}>
              <Image
                src={"/pograwa_holding.png"}
                width={250}
                height={70}
                alt="Pograwa Holding"
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex">
            <div className="flex p-4 pb-3">
              <div className="flex text-blue-700 p-3 text-3xl font-bold">
                <MdPhoneInTalk size={32} color="blue" /> +225 27 22 41 92 28
              </div>
              <div className="text-3xl">•</div>
              <div className="flex p-3 text-2xl font-light">
                <BiMap size={32} /> Abidjan Cocody 2 plateaux St Jacques
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
