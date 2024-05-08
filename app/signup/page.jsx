"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home </a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <div className="relative">
                        <button
                            className="block h-10 w-10 bg-gray-200 text-gray-600 rounded-full focus:outline-none focus:bg-gray-300"
                            onClick={toggleMenu}
                        >
                            {/* Icon for the dropdown button (e.g., a downward arrow) */}
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <ul>
                                   
                                    <li>
                                        <Link
                                            href="/signup/StaffSignUp"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Signup as a Expert
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/signup/StdSignUp"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Signup as Student
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default page
