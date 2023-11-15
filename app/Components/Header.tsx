import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex flex-row, px-2 py-2'>
      <Link href="https://www.wus.agency/">
      <Image
        src="/images/weiseundstark_logo.jpg"
        width={100}
        height={50}
        alt="Picture of the author"
        priority
      />
      {/* <img src="../../public/weiseundstark_logo.jpg" alt="W & S Agentur - home" className="logo" /> */}
      </Link>
    </header>
  )
}

export default Header