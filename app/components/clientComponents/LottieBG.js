'use client'
import React from "react";
import Lottie from "react-lottie";
import animationData from './line_lottie.json';

const LottieBG = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: "svg",
      };
    
      return (
        <div className="w-full">
          <Lottie
            options={defaultOptions}
            style={{ width: '500px' }}
            height={500}
            width={500}
          />
        </div>
      );
}

export default LottieBG