import Image from "next/image";
import logo from "./myShop/lib/logo.svg"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start gap-10 border-10 border-gray-700" >
       
        <div className="flex flex-row justify-center items-center gap-6 text-center self-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">MyRetail App</h1>
                   
        </div>
        <span className="self-center bg-white text-black rounded-xl p-10 text-2xl hover:text-white hover:bg-gray-700 font-bold"><Link href="/myShop">Get Started</Link></span>
      </main>
    </div>
  );
}
