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
    <div className="flex w-full">
      <div className="bg-blue-800 max-w-[50%]">
        <div className="container p-4 text-4xl text-white font-bold text-center">
          {titlePage}
        </div>
        <div className="text-xl text-white font-light container">
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
