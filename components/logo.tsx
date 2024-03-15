import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <div className='flex justify-center'>
            <Link href={"/"}>
                <Image
                src={"/pograwa_holding.png"}
                width={200}
                height={70}
                alt="Pograwa Holding"
                className=''
                />
            </Link>
        </div>
    </div>
  )
}

export default Logo