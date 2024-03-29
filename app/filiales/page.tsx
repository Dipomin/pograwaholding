"use client";

import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderMobile from "@/components/HeaderMobile";
import { useRouter } from "next/navigation";

const Filiales = () => {
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
        <div className="text-2xl lg:text-4xl font-bold uppercase text-center pb-24 lg:p-14 lg:pb-0">
          Nos filiales
        </div>
        <div className="lg:flex space-y-8 lg:gap-16 justify-center">
          <div>
            <Image
              src={"/aginec.png"}
              width={200}
              height={200}
              alt="Promotion immobilière"
              className="flex"
            />
          </div>

          <div>
            <Image
              src={"/sait-x-logo.png"}
              width={200}
              height={200}
              alt="Promotion immobilière"
              className=""
            />
          </div>

          <div>
            <Image
              src={"/bic-mine-logo.png"}
              width={200}
              height={200}
              alt="Promotion immobilière"
              className=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Filiales;
