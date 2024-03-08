import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { BiMap } from 'react-icons/bi';
import { MdPhoneInTalk } from 'react-icons/md';
import { Button } from './ui/button';
import { BsHouse } from 'react-icons/bs';

const Menu = () => {

    const mainMenu = [
        {
          menuId: 0,
          labelMenu: "Accueil",
          menuLink: "/",
        },
        {
          menuId: 0,
          labelMenu: "À propos",
          menuLink: "/qui-sommes-nous/presentation",
        },
        {
          menuId: 0,
          labelMenu: "Expertises",
          menuLink: "/expertises",
        },
        {
          menuId: 0,
          labelMenu: "Blog",
          menuLink: "/blog",
        },
        {
          menuId: 0,
          labelMenu: "Contacts",
          menuLink: "/contacts",
        },
      ];
      
  return (
    <div>
        <div className="grid place-items-center grid-cols-1 p-8 rounded-lg top-0">
          <div className="flex justify-center gap-x-4 uppercase bg-orange-600 w-full text-white text-xl font-medium top-0 fixed">
            <div className='flex my-3'>
            {mainMenu.map((menu) => (
              <Link key={menu.menuId} href={menu.menuLink}>
              <div
                className="hover:bg-[#0d318d] hover:p-4 p-4 hover:animate-accordion-down"
              >
                {menu.labelMenu}
              </div>
              </Link>
            ))}
            </div>
            <div className='my-6'>
            <Button variant={"outline"} className='uppercase font-semibold'>
              {" "}
              <BsHouse size={20} />{" "} Réserver maintenant
            </Button>
            </div>
          </div>
        
          <div className="w-full flex justify-between bg-white p-4 mt-24">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/pograwa_holding.png"}
                  width={200}
                  height={70}
                  alt="Pograwa Holding"
                  className='w-full'
                />
              </Link>
            </div>
              <div className='flex'>
                <div className="flex p-1 pb-3">
                  <div className="flex text-blue-700 p-3 text-3xl font-bold">
                    <MdPhoneInTalk size={32} color="blue" /> +225 27 22 41 92 28
                  </div>
                  <div className='text-3xl'>•</div>
                  <div className="flex p-3 bg-white text-2xl font-light">
                    <BiMap size={32} /> Abidjan Cocody 2 plateaux St Jacques
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default Menu


/**<div className="flex gap-3">
                  <div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selectionnez une ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Ville</SelectLabel>
                          <SelectItem value="abidjan">
                            Abidjan
                          </SelectItem>
                          <SelectItem value="songon">Songon</SelectItem>
                          <SelectItem value="bassam">
                            Grand Bassam
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Nombre de pièces" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Pièces</SelectLabel>
                          <SelectItem value="2">2 pièces</SelectItem>
                          <SelectItem value="3">3 pièces</SelectItem>
                          <SelectItem value="4">4 pièces</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                </div> */