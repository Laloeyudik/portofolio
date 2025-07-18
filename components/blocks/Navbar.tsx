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
    <nav className="w-full mx-auto py-4 top-[0px] text-lg grid grid-cols-2 items-center justify-between space-y-4 md:flex-row md:justify-between md:items-center sticky transition duration-300 bg-primary/15 dark:bg-primary/15 backdrop-blur-md z-30">
      {isModalOpen(ToggleButtonProps.isBurgerHandler) ? (
        <X onClick={() => closeModal()} className="cursor-pointer lg:hidden size-[24px]"  />
      ) : (
        <div className="flex items-center m-0 lg:hidden">
          <div className="p-1.5  bg-accent rounded-full w-fit m-0 ">
            <Logs
              onClick={() =>
                openModal(ToggleButtonProps.isBurgerHandler, undefined)
              }
              className="cursor-pointer md:size-[24px]"
            />
          </div>
        </div>
      )}

      <div className="hidden lg:flex space-x-6 my-auto text-[24px]">
        {dataNavbar.map((item, index) => {
          const isHome = item.title === "Home";
          return (
            <Link
              key={index}
              href={item.path}
              className={`navItem w-fit ${isHome ? "font-bold" : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button size={"sm"} className="text-[16px] md:text-[17px] w-fit ">
          <span className="my-auto inline-flex space-x-2 ">
            {" "}
            Ebooks <ArrowUpRight />
          </span>
        </Button>
      </div>

      {isModalOpen(ToggleButtonProps.isBurgerHandler) && (
        <div className="lg:hidden flex flex-col space-y-4 my-auto col-span-2">
          {dataNavbar.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={"navItem w-fit text-[16px] md:text-[17px]"}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
