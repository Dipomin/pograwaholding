"use client";

import React from "react";
import Image from "next/image";
import PageMenu from "@/components/page-menu";
import HeaderMobile from "@/components/HeaderMobile";
import Footer from "@/components/footer";

const pictures = [
  {
    pictName: "/galerie/0.jpeg",
  },
  {
    pictName: "/galerie/1.jpeg",
  },
  {
    pictName: "/galerie/2.jpeg",
  },
  {
    pictName: "/galerie/3.jpeg",
  },
  {
    pictName: "/galerie/4.jpeg",
  },
  {
    pictName: "/galerie/5.jpeg",
  },
  {
    pictName: "/galerie/6.jpeg",
  },
  {
    pictName: "/galerie/7.jpeg",
  },
  {
    pictName: "/galerie/8.jpeg",
  },
  {
    pictName: "/galerie/9.jpeg",
  },
  {
    pictName: "/galerie/10.jpeg",
  },
  {
    pictName: "/galerie/11.jpeg",
  },
  {
    pictName: "/galerie/12.jpeg",
  },
  {
    pictName: "/galerie/13.jpeg",
  },
  {
    pictName: "/galerie/14.jpeg",
  },
  {
    pictName: "/galerie/15.jpeg",
  },
  {
    pictName: "/galerie/16.jpeg",
  },
  {
    pictName: "/galerie/17.jpeg",
  },
  {
    pictName: "/galerie/18.jpeg",
  },
  {
    pictName: "/galerie/19.jpeg",
  },
  {
    pictName: "/galerie/20.jpeg",
  },
  {
    pictName: "/galerie/21.jpeg",
  },
  {
    pictName: "/galerie/22.jpeg",
  },
  {
    pictName: "/galerie/23.jpeg",
  },
  {
    pictName: "/galerie/24.jpeg",
  },
  {
    pictName: "/galerie/25.jpeg",
  },
  {
    pictName: "/galerie/26.jpeg",
  },
  {
    pictName: "/galerie/27.jpeg",
  },
  {
    pictName: "/galerie/28.jpeg",
  },
  {
    pictName: "/galerie/29.jpeg",
  },
  {
    pictName: "/galerie/30.jpeg",
  },
];

const GaleriePage = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="lg:hidden block">
        <HeaderMobile />
      </div>
      <div className="text-4xl font-bold my-9 text-center bg-blue-950 w-full text-white p-7">
        Galerie photo
      </div>
      <div className="flex justify-center bg-slate-900">
        <div className="container  justify-center grid lg:grid-cols-3 grid-cols-1 gap-4">
          {pictures.map((picture) => (
            <div className="p-4">
              <Image
                src={picture.pictName}
                width={400}
                height={800}
                alt="Galerie photo"
                className="lg:max-w-96 border-white border-8"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GaleriePage;
