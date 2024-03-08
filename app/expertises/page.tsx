import Footer from '@/components/footer'
import PageMenu from '@/components/page-menu'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Expertises = () => {
  return (
    <div>
        <PageMenu />
        <div className='container pt-10'>
            <div className='text-4xl font-bold uppercase text-center p-14'>
                Notre expertises
            </div>
            <div className='flex gap-4 pb-16 justify-center'>
                <div className='text-2xl text-black w-[400px]'>
                    <Link href="/expertises/promoteur-immobilier">
                            <div className='hover:opacity-5 hover:animate-pulse w-full overflow-hidden h-80'>
                                <Image 
                                    src={"/promotion-immobiliere-VILLA-DUPLEX-NANCY-1.jpeg"}
                                    width={400}
                                    height={400}
                                    alt='Promotion immobilière'
                                    className='w-full'
                                />
                            </div>
                            <div className='bg-orange-600 hover:bg-orange-700 text-white text-3xl font-bold text-center p-8'>
                                Promotion immobilier
                            </div>
                    </Link>
                </div>
                <div className='text-2xl text-black w-[400px]'>
                    <Link href="/expertises/industrie-extractive">
                            <div className='hover:opacity-5 hover:animate-pulse w-full overflow-hidden h-80'>
                                <Image 
                                    src={"/32699.jpg"}
                                    width={400}
                                    height={400}
                                    alt='Promotion immobilière'
                                    className='w-full'
                                />
                            </div>
                            <div className='bg-orange-600 hover:bg-orange-700 text-white text-3xl font-bold text-center p-8'>
                            Industrie extractive
                            </div>
                    </Link>
                </div>
                <div className='text-2xl text-black w-[400px]'>
                    <Link href={"/expertises/technologie"}>
                            <div className='hover:opacity-5 hover:animate-pulse w-full overflow-hidden h-80'>
                                <Image 
                                    src={"/10723.jpg"}
                                    width={400}
                                    height={400}
                                    alt='Promotion immobilière'
                                    className='w-full'
                                />
                            </div>
                            <div className='bg-orange-600 hover:bg-orange-700 text-white text-3xl font-bold text-center p-8'>
                                Technologie
                            </div>
                    </Link>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default Expertises