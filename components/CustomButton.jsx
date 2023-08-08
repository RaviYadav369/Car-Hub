"use client";
import React from "react";

const CustomButton = ({title,containerStyles,handleClick}) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`${containerStyles} custom-btn`}
      onClick={() => {}}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
