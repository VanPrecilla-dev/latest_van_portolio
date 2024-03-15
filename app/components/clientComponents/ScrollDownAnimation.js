"use client";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-scroll";
import animationData from "./ScrolldownLottie.json";

const ScrollDownAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };

  return (
    <>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Lottie
          options={defaultOptions}
          height={50}
          width={50}
        />
      </Link>
    </>
  );
};

export default ScrollDownAnimation;
