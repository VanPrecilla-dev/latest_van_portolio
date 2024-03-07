"use client";

import React from "react";
import IconLink from "./IconLink";
import LinkMenu from "./LinkMenu";

const NavBar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="relative flexBetween lg:flex-row md:flex-row flex-col lg:gap-0 
       gap-5 max-container padding-container z-30 pt-10 pb-0 lg:h-28 h-30 ">
        <LinkMenu />
        <IconLink />
      </div>
    </div>
  );
};

export default NavBar;
