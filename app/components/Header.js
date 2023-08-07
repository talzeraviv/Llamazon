import React from "react";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center space-x-2 bg-amazon_blue p-2 flex-grow py-1.5">
        {/* image */}
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/Llamazon-Edited.png"
            width={100}
            height={0}
            className="cursor-pointer"
          />
        </div>

        {/* location */}
        <div className="hidden sm:flex items-end link whitespace-nowrap">
          <div className="text-white flex items-end pr-6">
            <MapPinIcon className="text-white h-4 w-4 mb-0.5" />
            <div className="flex flex-col">
              <p className="md:text-xs text-gray-300">Deliver to Tal</p>
              <p className="font-bold md:text-sm">Tomer 90</p>
            </div>
          </div>
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow flex-shrink-0 cursor-pointer bg-yellow-500">
          <input
            placeholder="Search Llamazon"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="p-2 h-full rounded-md hover:bg-yellow-600" />
        </div>

        {/* Right */}
        <div className="text-white">
          <ul className="flex items-center space-x-6 mx-6 whitespace-nowrap">
            <li key="username-and-account-link" className="link">
              <p className="md:text-xs">Hello, Tal Zer-Aviv</p>
              <p className="font-bold md:text-sm">Account & Lists</p>
            </li>

            <li key="orders-and-returns" className="link">
              <div className="md:text-xs">
                Returns <p className="font-bold">& Orders</p>
              </div>
            </li>

            <li key="shopping-cart" className="relative link flex items-center">
              <span className="absolute top-0 right-[-6px] md:right-6 h-4 w-4 bg-yellow-400 flex justify-center items-center rounded-full text-black font-bold text-sm">
                0
              </span>
              <ShoppingCartIcon className="h-9" />
              <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
        <Bars3Icon className="link h-6 mr-1" />
        <p className="link flex items-center font-bold">All</p>
        <p className="link">Prime Llama</p>
        <p className="link">Business Llama</p>
        <p className="link">Top Llama's In Town</p>
        <p className="link hidden lg:inline-flex">Electronic Llama</p>
        <p className="link hidden lg:inline-flex">Food & Groceries</p>
        <p className="link hidden lg:inline-flex">Hidden Gems</p>
        <p className="link hidden lg:inline-flex">Llama How-To</p>
        <p className="link hidden lg:inline-flex">LlamaCare</p>
      </div>
    </header>
  );
}

export default Header;
