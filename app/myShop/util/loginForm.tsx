'use client'
export default function LoginForm(){
    return (
<form className="border-4 flex  gap-5 flex-col bg-gray-800 p-10 border-4 border-white text-white md:justify-around justify-center items-center ">
<div className="flex flex-col items-center justify-center p-5 gap-2"><label htmlFor="user_id" >User Id:</label><input id="user_id" className="border-2 border-white" type="number"></input>
</div><div className="flex flex-col items-center justify-center p-5 gap-2"><label htmlFor="user_password" >Password:</label>
<input id="user_password" required className="border-2 border-white" type="text" minLength={8}></input>
</div>

<button type="submit" className="p-5 hover:text-black hover:border-black border-3 border-white">Submit</button>
</form>

    )
}