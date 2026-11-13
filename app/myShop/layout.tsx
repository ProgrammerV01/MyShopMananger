import { Geist, Lusitana } from "next/font/google"
import Nav from "./util/navBar";
import { Burger } from "./util/burger";
const lusi=Lusitana({weight:"400",subsets:['latin']});
const geist=Geist({subsets:['latin'],weight:"400"});
export default function Layout({children}:LayoutProps<"/">){

return (<div className="h-full w-full flex flex-col">
    <Nav ></Nav>
    <Burger></Burger>
<main >  {children}</main>
  


</div>)

}