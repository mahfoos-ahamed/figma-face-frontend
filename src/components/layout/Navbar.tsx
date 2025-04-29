import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.25)] relative flex justify-center p-[22px] border-black border-solid border-[5px] max-md:max-w-full max-md:px-5"
      aria-label="Main navigation"
    >
      <div className="self-stretch z-0 flex flex-col text-4xl font-normal whitespace-nowrap w-[137px] my-auto">
        <div className="flex mr-[-79px] items-center gap-[15px] justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/155feaf3ade8e3abf7dc1f1c82b1f2c383cf4d42?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[0.98] object-contain w-12 self-stretch shrink-0 my-auto"
          />
          <span className="border self-stretch my-auto border-[rgba(12,12,12,1)] border-solid">
            Mahfoos
          </span>
        </div>
      </div>
      <div className="self-stretch relative z-0 flex min-w-60 gap-8 text-2xl font-medium my-auto">
        <div className="bg-[rgba(255,220,88,1)] absolute z-0 flex w-[86px] shrink-0 h-2.5 left-[130px] bottom-1.5" />
        <Link to="/about" className="z-0 hover:text-gray-700 transition-colors">
          About //
        </Link>
        <Link
          to="/portfolio"
          className="z-0 hover:text-gray-700 transition-colors"
        >
          Portfolio
        </Link>
        <Link to="/hire" className="z-0 hover:text-gray-700 transition-colors">
          Hire Me
        </Link>
      </div>
      {/* Decorative elements */}
      <div className="bg-white absolute z-0 flex w-3.5 shrink-0 h-3.5 right-[-11px] top-[-5px] border-black border-solid border-[3px]" />
      <div className="bg-white absolute z-0 flex w-3.5 shrink-0 h-3.5 right-[-11px] border-black border-solid border-[3px] -bottom-1.5" />
      <div className="bg-white absolute z-0 flex w-3.5 shrink-0 h-3.5 left-[-7px] bottom-[-7px] border-black border-solid border-[3px]" />
      <div className="bg-white absolute z-0 flex w-3.5 shrink-0 h-3.5 left-[-7px] top-[-7px] border-black border-solid border-[3px]" />
      <div className="absolute z-0 w-0 shrink-0 h-[89px] border-black border-solid border-4 left-[341px] bottom-0.5" />
      <div className="absolute z-0 w-0 shrink-0 h-[89px] border-black border-solid border-4 right-[250px] bottom-px" />
      <div className="absolute z-0 w-0 shrink-0 h-[89px] border-black border-solid border-4 right-[116px] bottom-0.5" />
    </nav>
  );
};

export default Navbar;
