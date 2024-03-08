import React from "react";
import { VAN_DETAILS } from "@/constant/indexFile";
import LottieBG from "../clientComponents/LottieBG";

const About = () => {
  const borderAnimation =
    "bg-[linear-gradient(45deg,#FEC827,#1A4EB4,#6F5CCC,#C06AE3)] bg-[length:200%_auto] animate-color";




  return (
    <section className="flex bg-[url('/side_bg.jpg')] bg-center bg-cover w-full pt-24 xl:pt-32 ">
      
      <div
        id="about"
        className="max-container padding-container z-10 flex flex-col lg:flex-col xl:flex-row gap-10 pb-14 xl:pb-32 lg:pt-16 lg:px-20 "
      >
        <div className="flex flex-col w-full xl:w-[50%]  gap-5 items-center ">
          <h1 className="flex  bg-[#8C52FF] p-2 rounded-2xl font-bold text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl">
            About Me
          </h1>
          <div className={`flex ${borderAnimation} p-1 rounded-2xl`}>
            <article className="flex flex-col gap-2 lg:gap-5 rounded-2xl py-5 px-5 lg:px-10 xl:py-8 text-[12px] md:text-sm lg:text-md xl:text-lg text-black indent-10 lg:indent-20 text-pretty leading-normal md:leading-7 xl:leading-9 text-justify break-words  bg-white">
              <p>{VAN_DETAILS[1].about.aboutMeP1}</p>
              <p> {VAN_DETAILS[1].about.aboutMeP2}</p>
              <p> {VAN_DETAILS[1].about.aboutMeP3}</p>
              <p> {VAN_DETAILS[1].about.aboutMeP4}</p>
            </article>
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-[50%] gap-5 items-center">
          <h1 className="flex  bg-[#8C52FF] p-2 rounded-2xl  font-bold text-white text-lg md:text-3xl  lg:text-4xl xl:text-5xl">
            My Skills
          </h1>

          <div className="flex flex-col w-full ">
            <label className="font-semibold text-[#8C52FF]  xl:text-lg">Front-End</label>
            <div className={`flex ${borderAnimation} p-1 rounded-2xl `}>
              <div className="flex flex-col gap-2  lg:gap-5 rounded-2xl w-full py-5 px-5 lg:px-10  text-[12px] md:text-sm lg:text-md  xl:text-lg text-gray-950    text-pretty leading-normal lg:leading-9 text-justify break-words  bg-white">
                <p>{VAN_DETAILS[2].skills.frontEnt}</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col w-full">
            <label className="font-semibold text-[#8C52FF]  xl:text-lg">Back-End</label>
            <div className={`flex ${borderAnimation} p-1  rounded-2xl `}>
              <div className="flex flex-col gap-2 lg:gap-5  rounded-2xl w-full py-5 px-5 lg:px-10 text-[12px] md:text-sm lg:text-md  xl:text-lg text-gray-950    text-pretty leading-normal lg:leading-9 text-justify break-words  bg-white">
                <p>{VAN_DETAILS[2].skills.backEnd}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="font-semibold text-[#8C52FF]  xl:text-lg">Database</label>
            <div className={`flex ${borderAnimation} p-1  rounded-2xl`}>
              <div className="flex flex-col gap-2 lg:gap-5  rounded-2xl w-full py-5 px-5 lg:px-10  text-[12px] md:text-sm lg:text-md  xl:text-lg text-gray-950    text-pretty leading-normal lg:leading-9 text-justify break-words  bg-white">
                <p>{VAN_DETAILS[2].skills.database}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="font-semibold text-[#8C52FF]  xl:text-lg">Other Programming and Non-Tech Skills</label>
            <div className={`flex ${borderAnimation} p-1  rounded-2xl `}>
              <div className="flex flex-col gap-2 lg:gap-5  rounded-2xl  w-full py-5 px-5 lg:px-10 text-[12px] md:text-sm lg:text-md  xl:text-lg text-gray-950    text-pretty leading-normal lg:leading-9 text-justify break-words  bg-white">
                <p>{VAN_DETAILS[2].skills.otherSkills}</p>
              </div>
            </div>
          </div>


        </div>




      </div>
    </section>
  );
};

export default About;
