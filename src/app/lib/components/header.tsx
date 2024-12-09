"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8 flex-wrap items-center mb-4 lg:mb-12 bg-white dark:bg-black sticky top-0 z-50 py-2">
      <Image
        className="rounded-full ring-2 ring-blue-400 border border-gray-500"
        src="/images/profile.jpeg"
        alt="profile image"
        width={50}
        height={50}
      />
      <ul className="flex gap-4 text-[#666] text-2xl">
        <li className="cursor-pointer hover:text-blue-600 hover:scale-125 duration-500 ease-in-out">
          <Link href={pathname === "/" ? "/work" : "/"}>
            {pathname == "/" ? "Work" : "Home"}
          </Link>
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:scale-125 duration-500 ease-in-out">
          <Link href="https://akramnarejo.medium.com" target="_blank">
            blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
