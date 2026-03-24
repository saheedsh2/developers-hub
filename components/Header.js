import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'
import { HiMiniPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";


function Header() {
    const {data:session} = useSession();
  return (
    <div 
    className='flex justify-between p-4 border-b-[2px] border-gray-400'>
            <Image 
            src="/images/logo.png" 
            width={140} 
            height={140}
            alt="logo"
            />
         <div className='flex gap-3'>
         <button 
         className='px-3 p-2 bg-black text-white  flex items-center rounded-full'> 
         <HiMiniPencilSquare className='sm:hidden'/>
         <span className='hidden sm:block'>CREATE POST</span></button>
         <button
          className='px-3 p-2 bg-gray-600 text-gray-300 rounded-full'
           
         >
            {!session? 
            
            <span onClick={() => signIn()} className='hidden sm:block'>
                Sign In</span>
            :<span onClick={() => signOut()} className='hidden sm:block'>
                Sign Out</span>}
            </button>

         {session?.user?.image && (
  <Image 
    src={session.user.image}
    width={50}
    height={50}
    className='rounded-full'
    alt='profile'
  />
)}
          </div>
    </div>
  )
}

export default Header