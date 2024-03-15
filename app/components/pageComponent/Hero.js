import React from "react";
import Image from "next/image";
import { VAN_DETAILS } from "@/constant/indexFile";
import ScrollDownAnimation from "../clientComponents/ScrollDownAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      s
      className="flex w-full pt-40 bg-[linear-gradient(45deg,#C06AE3,#1A4EB4,#6F5CCC,#C06AE3)] bg-[length:200%_auto] animate-color"
    >
      <div className="relative h-full flexBetween max-container w-full padding-container flex flex-col  gap-1 lg:gap-5 pt-5 pb-40 md:gap-20 lg:pt-35 lg:px-5 xl:flex-col text-white">
        <hgroup className="flex flex-col self-center mt-5 md:self-end md:mt-20 md:mr-20 lg:self-end lg:mr-40 lg:mt-28 lg:p-5">
          <h1 className="flex text-5xl md:text-8xl lg:text-8xl font-bold">
            {VAN_DETAILS[0].home.introduction}
          </h1>
          <h2 className="flex self-end text-[22px] md:text-[45px] lg:text-[45px] font-semibold">
            {VAN_DETAILS[0].home.position}
          </h2>
        </hgroup>

        <Image
          alt="ai pic of van"
          src="/ai_pic_van.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-64 h-60 md:w-[450px] md:h-[300px] md:left-0 lg:left-10 lg:w-[550px] lg:h-[500px] object-cover "
        />

        <div className="flex md:z-20 lg:z-20 overflow-auto grow h-60 px-10 w-80 self-center md:self-end lg:self-end pro:w-[450px] pro:h-[400px] pro:mr-24 pro:mb:0  pro:px-1 md:w-[600px] lg:h-64 lg:w-[900px] mt-5 md:mt-0 mb-14 lg:mb-4 lg:mr-20  bg-[#8C52FF] rounded-[60px] lg:rounded-[100px] items-center">
          <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty text-center pro:text-2xl pro:text-center lg:text-justify lg:leading-9 lg:px-16 ">
            {VAN_DETAILS[0].home.tagline}
          </p>
          <div className="absolute hover:scale-125 w-20 h-16 right-12 bottom-56 md:right-10 md:bottom-60 lg:right-24 lg:bottom-52 pro:right-24 xl:right-48 xl:bottom-48">
            <ScrollDownAnimation />
          </div>

          <div
            className="absolute invisible pro:invisible lg:visible z--20 w-0 h-0 lg:left-[520px] lg:bottom-[178px] lg:border-t-[65px] lg:border-r-[170px] lg:border-b-[2px] 
lg:border-solid lg:border-t-transparent lg:border-b-transparent border-r-[#8C52FF]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
