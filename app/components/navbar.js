import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center px-8 py-4 bg-gradient-to-r from-green-300 to-lime-400 text-black shadow-md font-bold">
            <h1 className="text-2xl text-purple-800 font-extrabold tracking-wide">
                NanoLinks
            </h1>
            <ul className="flex gap-8 font-mono text-lg tracking-wide">
                <li className="hover:text-purple-700 transition-colors duration-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-purple-700 transition-colors duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:text-purple-700 transition-colors duration-300">
                    <Link href="/shorten">Shorten</Link>
                </li>
                <li className="hover:text-purple-700 transition-colors duration-300">
                    <Link href="/contact">Contact us</Link>
                </li>
            </ul>
            <div className="flex gap-6">
                <Link href="/shorten">
                    <button className="bg-green-500 text-white px-5 py-2 rounded-lg border border-green-700 shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                        Try Now
                    </button>
                </Link>
                <Link href="/github">
                    <button className="bg-lime-300 px-5 py-2 rounded-lg text-black border border-lime-500 shadow-md hover:bg-lime-600 hover:text-white hover:shadow-lg transition-all duration-300">
                        Github
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
