import React from "react";
import Image from "next/image";
import { VAN_DETAILS } from "@/constant/indexFile";

import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  const iconStyle = { width: "28px", height: "28px", color: "#8C52FF" };

  return (
    <section
      id="contact"
      className="flex bg-[url('/side_bg.jpg')] bg-center bg-cover  bg-fixed w-full pt-10 xl:pt-32 "
    >
      <div className="relative h-full flexBetween max-container w-full padding-container flex flex-col  gap-1 lg:gap-5 pt-5 pb-40 md:pb-60 md:gap-20 lg:pb-40 lg:pt-35 lg:px-5 xl:flex-col text-white ">
        <div className="flex flex-col self-center lg:self-start  mt-5 md:mt-10 lg:ml-32 lg:mb-0 lg:mt-60 lg:p-5 text-[#8C52FF] animate-slidein500">
          <h1 className="flex text-3xl md:text-5xl font-bold hover:animate-wiggle">
            Contact Me
          </h1>
        </div>

        <Image
          alt="ai pic of van"
          src="/ai_pic_van.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-64 h-60 md:w-[500px] md:h-[320px]  lg:left-10 lg:w-[550px] lg:h-[500px] object-cover animate-slidein300"
        />

        <div className="flex  overflow-auto grow p-5 w-full self-center lg:self-end pro:w-[450px] pro:h-[400px] pro:mr-24 pro:mb-0  pro:px-5 md:w-[600px]  lg:w-[900px] lg:py-10 mt-5 md:mt-0 mb-14 lg:mb-0 lg:mr-20  bg-[#8C52FF]  rounded-5xl animate-slidein300 ">
          <div className="flex flex-col gap-5 backdrop-blur-sm bg-white/30 hover:bg-[#3b314e] w-full p-5 md:p-5 rounded-5xl">
            <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty self-start pro:text-2xl  pro:px-5   lg:px-16 ">
              {VAN_DETAILS[3].contact.connectLine}
            </p>
            <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty self-start pro:text-2xl  pro:px-5   lg:px-16 ">
              {" "}
              {VAN_DETAILS[3].contact.contactThru}
            </p>
            <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty self-start pro:text-2xl  pro:px-5 lg:px-40 ">
              * {VAN_DETAILS[3].contact.emailAdd}
            </p>
            <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty self-start pro:text-2xl pro:px-5   lg:px-40 ">
              * {VAN_DETAILS[3].contact.linkedIn}
            </p>
            <p className="flex text-sm md:text-lg lg:text-2xl  break-words text-pretty self-end pro:text-2xl  pro:px-5   lg:px-16 ">
              {VAN_DETAILS[3].contact.endNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
