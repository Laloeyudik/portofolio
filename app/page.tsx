"use client";

import React from "react";
import Image from "next/image";
import Lines from "@/public/icon/Line.svg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { dataTechStack } from "@/data/TechStack";
import HeroSection from "@/components/blocks/HeroSection";
import { BookType, Database, Layers, Wrench } from "lucide-react";

export default function Homes() {
  const [activeTab, setActiveTab] = React.useState<
    "languages" | "frameworks" | "tools" | "databases"
  >("languages");

  return (
    <div className="relative py-0">
      <HeroSection />
      <section className="mt-[46px]">
        <div>
          <h2 className="text-[28px] lg:text-[32] font-[700] font-space-grotesk text-secondary">
            Tech Stack
          </h2>
        </div>

        <div className="flex space-x-5 mt-[24px] items-center">
          {[
            { key: "languages", icon: <BookType /> },
            { key: "frameworks", icon: <Layers /> },
            { key: "tools", icon: <Wrench /> },
            { key: "databases", icon: <Database /> },
          ].map((item, index) => (
            <div key={item.key} className="flex items-center gap-3">
              <Button
                onClick={() => setActiveTab(item.key as  "languages" | "frameworks" | "tools" | "databases")}
                variant={activeTab === item.key ? "default" : "outline"}
                className={`p-2 ${
                  activeTab === item.key
                    ? "bg-secondary text-accent"
                    : "hover:bg-secondary hover:text-accent"
                }`}
              >
                {item.icon}
              </Button>
              {index < 3 && <Image src={Lines} alt="line" loading="eager" className="hidden wrap-anywhere" />}
            </div>
          ))}
        </div>
        <div className="mt-[36px] font-space-grotesk capitalize text-[20px] lg:text-[22px]">{activeTab} :</div>
        <div className="mt-[16px] flex gap-[12px] flex-wrap">
          {dataTechStack[activeTab].map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-2 items-center text-[16px] md:text-[22px] px-4 py-[6px] text-secondary bg-primary outline-1 outline-secondary hover:outline-accent hover:text-accent w-fit rounded-[4px]"
              whileHover={{ rotate: 7 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src={item.icon ?? Lines}
                alt="logo bahasa pemrograman"
                className="w-6 h-6 aspect-square"
                loading="eager"
              />{" "}
              {item.title}
            </motion.div>
          ))}
        </div>
      </section>


      <div className="absolute h-screen w-full mx-auto inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[394px] h-[394px] bg-accent rounded-full blur-[400px] mx-auto"></div>
      </div>
    </div>
  );
}
