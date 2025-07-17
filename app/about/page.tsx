import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { dataAbout } from "@/data/About";
import { ArrowUpRightIcon, Github, Map } from "lucide-react";
import SquqreMyImage from "@/public/image/squareMyImage.png";
import Image from "next/image";

const About = () => {
  const { namaLengkap, alamat, biagrafi, education, experience, foto } =
    dataAbout;
  return (
    <section className="mt-[56px] ">
      <div className="grid grid-cols-3 space-x-6">
        <div className="rounded-2xl border-[1px] border-thirty bg-primary p-6 overflow-hidden w-fit h-fit">
          <Image
            src={SquqreMyImage}
            alt="Image"
            className="aspect-square w-full"
          />
          <h2 className="text-[24px] text-accent font-bold line-clamp-1 mt-4">
            {namaLengkap}
          </h2>
          <p className="items-center gap-2.5 flex text-[16px] font-bold mt-2.5">
            <Map /> {alamat}
          </p>

          <div className="mt-5 max-w-xs leading-6 font-inter">{biagrafi}</div>
        </div>
        <div className="col-span-2">
          <div>
            <h2 className="text-[24px] font-bold font-space-grotesk text-secondary mb-2.5 capitalize">
              Education
            </h2>
            {education &&
              education.length > 0 &&
              education.map((item, index) => (
                <div key={item.id}>
                  <Card className="bg-accent w-fit hover:bg-primary hover:text-accent">
                    <CardHeader>
                      <div className="flex justify-between items-end">
                        <h3 className="">{item.namaSekolah}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-[16px] mb-1 font-medium font-inter">
                        {item.jurusan}
                      </h3>
                      <div className="text-[16px] font-normal font-inter">
                        The {item.tanggalMasuk}/{item.tanggalLulus} academic
                        year begins in November.
                      </div>
                      <p className="text-[16px] font-medium font-inter">
                        GPA: {item.ipk}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
          <div className="mt-[46px]">
            <h2 className="text-[24px] font-bold font-space-grotesk text-secondary mb-2.5 capitalize">
              Experience
            </h2>
            {experience &&
              experience.length > 0 &&
              experience.map((item, index) => (
                <Card className="bg-primary mb-6" key={item.id} >
                  <CardContent>
                    <div className="grid grid-cols-4 space-x-2 items-start">
                      <div className="font-bold font-space-grotesk text-[22px]">
                        {item.tahunStart}/{item.tahunAnd}
                      </div>
                      <div className="col-span-3">
                        <div className="text-[22px] font-bold font-space-grotesk text-accent line-clamp-2 capitalize">
                          {item.namaPerusahaan}
                        </div>
                        <div className="font-medium mb-3">{item.posisi}</div>
                        <ul className="font-inter ">
                          {item.deskripsi &&
                            item.deskripsi.length > 0 &&
                            item.deskripsi.map((itm, idx) => (
                              <li key={idx} className="mb-2 list-disc">
                                {itm}
                              </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                          <h3 className="font-medium">Tech Stack:</h3>
                          <div className="px-2 py-0.5 rounded-full outline-1 outline-thirty w-fit flex-wrap space-x-2.5">
                            Golang
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <div className="flex space-x-6 ">
                      <div className="flex items-center space-x-2 cursor-pointer text-accent font-medium">
                        <Github /> Preview Code
                      </div>
                      <div className="flex space-x-2 items-center hover:underline hover:cursor-pointer">
                        Live Demo <ArrowUpRightIcon />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
