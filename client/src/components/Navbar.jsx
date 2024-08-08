import { useState } from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return (

    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-black mb-4 md:mb-0">
          Home
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray	flex flex-wrap items-center text-lg justify-center">
          <Link
            to="/home"
            className="mr-5 text-black rounded-md  hover:text-gray"
          >
            How to Play
          </Link>
          <Link
            to="/howtoplay"
            className="mr-5 text-black rounded-md  hover:text-gray"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="mr-5 text-black rounded-md  hover:text-gray"
          >
            Sign UP
          </Link>
          <Link
            to="/signup"
            className="mr-5 text-black rounded-md  hover:text-gray"
          >
          </Link>
        </nav>
        {/* ... */}
      </div>
    </header>
  );
}

export default Navbar;