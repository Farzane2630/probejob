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
        alt="W & S agentur home"
        priority
        placeholder={`data:image/${'W&S'}`}
      /> </Link>
    </header>
  )
}

export default Header