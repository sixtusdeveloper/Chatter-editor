import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
       <Link href="/" className='md:flex-1'>
         <Image 
          src="/assets/images/logo.png"
          alt="Logo on large screen"
          width={120}
          height={40}
          className='hidden md:block'
         />

         

         <Image 
          src="/assets/images/logo-sm.png"
          alt="Logo on small screen"
          width={32}
          height={20}
          className='mr-2 md:hidden'
         />
       </Link>

       <Link href="https://chatter-new-version.vercel.app/">
        <a>
          Home page
        </a>
       </Link>
       {children}
    </div>
  )
}

export default Header