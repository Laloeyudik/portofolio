import React from "react";
import { dataFooter } from "@/data/Footer";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-primary pt-32 pb-0 grid grid-cols-1 lg:grid-cols-2 lg:justify-between space-x-6 mt-[24px]">
      <div className="flex flex-col justify-between">
        <h2 className="text-[24px] mb-[40px] lg:text-[32px] font-normal underline">
          laluwahyudi@gmail.com
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="space-y-4 text-[16px] md:text-[17px] font-inter">
            Ea veniam dolore dolor veniam aliquip laborum irure incididunt
            proident. Est sint in sunt id non ea sit qui consequat.
          </div>
          <Button
            size={"sm"}
            className="justify-center text-[16px] md:text-[17px] font-medium w-full md:w-fit order-1"
          >
            Send H!🖐️
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[28px] lg:mt-0 lg:grid-cols-3 ">
        {dataFooter.map((item, index) => (
          <div key={index} className="space-y-4 ">
            <div className="mb-8 font-bold text-[18px]">{item.title}</div>

            {item.subItem &&
              item.subItem.length > 0 &&
              item.subItem.map((itm, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-4 text-[16px] md:text-[17px] hover:underline"
                >
                  <Link href={itm.href}>{itm.totle}</Link>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-t-thirty text-[16px] md:text-[17px] rounded-md text-thirty text-center w-full py-7 lg:col-span-3 mt-6">
        <div className="flex items-center justify-center gap-2 w-full">
          <Copyright /> Copyright, 2025
          {`${
            new Date().getFullYear() === 2025
              ? ""
              : "-" + new Date().getFullYear()
          }`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
