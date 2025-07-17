import React from "react";
import { dataFooter } from "@/data/Footer";
import Link from "next/link";
import { Button } from "../ui/Button";

const Footer = () => {
  return (
    <div className="bg-primary pt-32 pb-0 grid grid-cols-2 justify-between space-x-6 mt-[24px]">
      <div className="flex flex-col justify-between">
        <h2 className="text-4xl font-normal">laluwahyudi@gmail.com</h2>
        <div className="flex flex-col space-y-4">
          <div className="space-y-4 text-[22px] font-inter">
            Ea veniam dolore dolor veniam aliquip laborum irure incididunt
            proident. Est sint in sunt id non ea sit qui consequat.
          </div>
          <Button
            size={"md"}
            className="justify-center text-[22px] font-normal w-fit"
          >
            Send Messages
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 ">
        {dataFooter.map((item, index) => (
          <div key={index} className="space-y-4 ">
            <div className="mb-8 font-bold text-[24px]">{item.title}</div>

            {item.subItem &&
              item.subItem.length > 0 &&
              item.subItem.map((itm, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-4 text-[22px] hover:underline"
                >
                  <Link href={itm.href}>
                    {itm.totle}
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-t-thirty text-[22px] rounded-md text-accent text-center w-full py-7 col-span-3 mt-6">
        Copyright, 2025
        {`${
          new Date().getFullYear() === 2025
            ? ""
            : "-" + new Date().getFullYear()
        }`}
      </div>
    </div>
  );
};

export default Footer;
