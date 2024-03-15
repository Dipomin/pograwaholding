import Image from "next/image";
import React from "react";

const Temoignage = () => {
  return (
    <section className="w-full bg-blue-800">
      <div className="grid grid-cols-1 lg:flex justify-center">
        <div>
          <h2 className="text-2xl uppercase text-orange-400 text-center pt-16">
            Témoignages
          </h2>
          <div className="text-3xl lg:text-5xl font-bold text-white text-center my-10">
            Nos clients parlent de nous
          </div>
          <div className="container flex justify-center gap-2 lg:gap-6">
            <div>
              <Image
                src={"/temoin-1.jpg"}
                width={200}
                height={200}
                alt="Pograwa Holding"
                className="rounded-full border-8 border-orange-400 opacity-70"
              />
            </div>
            <div>
              <Image
                src={"/temoin-2.jpg"}
                width={250}
                height={250}
                alt="Pograwa Holding"
                className="rounded-full border-8 border-orange-400"
              />
            </div>
            <div>
              <Image
                src={"/temoin-3.jpg"}
                width={200}
                height={200}
                alt="Pograwa Holding"
                className="rounded-full border-8 border-orange-400 opacity-70"
              />
            </div>
          </div>
          <div className="lg:w-[800px] flex pb-14">
            <div className="text-5xl lg:text-8xl font-black text-orange-300">{"’’"}</div>
            <div className="text-base italic lg:text-xl font-light text-white text-center pt-4">
              La villa que j'ai achetée avec Pograwa Holding est située dans un
              quartier calme et résidentiel, à proximité de toutes les
              commodités. Elle est spacieuse, lumineuse et dotée d'un jardin
              magnifique. Les finitions sont de grande qualité et les matériaux
              utilisés sont nobles.
            </div>
            <div className="text-5xl lg:text-8xl font-black text-orange-300">{"’’"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Temoignage;
