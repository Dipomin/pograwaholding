import React from "react";
import Image from "next/image";

interface titlePageProps {
  titlePage: string;
  headerPageImage: string;
  titleDesc: string;
}

const HeaderPage = ({
  titlePage,
  headerPageImage,
  titleDesc,
}: titlePageProps) => {
  return (
    <div className="lg:flex w-full">
      <div className="bg-blue-800 p-2 lg:max-w-[50%]">
        <div className="container lg:p-4 text-2xl lg:text-4xl text-white font-bold text-center">
          {titlePage}
        </div>
        <div className="lg:container p-2 text-lg: lg:text-xl text-white font-thin lg:font-light">
          {titleDesc}
        </div>
      </div>

      <div className="h-60 overflow-hidden">
        <Image
          src={headerPageImage}
          width="700"
          height="300"
          alt="Pograwa Holding"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeaderPage;
