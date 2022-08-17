import React from "react";
import Link from "next/link";
const Navbar = ({ title }) => {
  return (
    <>
      <header className="text-gray-600 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/">
              <span className="ml-3 text-xl cursor-pointer">{title}</span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
            </Link>
            <Link href="/blogs">
              <a className="mr-5 hover:text-gray-900 cursor-pointer">Blogs</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
            </Link>
          </nav>
        </div>
      </header>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
    </>
  );
};

export default Navbar;
