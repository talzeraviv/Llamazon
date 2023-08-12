"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const { data: session } = useSession();

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center space-x-2 bg-amazon_blue p-1 flex-grow py-1.5">
        {/* image */}
        {/*TODO: Edit to remove padding on the actual picture. */}
        <div>
          <Image
            src="/Llamazon-Edited.png"
            height={30}
            width={100}
            className="w-auto h-auto cursor-pointer"
            alt="logo"
          />
        </div>
        {/* location */}
        <div
          className={`${
            session ? "visible" : "invisible"
          } hidden sm:flex items-center mx-1 whitespace-nowrap text-white link`}
        >
          <MapPinIcon className="h-4 w-4 mt-4" />
          <div>
            <p className="text-gray-300 md:text-xs">
              {session ? `Deliver to ${session.user.name.split(" ")[0]}` : ""}
            </p>
            <p className="font-bold md:text-sm">Tomer 90</p>
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
        <div onClick={!session ? signIn : signOut} className="text-white">
          <ul className="flex items-center space-x-6 mx-1 whitespace-nowrap">
            <li key="username-and-account-link" className="link">
              <p className="md:text-xs">
                {session ? `Hello, ${session.user.name}` : `Sign In`}
              </p>
              <p className="font-bold md:text-sm">Account & Lists</p>
            </li>

            <li key="returns-and-orders" className="link">
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
        <p className="link">Top Llama`s In Town</p>
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
