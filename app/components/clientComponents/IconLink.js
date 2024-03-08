
"use client";
import React, {useEffect} from "react";
import { SiGoogledocs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const IconLink = ({changeColor, setChangeColor}) => {


  const linkClass = "hover:bg-[#E4E0F5] hover:scale-110 p-2 rounded-full";
  const iconStyle = { width: "28px", height: "28px", color:"#8C52FF" };

  const linkIconHome = "flex flex-row gap-3 lg:gap-6 bg-white  px-5 lg:px-10 rounded-full text-white border-2 border-white"
  const linkIconOther ="flex flex-row gap-3 lg:gap-6 bg-white  px-5 lg:px-10 rounded-full text-[#8C52FF] border-2 border-[#8C52FF]"



  

  return (
    <ul className={changeColor ? linkIconOther : linkIconHome }>
      <li className={`${linkClass}, hover:rounded-full cursor-pointer group`}>
        <a
          href="https://drive.google.com/drive/folders/1t2bHXiNMT56YV8bjm1SiKSRlmlSI5x-l?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGoogledocs style={iconStyle} />{" "}
        </a>
        <div class="opacity-0 w-40 bg-[#8C52FF] text-white text-center text-xs rounded-lg m-5 py-2 absolute z-10 group-hover:opacity-100 px-3 pointer-events-none">
          Open Resume
        </div>
      </li>
      <li className={linkClass}>
        <a
          href="https://github.com/VanPrecilla-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={iconStyle} />
        </a>
      </li>
      <li className={linkClass}>
        <a
          href="https://www.linkedin.com/in/vanesa-precilla-860b8b241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin style={iconStyle} />
        </a>
      </li>
    </ul>
  );
};

export default IconLink;
