"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowUpRight, Logs, X } from "lucide-react";
import useModals from "@/hooks/useModal";
import { dataNavbar } from "@/data/Navbar";
const ToggleButtonProps = {
  isBurgerHandler: "isBurgerHandler",
};

export default function Navbar() {
  const { openModal, closeModal, isModalOpen } = useModals();
  return (
    <nav className="w-full mx-auto py-4 top-[56px] text-lg flex flex-col space-y-4 md:flex-row md:justify-between md:items-center sticky transition duration-300 bg-primary/15 dark:bg-primary/15 backdrop-blur-md z-30">
      {isModalOpen(ToggleButtonProps.isBurgerHandler) ? (
        <X onClick={() => closeModal()} className="cursor-pointer md:hidden" />
      ) : (
        <Logs
          onClick={() =>
            openModal(ToggleButtonProps.isBurgerHandler, undefined)
          }
          className="cursor-pointer md:hidden lg:hidden xl:hidden"
        />
      )}

      <div className="hidden md:flex lg:flex space-x-6 my-auto text-[24px]">
        {dataNavbar.map((item, index) => {
          const isHome = item.title === "Home";
          return (
            <Link
              key={index}
              href={item.path}
              className={`navItem ${isHome ? "font-bold" : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="">
        <Button size={"md"} className="text-[22px] items-center space-x-2.5 ">
          Ebooks <ArrowUpRight />
        </Button>
      </div>
      {isModalOpen(ToggleButtonProps.isBurgerHandler) && (
        <div className="md:hidden flex flex-col space-y-4 my-auto">
          {dataNavbar.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={"navItem text-[24px]"}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
