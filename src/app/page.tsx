"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-bg";
import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  return (
    <>
      <motion.main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
        >
          <p className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
            Farmers meet the power of AI
          </p>
          <p className="mt-4 bg-gradient-to-b from-white/80 to-white/60 bg-clip-text text-xl text-transparent drop-shadow-2xl">
            Your personal bot for all agriculture related queries
          </p>
          <Link
            href="/login"
            className="hover:scale mt-8 cursor-pointer rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-2 text-base font-medium text-white shadow-xl transition duration-200 focus:ring-2 focus:ring-blue-400"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.main>
      <section
        className="bg-grid-small-white/[0.2] relative flex min-h-screen flex-col items-center overflow-hidden bg-black"
        id="services"
      >
        <div className="w-full bg-white py-14 text-center text-4xl font-bold">
          Services
        </div>
        <BackgroundGradientAnimation containerClassName="pb-20"></BackgroundGradientAnimation>
        {/* <div className="absolute inset-0 top-40 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 border text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"> */}
        {/* <div className="absolute inset-0 top-40 mx-auto flex w-full max-w-2xl flex-wrap gap-4 ">
          <WobbleCard
            containerClassName="bg-pink-800 h-[400px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="bg-pink-800 h-[400px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
        </div> */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.2,
          }}
          className="absolute inset-0 top-40 mx-auto mt-8 grid max-w-xs gap-x-4 gap-y-2 px-2 sm:grid-cols-1 md:max-w-xl md:grid-cols-2 md:gap-y-2 lg:max-w-6xl lg:grid-cols-3"
        >
          <WobbleCard containerClassName="relative col-span-1 max-w-xl">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Crop Selection Assistance
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              The Agri-Expert analyzes factors such as soil type, climate
              conditions, and farmer preferences to recommend the most suitable
              crop varieties for a specific farm. It assists in mitigating
              risks, optimizing yields, and promoting sustainable farming
              practices by providing personalized guidance on crop selection and
              rotation strategies.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-1 max-w-xl bg-pink-800">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Soil Health Monitoring
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              The Agri-Expert assists farmers in monitoring soil health by
              providing guidance on soil testing procedures, interpreting soil
              test results, and implementing soil conservation practices. It
              offers recommendations for nutrient management, soil amendments,
              and erosion control measures to maintain soil fertility and
              sustainability.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-1 max-w-xl">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Weather Forecasting
            </h2>
            <p className="mt-4 max-w-[28rem] text-left text-base/6 text-neutral-200">
              By integrating with weather APIs or databases, the Agri-Expert
              provides real-time weather updates and forecasts specific to the
              farmer's location. This information helps farmers plan their
              agricultural activities effectively, such as scheduling planting,
              harvesting, and irrigation operations based on weather patterns.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-1 max-w-xl bg-pink-800">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              General Farming Assistance
            </h2>
            <p className="mt-4 max-w-[28rem] text-left text-base/6 text-neutral-200">
              Farmers can ask the Agri-Expert questions on a wide range of
              farming topics, including pest identification, crop rotation
              strategies, soil conservation techniques, and organic farming
              practices. The Agri-Expert provides accurate and reliable answers
              based on its knowledge base and expertise in agricultural science.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-1 max-w-xl">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Research Updates
            </h2>
            <p className="mt-4 max-w-[28rem] text-left text-base/6 text-neutral-200">
              The Agri-Expert keeps farmers informed about the latest
              agricultural research findings, technological innovations, and
              best practices. It shares information on new crop varieties, pest
              control methods, sustainable farming techniques, and emerging
              trends in agriculture to help farmers stay updated and adopt
              innovative approaches.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-1 max-w-xl bg-pink-800">
            <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Risk Assesment
            </h2>
            <p className="mt-4 max-w-[28rem] text-left text-base/6 text-neutral-200">
              Farming involves inherent risks, including weather-related
              hazards, pest outbreaks, and market fluctuations. The Agri-Expert
              assesses risk factors and may recommend diversified cropping
              systems or risk management strategies to mitigate potential losses
              and maximize resilience.
            </p>
          </WobbleCard>
        </motion.div>
      </section>
    </>
  );
}
