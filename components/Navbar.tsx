import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './ui/MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-5 py-4 lg:px-10 '>
      <Link href='/' className='flex items-center gap-1'>
        <Image 
        src='/icons/logo.svg'
        width={32}
        height={32}
        alt='zooom'
        className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>DBOOM</p>
      </Link>
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar