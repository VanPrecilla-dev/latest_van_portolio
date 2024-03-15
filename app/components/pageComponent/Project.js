import React from "react";
import Image from 'next/image'
import LottieBG from "../clientComponents/LottieBG";
import { VAN_PROJECTS } from "@/constant/indexFile";
import { VAN_DETAILS } from "@/constant/indexFile";


const Project = () => {
  return (
    <section className="flex w-full pt-24 xl:pt-32  border-2 border-red-500">
      <div
        id="project"
        className="max-container padding-container z-20 flex flex-col gap-5 py-5 pb-32 md:gap-20 lg:pt-24 lg:px-5 xl:flex-col border-2 border-blue-500"
      >
        <h1 className="flex z-20 self-center p-2 rounded-2xl font-bold text-[#8C52FF] text-lg md:text-3xl lg:text-4xl xl:text-5xl">
          Featured Projects
        </h1>
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-5 z-20 p-5">
          {VAN_PROJECTS.map((item, key) => {
            return (
              <div
                key={key}
                className="grow flex flex-col text-white bg-[#8C52FF] p-5 "
              >
                <p>{item.label}</p>
                <Image   src={item.img} alt="project pic" width={200} height={200} />
                <p>{item.description}</p>
                <p>{item.tech}</p>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Source Link
                </a>
                <a
                  href={item.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo Link
                </a>
              </div>
            );
          })}
        </div>
        <div className="relative">
          <div className="absolute bottom-[-150px] right-[-100px]">
            <LottieBG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

/* 
<div className="flex  flex-col grow gap-5 z-20 p-5">
          
<div className="flex flex-row gap-5">
  <div className="grow flex bg-[#8C52FF] p-5 w-[40%] h-[40%]">

  </div>
  <div className="grow flex bg-[#8C52FF] p-5 w-[40%] h-[40%]"></div>
</div>
<div className="flex flex-row gap-5">
  <div className="grow flex bg-[#8C52FF] p-5 w-[40%] h-[40%]"></div>
  <div className="grow flex bg-[#8C52FF] p-5 w-[40%] h-[40%]"></div>
</div>
</div> */
