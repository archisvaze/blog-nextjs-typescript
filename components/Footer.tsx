import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full">
            <div className="container mx-auto flex items-center flex-col sm:flex-row py-8">
                <Link
                    href="/"
                    className="flex items-center justify-center md:justify-start text-gray-900">
                    <Image alt="" src={'/logo.png'} height={30} width={30} />
                    <span className="ml-3 text-md">Archis's Blog</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2022 Archis's Blog
                </p>
            </div>
        </footer>
    );
};

export default Footer;