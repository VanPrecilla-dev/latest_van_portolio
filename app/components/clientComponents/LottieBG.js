'use client'
import React from "react";
import Lottie from "react-lottie";
import animationData from './particles_lottie.json';

const LottieBG = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: "svg",
      };
    
      return (
        <>
          <Lottie
            options={defaultOptions}
            style={{ width: '500px', position: "absolute", alignSelf: "end" }}
            height={1000}
            width={1000}
          />
        </>
      );
}

export default LottieBG