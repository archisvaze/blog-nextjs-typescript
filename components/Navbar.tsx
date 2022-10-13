import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex item-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image alt="" src="/logo.png" height={30} width={30} />
                    <span className="font-bold ml-2 text-primary">
                        Archis's Blog
                    </span>
                </div>
            </Link>
           
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    {/* <Link href="#" className="hover:text-gray-400">
                        Log in
                    </Link> */}
                </li>
                <li className="font-medium text-gray-600">
                    {/* <Link
                        href="#"
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                        Sign up
                    </Link> */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;