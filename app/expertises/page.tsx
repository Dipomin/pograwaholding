"use client";

import Footer from "@/components/footer";
import PageMenu from "@/components/page-menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderMobile from "@/components/HeaderMobile";
import { useRouter } from "next/navigation";

const Expertises = () => {
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
          Expertises
        </div>
        <div className="lg:flex space-y-8 lg:gap-4 pb-16 justify-center">
          <div className="text-2xl text-black lg:w-[400px]">
            <Link href="/expertises/promoteur-immobilier">
              <div className="hover:opacity-5 hover:animate-pulse w-full overflow-hidden lg:h-80">
                <Image
                  src={"/promotion-immobiliere-VILLA-DUPLEX-NANCY-1.jpeg"}
                  width={400}
                  height={400}
                  alt="Promotion immobilière"
                  className="w-full"
                />
              </div>
              <div className="bg-orange-600 hover:bg-orange-700 text-white text-2xl lg:text-3xl font-bold text-center p-3 lg:p-8">
                AGINEC
              </div>
            </Link>
          </div>
          <div className="text-2xl text-black lg:w-[400px]">
            <Link href="/expertises/industrie-extractive">
              <div className="hover:opacity-5 hover:animate-pulse w-full overflow-hidden lg:h-80">
                <Image
                  src={"/32699.jpg"}
                  width={400}
                  height={400}
                  alt="Promotion immobilière"
                  className="lg:w-full"
                />
              </div>
              <div className="bg-orange-600 hover:bg-orange-700 text-white text-2xl lg:text-3xl font-bold text-center p-3 lg:p-8">
                BIC MINING
              </div>
            </Link>
          </div>
          <div
            onClick={() => router.push("https://www.sait-x.com")}
            className="text-2xl text-black lg:w-[400px] hover:cursor-pointer"
          >
            <div className="hover:opacity-5 hover:animate-pulse w-full overflow-hidden lg:h-80">
              <Image
                src={"/10723.jpg"}
                width={400}
                height={400}
                alt="Promotion immobilière"
                className="w-full"
              />
            </div>
            <div className="bg-orange-600 hover:bg-orange-700 text-white text-2xl lg:text-3xl font-bold text-center p-3 lg:p-8">
              SAITX
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Expertises;
