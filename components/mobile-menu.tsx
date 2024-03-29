"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiMap } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { BsHouse, BsList } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
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
      menuLink: "#",
    },
    {
      menuId: 6,
      labelMenu: "Contacts",
      menuLink: "/contacts",
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full grid grid-cols-1">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <BsList />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-orange-600 w-full">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-center">
                  <Link href={"/"}>
                    <Image
                      src={"/pograwa_holding.png"}
                      width={200}
                      height={70}
                      alt="Pograwa Holding"
                      className=""
                    />
                  </Link>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="grid place-items-center grid-cols-1 top-0">
              <div className="text-center uppercase text-white text-2xl font-medium top-0">
                <div className="grid grid-cols-1 my-3">
                  {mainMenu.map((menu) => (
                    <Link key={menu.menuId} href={menu.menuLink}>
                      <div className="my-4 text-center">{menu.labelMenu}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <div className="my-6 mx-3 flex justify-center">
                  <Button
                    onClick={() => router.push("/reservation")}
                    variant={"outline"}
                    className="uppercase font-semibold text-white"
                  >
                    {" "}
                    <BsHouse size={20} color="white" /> Réserver maintenant
                  </Button>
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileMenu;
