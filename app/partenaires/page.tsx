"use client";

import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderMobile from "@/components/HeaderMobile";
import { useRouter } from "next/navigation";

const Partenaires = () => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="lg:hidden block">
        <HeaderMobile />
      </div>
      <div className="container pt-10">
        <div className="text-2xl lg:text-4xl font-bold uppercase text-center lg:p-14 pb-9 lg:pb-0">
          Nos partenaires
        </div>
        <div className="lg:flex space-y-8 lg:gap-4 justify-center">
          <div className="text-2xl text-black lg:w-[400px]">
            <div className="hover:opacity-5 hover:animate-pulse w-full overflow-hidden lg:h-80">
              <Image
                src={"/mclu.jpeg"}
                width={300}
                height={250}
                alt="MCLU"
                className="flex"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partenaires;
