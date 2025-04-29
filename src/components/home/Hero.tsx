import React from "react";
import { Button } from "@/components/ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="mt-[42px] max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ce1a281f8420f65f0744f7aa9fb2a585129f485?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[1.68] object-contain w-[310px] self-center z-10 max-w-full ml-[203px] max-md:mt-10"
      />
      <div className="self-center flex items-center gap-[40px_121px] text-black flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col w-[618px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57c72eed00672fb875e27d5a17520987573a1123?placeholderIfAbsent=true"
            alt="Decorative element"
            className="aspect-[1.01] object-contain w-[205px] shadow-[0px_16px_0px_rgba(0,0,0,0.25)] max-w-full"
          />
          <div className="self-stretch flex w-full flex-col items-stretch text-[80px] font-normal mt-[25px] pr-[25px] pb-[19px] max-md:text-[40px] max-md:pr-5">
            <h1 className="z-10 border-black border-solid border-[3px] max-md:max-w-full max-md:text-[40px] max-md:mr-0.5">
              I design ✍️ top
              <br />
              notch websites{" "}
            </h1>
            <div className="bg-[rgba(255,220,88,1)] flex w-[341px] shrink-0 max-w-full h-11" />
          </div>
          <div className="flex w-[353px] max-w-full flex-col text-[29px] font-bold text-center mt-[25px] pt-[25px] max-md:pr-5">
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/portfolio")}
            >
              See Portfolio
            </Button>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/110041ab82ec66b59c7492b1480ee442867649fb?placeholderIfAbsent=true"
          alt="Designer portrait"
          className="aspect-[1] object-contain w-[512px] shadow-[-9px_10px_0px_rgba(0,0,0,0.44)] self-stretch min-w-60 my-auto max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
