import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import file from "../../public/file.svg"
export default function Page(){


    return(<div className={clsx({"bg-blue-400":true},"flex flex-col justify-center items-center w-ful h-full")}>
        
        <div className="flex flex-col gap-10 m-[5%] items-start justify-start">
    <div className="flex flex-col gap-5 m-5 items-center justify-center"><h3 className="font-bold text-2xl">Check your register status </h3>
<div>
<Image width={45} height={50} src={file} alt="Demo image"/>
<p>Our build in live register tracker shows graphs of the profit,revenue,sales made during the live session.</p>
</div>
<hr className="w-full bg-white"/>

    </div>

      <div className="flex flex-col gap-5 m-5 items-center justify-center"><h3 className="font-bold text-2xl">Manage and track your profit , expenses , reciepts , invoices etc...</h3>
<div>
<Image width={45} height={50} src={file} alt="Demo image"/>
<p>All the data stored in the databse can be checked,deleted,edited.</p>
</div>
<hr className="w-full bg-white"/>
    </div>

      <div className="flex flex-col gap-5 m-5 items-center justify-center">

<h3 className="font-bold text-2xl">Use your built in register (cash only, no barcode)</h3>
<div>
<Image width={45} height={50} src={file} alt="Demo image"/>
<p>Simple to use register with the basic payments methodes including a tap showing the items selected and the option of creating a reciept .As well as choosing the items by name or id from the search bar of the cashier screen.</p>
</div>
<hr className="w-full bg-white"/>
    </div></div>
        <Link href="/register" className="hover:text-black text-red-900">None existing page</Link>
        </div>)
}