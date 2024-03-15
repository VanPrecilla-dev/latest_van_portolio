import React from "react";
import Image from "next/image";

import { VAN_PROJECTS } from "@/constant/indexFile";


const Project = () => {
  return (
    <section id="project" className="flex bg-[linear-gradient(45deg,#C06AE3,#1A4EB4,#6F5CCC,#C06AE3)] w-full pt-24 xl:pt-32 ">
      <div className="max-container  3xl:px-0 z-20 flex flex-col px-0 gap-5 py-5 pb-10 md:gap-5 lg:pt-24 lg:px-5 xl:flex-col">
        <h1 className="flex z-20 self-center p-2 rounded-2xl font-bold text-white text-3xl lg:text-4xl xl:text-5xl">
          Featured Projects
        </h1>
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-5 z-20 px-5 lg:p-5 ">
          {VAN_PROJECTS.map((item, key) => {
            return (
              <div
                key={key}
                className="flex bg-[linear-gradient(45deg,#C06AE3,#1A4EB4,#6F5CCC,#C06AE3)] bg-[length:200%_auto] animate-color rounded-3xl p-1  "
              >
                <div className="flex flex-col gap-2 py-5 px-2 md:p-5 backdrop-blur-md bg-white/5 text-white rounded-3xl font-Poppins ">
                  <h3 className="font-bold text-lg md:text-2xl text-white bg-[#9165eb] p-1 rounded-xl text-center">
                    {item.label}
                  </h3>

                  <div className="flex flex-col lg:flex-row px-5 md:px-10 gap-2 text-pretty break-words text-justify text-[12px] md:text-sm lg:text-md xl:text-md lg:leading-6">
                    <Image
                      src={item.img}
                      alt="project pic"
                      width={200}
                      height={200}
                      className="w-40 h-20 object-cover self-center lg:self-start"
                    />
                    <p>{item.description}</p>
                  </div>
                  <p className="text-sm lg:text-lg px-2  md:px-5">Tech: {item.tech}</p>
                  <div className=" flex flex-col text-sm  lg:text-md lg:flex-row gap-1 px-2 md:px-5">
                    <p className="p-1 ">
                      Click here to see more details about the project:{" "}
                    </p>
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#A193DC] p-1 rounded-lg"
                    >
                      GitHub Source Link
                    </a>
                    <a
                      href={item.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#A193DC] p-1 rounded-lg"
                    >
                      Live Demo Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
    </section>
  );
};

export default Project;

