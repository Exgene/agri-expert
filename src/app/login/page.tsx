"use client";
import { AuroraBackground } from "@/components/ui/aurorabg";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-bg";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import React from "react";

const LoginPage = () => {
  const session = useSession();
  return (
    <section className="min-h-screen">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          {/* <div className="text-center text-3xl font-bold md:text-7xl text-white">
            Background lights are cool you know.
          </div>
          <div className="py-4 text-base font-extralight md:text-4xl text-neutral-200">
            And this, is chemical burn.
          </div>
          <button className="w-fit rounded-full  px-4 py-2  bg-white text-black">
            Debug now
          </button> */}
          <div>
            {session?.data?.user ? (
              <>
                <div className="flex flex-col gap-2 text-xl text-white">
                  Registered user: {session.data.user.name}
                  <Button
                    onClick={() => signOut()}
                    className="bg-white text-black hover:bg-white/85 hover:text-black"
                  >
                    Sign Out
                  </Button>
                  <Link
                    href={"https://agri-expert-int7.onrender.com"}
                    // hover:scale mt-8 cursor-pointer rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-2 text-base font-medium text-white shadow-xl transition duration-200 focus:ring-2 focus:ring-blue-400
                    className="cursor-pointer rounded-full border-none bg-gradient-to-b from-blue-500 to-blue-600 py-2 pb-3 text-center text-base font-medium text-white shadow-xl transition duration-200 hover:scale-105 hover:text-white focus:ring-2 focus:ring-blue-400"
                  >
                    Go to Chat Application!
                  </Link>
                </div>
              </>
            ) : (
              <Button
                onClick={() => signIn("google")}
                className="bg-white text-black hover:bg-white/85 hover:text-black"
              >
                Sign in
              </Button>
            )}
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default LoginPage;
