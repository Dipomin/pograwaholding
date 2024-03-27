"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { BiMap, BiSearchAlt } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Josefin_Sans } from "next/font/google";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const josefin = Josefin_Sans({ subsets: ["latin"] });

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselPicts = [
    {
      idPict: 0,
      pictLink: "/00.png",
    },
    {
      idPict: 1,
      pictLink: "/01.png",
    },
    {
      idPict: 2,
      pictLink: "/02.png",
    },
    {
      idPict: 3,
      pictLink: "/sait-x.png",
    },
  ];

  return (
    <div className="lg:container w-full items-center lg:pb-24">
      <div className="relative z-10">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseOver={plugin.current.play}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from(carouselPicts).map((carousel) => (
              <CarouselItem key={carousel.idPict}>
                <div className={josefin.className}>
                  <Image
                    src={carousel.pictLink}
                    width={1600}
                    height={600}
                    alt="Pograwa Holding"
                    className=" items-stretch"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
