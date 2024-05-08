"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import "@/styles/navbar.css";

import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// import Image from 'next/image';
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed z-[50] flex h-20 w-full items-center justify-end p-4 text-white transition-colors duration-700 sm:justify-center sm:px-6 ${
          scroll ? "bg-black/20 backdrop-blur-lg" : "bg-transparent"
        } ease-in-out`}
      >
        {/* Your existing content here */}
        <motion.div
          initial={{ width: 0, left: "50%", transform: "translateX(-50%)" }}
          animate={{
            width: scroll ? "100%" : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 h-[1px] w-full bg-[#e2e2e2]"
        ></motion.div>

        <Link
          href={"/#home"}
          className="absolute left-2 flex items-center justify-center gap-2 text-lg"
        >
          {/* <StarFilledIcon className="mt-[2px]"></StarFilledIcon> */}
          {/* <Image
            src={"/graduated.png"}
            alt="logo"
            width={20}
            height={20}
          ></Image> */}
          <Image
            src="/logoFarmer.png"
            alt="logo"
            width={40}
            height={40}
          ></Image>
          Agri-Expert
        </Link>
        <div className="hidden gap-x-4 sm:flex">
          <Link
            href={"/"}
            className="font-extralight duration-300 hover:font-normal"
          >
            About
          </Link>
          <Link
            href={"/#services"}
            className="font-extralight duration-300 hover:font-normal"
          >
            Services
          </Link>
        </div>
        <Link className="pb-10" href={"/login"}>
          {session?.user ? (
            <Avatar className="absolute right-16 top-[17px]">
              <AvatarImage src={session.user.image!} alt="img" />
              <AvatarFallback>
                {session?.user.name?.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Button
              variant={"outline"}
              // hover:scale mt-8 cursor-pointer rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-2 text-base font-medium text-white shadow-xl transition duration-200 focus:ring-2 focus:ring-blue-400
              className="absolute right-16 top-[17px] cursor-pointer rounded-full border-none bg-gradient-to-b from-blue-500 to-blue-600 pb-2 text-base font-medium text-white shadow-xl transition duration-200 hover:scale-105 hover:text-white focus:ring-2 focus:ring-blue-400"
            >
              Login
            </Button>
          )}
        </Link>

        <div className="z-50 flex sm:hidden">
          <div id="menuToggle" className="py-6 pr-3">
            <input type="checkbox" />
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>

            <ul
              id="menu"
              className="bg-black bg-opacity-40 pr-4 text-right backdrop-blur-lg"
            >
              <a
                className="mt-10 text-2xl"
                href={`/`}
                // onClick={() => setOpened(!opened)}
              ></a>
              <div className="mt-6 flex flex-col items-end gap-y-4 text-2xl">
                <Link
                  href={"/"}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  About
                </Link>
                <Link
                  href={"#services"}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  Services
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
