import Image from "next/image"
import logo from "../lib/logo.svg"
import LoginForm from "../util/loginForm"
export default function Login(){
    return (
<div className="flex flex-col gap-10 mt-10 justify-center items-center text-3xl">
   <div className="flex flex-col justify-center items-center"> 
    
<h2>Log In</h2>
<Image src={logo} width={40} alt="Logo" height={40}></Image>
</div>

   <div className="flex flex-row justify-center items-center text-3xl"> 
<LoginForm></LoginForm>
</div>
</div>

    )
}