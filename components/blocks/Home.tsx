
import { useCallback } from "react";
import Image from "next/image";

const Home= () => {
  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-2xl text-gray font-space-grotesk">
      <div className="absolute top-[calc(50%_-_197px)] left-[calc(50%_-_197px)] [filter:blur(800px)] rounded-[50%] bg-yellowgreen w-[394px] h-[394px]" />
      <div className="absolute top-[calc(50%_-_246px)] left-[307px] w-[826px] flex flex-col items-start justify-start py-0 px-4 box-border gap-14 font-inter">
        <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
          <div className="self-stretch flex flex-row items-start justify-start gap-[46px] font-space-grotesk">
            <Image
              className="w-24 relative rounded-[401.5px] max-h-full object-cover"
              width={96}
              height={96}
              sizes="100vw"
              alt=""
              src="93197732 2.png"
            />
            <div className="w-[466px] relative h-[116px]">
              <div className="absolute top-[0px] left-[0px] font-medium">
                Hallo 👋, I’m
              </div>
              <b className="absolute top-[24px] left-[0px] text-7xl inline-block text-yellowgreen w-[466px]">
                Lalu Wahyudi
              </b>
            </div>
          </div>
          <div className="self-stretch relative">
            <i className="font-semibold">Software Engineer</i>
            <span className="font-medium"> focused on scalable solutions.</span>
          </div>
          <div className="self-stretch relative text-[22px]">
            With 3+ years of experience, I craft robust back‑ends and currently
            lead a startup serving 1 million + UMKM users.
          </div>
        </div>
        <div className="w-72 flex flex-row items-end justify-center gap-[47px] text-sm font-space-grotesk">
          <div className="rounded-[50px] bg-yellowgreen flex flex-row items-center justify-center py-3 px-8">
            <b className="relative">View Projects</b>
          </div>
          <div className="flex-1 flex flex-row items-center justify-between py-0 px-1 gap-0">
            <Image
              className="w-8 relative h-8"
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="Group 8.svg"
            />
            <Image
              className="w-8 relative h-8"
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="brand-linkedin.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[661px] left-[323px] w-[406px] flex flex-col items-start justify-start gap-6 text-[32px]">
        <b className="self-stretch relative">Tech Stack</b>
        <div className="self-stretch flex flex-row items-center justify-start text-white">
          <div className="w-[52px] rounded-[100px] border-lightgray border-solid border-[2px] box-border flex flex-col items-center justify-center p-2.5 text-lightgray">
            <b className="self-stretch relative">🧠</b>
          </div>
          <Image
            className="flex-1 relative max-w-full overflow-hidden max-h-full"
            width={66}
            height={5}
            sizes="100vw"
            alt=""
            src="Line 1.svg"
          />
          <div className="w-[52px] rounded-[100px] border-lightgray border-solid border-[2px] box-border flex flex-col items-center justify-center p-2.5">
            <b className="self-stretch relative">⚙️</b>
          </div>
          <Image
            className="flex-1 relative max-w-full overflow-hidden max-h-full"
            width={66}
            height={5}
            sizes="100vw"
            alt=""
            src="Line 2.svg"
          />
          <div className="w-[52px] rounded-[100px] border-lightgray border-solid border-[2px] box-border flex flex-col items-center justify-center p-2.5">
            <b className="self-stretch relative">🧰</b>
          </div>
          <Image
            className="flex-1 relative max-w-full overflow-hidden max-h-full"
            width={66}
            height={5}
            sizes="100vw"
            alt=""
            src="Line 3.svg"
          />
          <div className="w-[52px] rounded-[100px] border-lightgray border-solid border-[2px] box-border flex flex-col items-center justify-center p-2.5">
            <b className="self-stretch relative">🗄️</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[842px] left-[307px] w-[826px] grid grid-rows-[] grid-cols-[] [justify-content:start] [align-content:start] [column-gap:12px] py-0 px-4 box-border">
        <div className="absolute top-[0px] left-[16px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1.5">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">TypeScript</div>
        </div>
        <div className="absolute top-[0px] left-[217.5px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[0px] left-[419px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[0px] left-[620.5px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[110px] left-[16px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[55px] left-[16px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[55px] left-[217.5px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[55px] left-[419px] rounded-lg bg-white border-gray border-solid border-[2px] flex flex-row items-center justify-center py-1.5 px-4 gap-1">
          <Image
            className="w-6 relative h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="absolute top-[55px] left-[620.5px] rounded-lg bg-white border-gray border-solid border-[2px] box-border w-[184px] h-[43px]">
          <Image
            className="absolute top-[9.5px] left-[16px] w-6 h-6"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="globe.svg"
          />
          <div className="absolute top-[6px] left-[44px]">JavaScript</div>
        </div>
      </div>
      <div className="absolute top-[56px] left-[307px] w-[826px] flex flex-row items-center justify-between p-4 box-border gap-0">
        <div className="flex flex-row items-center justify-start gap-8">
          <b className="relative">Home</b>
          <div className="relative cursor-pointer" onClick={onAboutTextClick}>
            About
          </div>
          <div className="relative cursor-pointer" onClick={onAboutTextClick}>
            Projects
          </div>
          <div className="relative cursor-pointer" onClick={onAboutTextClick}>
            Contact
          </div>
        </div>
        <div
          className="rounded-[50px] border-yellowgreen border-solid border-[2px] flex flex-row items-center justify-center py-3 px-8 cursor-pointer text-sm text-yellowgreen"
          onClick={onAboutTextClick}
        >
          <b className="relative">Ebooks</b>
        </div>
      </div>
      <div className="absolute top-[723px] left-[1273px] w-[47px] flex flex-col items-start justify-start gap-6">
        <Image
          className="w-[46px] relative h-[46px] opacity-[0]"
          width={46}
          height={46}
          sizes="100vw"
          alt=""
          src="Group 5.svg"
        />
        <Image
          className="w-[46px] relative h-[46px] opacity-[0]"
          width={46}
          height={46}
          sizes="100vw"
          alt=""
          src="Group 6.svg"
        />
        <Image
          className="w-[46px] relative h-[46px]"
          width={46}
          height={46}
          sizes="100vw"
          alt=""
          src="Group 7.svg"
        />
      </div>
    </div>
  );
};

export default Home;
