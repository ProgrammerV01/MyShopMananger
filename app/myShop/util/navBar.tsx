import { Open_Sans } from "next/font/google"
import Link from "next/link"
import logo from "../lib/logo.svg"
import Image from "next/image"
import { Bars3Icon } from "@heroicons/react/16/solid"
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })
export default function Nav() {

    return (

        <div className={`${openSans.className} antialiased bg-gray-800 border-4 top-0 mb-5 hidden md:block sticky`}>
            <nav className="flex flex-row  gap-5  p-5 justify-between items-center">
                <Link href="/" className="flex flex-row flex-nowrap gap-5 justify-between items-center" >
                    <span className="text-3xl">My Retail</span>
                    
                </Link>
                <div className="flex flex-row gap-5 justify-center items-center" aria-label="Link's div">
                    <Link href="/myShop/login" className="border-5 p-4 hover:text-purple-700">Login</Link>
                    <Link href="/myShop/Signin" className="border-5 p-4 hover:text-purple-700">Signin</Link>
                    <Link href="/myShop/AboutUs" className="border-5 p-4 hover:text-purple-700">AboutUs</Link>

                </div>

            </nav>



        </div>

    )



}
