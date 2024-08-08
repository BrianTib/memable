import { useState } from "react";

const nav = () => {
 const [toggle, setToggle] = useState(false);

     function openMenu(){
        setToggle(true)
    };
    function closeMenu() {
        setToggle(fales)
    }
    return (
        <>
        <div className="flex items-center jusify-between p-10 lg: flex row">
        </div><div className="space-x-4">
                <div className='ssm:hidden lg:block space-x-2'>
                    <a href="#howtoplay" className="text-black hover:bg-gray-400 rounded-full px-5 py-2 text-xl">How to Play</a>
                    <a href="#login" className="text-black hover:bg-gray-400 rounded-full px-5 py-2 text-xl">Login</a>
                    <a href="#signup" className="text-black hover:bg-gray-400 rounded-full px-5 py-2 text-xl">Sign Up</a>

                </div>
            </div></>
    )
   
}