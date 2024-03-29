"use client";

import React, { useEffect, useState } from "react";
import IconLink from "./IconLink";
import LinkMenu from "./LinkMenu";

const NavBar = () => {
  const [changeColor, setChangeColor] = useState(false);


  


  useEffect(() => {
    const scrollChange = () => {
      if (window.scrollY >= window.innerHeight / 2) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollChange);


      return () => {
        window.removeEventListener('scroll', scrollChange);
      };
    }
  
  }, [])
  

  return (
    <div className={`fixed w-full z-50 ${changeColor ? 'backdrop-blur-sm bg-white/30' : 'bg-transparent' } `}>
      <div
        className={`relative flexBetween   max-container padding-container z-30 lg:flex-row md:flex-row flex-col lg:gap-0 animate-slidein300  ${changeColor ? ' gap-2 py-3 lg:pt-10 xl:pt-10 lg:h-28 h-30' : "gap-5 pt-10 pb-2 lg:h-28 h-30" } `}
      >
        <LinkMenu changeColor={changeColor} setChangeColor={setChangeColor} />
        <IconLink changeColor={changeColor} setChangeColor={setChangeColor} />
      </div>
    </div>
  );
};

export default NavBar;
