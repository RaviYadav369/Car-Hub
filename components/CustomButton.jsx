"use client";
import React from "react";
import Image from "next/image";

const CustomButton = ({title,containerStyles,handleClick,rightIcon}) => {
  return (
    <button
      disabled={false}
      type='button'
      className={`${containerStyles} custom-btn`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
          src={rightIcon}
          alt="right-icon"
          fill
          className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
