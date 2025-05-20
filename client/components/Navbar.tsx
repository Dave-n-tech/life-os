"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      <Link href={"/"}>
        <h1 className="text-green-600 font-bold p-4 text-xl">LifeOS</h1>
      </Link>
      <div className="flex items-center">
        <ul className="flex space-x-4 mr-4">
          <Link href={"/dashboard"}>
            <li
              className={`${
                pathname === "/dashboard" ? "text-green-600" : "text-white"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href={"/tasks"}>
            <li
              className={`${
                pathname === "/tasks" ? "text-green-600" : "text-white"
              }`}
            >
              Tasks
            </li>
          </Link>
          <Link href={"/journal"}>
            <li
              className={`${
                pathname === "/journal" ? "text-green-600" : "text-white"
              }`}
            >
              Journal
            </li>
          </Link>
        </ul>
        <button className="bg-green-600 px-4 py-2 rounded-lg">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
