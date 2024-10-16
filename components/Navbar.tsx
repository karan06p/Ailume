'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserDetailsProps } from '@/app/dashboard/layout'

export default function Navbar({isSignedIn} : UserDetailsProps) {
  return (
    <div className='md:hidden w-full flex justify-between items-center py-5 px-6 sm:px-8 shadow-lg rounded-xl'>
      <Image src={logo} alt='logo' width={170} height={170} className='sm:w-60'/>
      <div className={`${isSignedIn ? '' : 'hidden'} flex items-center gap-8`}>
        <UserButton />
        <MobileSidebar />
      </div>
      <div className={`${isSignedIn ? 'hidden' : ''}`}>
        <Button variant="custom" className='w-28 sm:w-36 rounded-full' ><Link href='/sign-in'>Login</Link></Button>
      </div>
    </div>
  )
}
