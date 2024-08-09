import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function LinkItem({ to, text, isActive }) {
    const active = isActive(to);

    return (
        <li className="my-2 md:my-0">
            <Link
                to={to}
                className={`block py-3 md:py-2 px-3 ${active ? 'text-lime-600' : 'text-black'} hover:underline`}>
                {text}
            </Link>
        </li>
    );
}

function ButtonItem({ text, theme, to }) {
    const themeClass =
        theme === 'light'
            ? 'bg-white text-black border-2 border-gray-500'
            : theme === 'danger'
              ? 'bg-white text-red-500 border-2 border-red-500'
              : 'bg-black text-white';

    return (
        <Link
            to={to}
            className={`block py-2 px-4 md:px-8 xl:px-12 ${themeClass} rounded-lg w-full md:w-auto`}>
            {text}
        </Link>
    );
}

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const isActive = path => {
        return location.pathname === path;
    };

    return (
        <nav>
            <div className="w-full flex flex-wrap items-center justify-between px-2 md:px-1 lg:px-12">
                <Link to="/" className="flex items-center space-x-5 rtl:space-x-reverse">
                    <img src="logo.png" className="h-auto w-20 md:w-20" alt="Memable Logo" />
                    <span className="self-center text-3xl md:text-4xl text-black font-bold whitespace-nowrap">
                        Memable
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-black lg:hidden"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-0 border border-gray-100 space-y-4 md:space-y-0 md:flex-row lg:gap-2 xl:gap-8 rtl:flex-row-reverse">
                        {isLoggedIn && (
                            <LinkItem isActive={isActive} to="/profile" text="John Doe" />
                        )}
                        <LinkItem isActive={isActive} to="/how-to-play" text="How to play" />
                        <LinkItem isActive={isActive} to="/leaderboards" text="Leaderboards" />
                        <LinkItem isActive={isActive} to="/top-memes" text="Top Memes" />
                        {isLoggedIn ? (
                            <ButtonItem text="Logout" theme="danger" />
                        ) : (
                            <>
                                <ButtonItem to="/login" text="Login" />
                                <ButtonItem to="/login" text="Sign Up" theme="light" />
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
