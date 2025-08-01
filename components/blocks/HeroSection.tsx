"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import ImageProfile from "@/public/image/myImage.png";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mt-[46px] lg:mt-[86px] flex flex-col justify-center  max-w-6xl mx-auto"
    >
      <div className="inline-block md:inline-flex md:self-stretch  gap-[46px] ">
        <Image
          src={ImageProfile}
          alt="image profile"
          className="w-[96px] h-[96px] aspect-square mb-3 md:mb-0 hidden lg:block"
          loading="eager"
        />
        <div>
          <p className="text-[20px] md:text-[24px] text-secondary font-[500]">
            Hello{" "}
            <motion.span
              role="img"
              aria-label="wave"
              className="inline-block text-3xl"
              animate={{
                rotate: [0, 20, -10, 20, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              👋
            </motion.span>
            , I’m
          </p>

          <h1 className=" text-[36px] md:text-[56px] lg:text-[72px] font-space-grotesk font-bold text-accent leading-tight tracking-tight">
            Lalu Wahyudi
          </h1>
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-4">
        <h2 className="text-[18px] md:text-[24px] lg:text-[30px] text-secondary font-inter font-medium leading-snug">
          <em>
            <b>Software Engineer</b>
          </em>{" "}
          focused on scalable, maintainable, and secure backend architecture.
        </h2>
        <p className="text-[16px] md:text-[22px] lg:text-[28px] text-secondary font-inter leading-relaxed">
          I am the leader of a startup that supports over{" "}
          <span className="underline text-accent font-medium">
            1 million MSME
          </span>{" "}
          entrepreneurs and possess more than 3+ years of experience in backend
          development.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-[46px] md:mt-[56px]">
        <Button
          size={"sm"}
          className="order-2 md:order-1 w-fit bg-accent text-primary text-[16px] md:text-[17px] hover:bg-transparent hover:outline hover:outline-accent hover:text-accent items-center space-x-2.5"
        >
          View Projects <ArrowUpRight />
        </Button>

        <div className="flex gap-1.5 items-center order-1 md:order-2">
          <Link
            href="https://github.com/Laloeyudik"
            target="_blank"
            className="p-2 text-thirty hover:rounded-md hover:bg-secondary hover:text-primary"
          >
            <Github />
          </Link>
          <Link
            href="#"
            className="p-2 text-thirty hover:rounded-md hover:bg-secondary hover:text-primary"
          >
            <Linkedin />
          </Link>
          <Link
            href="#"
            className="p-2 text-thirty hover:rounded-md hover:bg-secondary hover:text-primary"
          >
            <Instagram />
          </Link>
          <Link
            href="#"
            className="p-2 text-thirty hover:rounded-md hover:bg-secondary hover:text-primary"
          >
            <Youtube />
          </Link>
        </div>
      </div>
    </section>
  );
}
