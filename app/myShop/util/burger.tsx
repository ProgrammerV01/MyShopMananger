'use client'
import { Open_Sans } from "next/font/google"
import Link from "next/link"
import logo from "../lib/logo.svg"
import Image from "next/image"
import clsx from "clsx"
import { Bars3Icon } from "@heroicons/react/16/solid"
import { useState } from "react"
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })

export function Burger(){
const [isOpen,setisOpen]=useState(false)
return (

        <div className={clsx(` ${openSans.className} md:hidden text-ellipsis sm:block antialiased bg-gray-800 opacity-80 border-4 top-0 mb-5 `,
            {"fixed left-0 top-0 w-[30%] h-[80%]":isOpen==true},{
                "fixed left-0 top-0 w-25 h-25 bg-gray-800 hover:opacity-70":isOpen===false
            }
        )}>
           <button className="p-5 text-white text-3xl hover:text-red-700 flex flex-row items-center justify-center" onClick={()=>{
            setisOpen(!isOpen);
           }}>{isOpen?("X"):(<Bars3Icon width={30} height={30}></Bars3Icon>)}</button>
           {isOpen?(<nav className="flex flex-col  gap-5  p-5 justify-between items-center h-[80%] ">
                <Link href="/" className="flex flex-row flex-nowrap gap-5 justify-between items-center" >
                    <span className="text-3xl ">My Retail</span>
                    
                </Link>
                <div className="flex flex-col gap-10 justify-center items-center h-[80%]" aria-label="Link's div">
                    <Link href="/myShop/login" className="border-4 p-4 hover:text-black hover:bg-gray-600 " >login</Link>
                    <Link href="/myShop/Signin" className="border-4 p-4 hover:text-black">signin</Link>
                    <Link href="/myShop/AboutUs" className="border-4 p-4 hover:text-black">aboutUs</Link>

                </div>

            </nav>// border-4


):""}
            
        </div>

    )


}