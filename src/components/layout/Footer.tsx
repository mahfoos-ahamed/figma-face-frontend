import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-[89px] max-md:max-w-full max-md:mt-10">
      <div className="min-h-1.5 w-full border-black border-solid border-[6px] max-md:max-w-full" />
      <div className="self-center flex items-center justify-center flex-wrap mt-[89px] max-md:max-w-full max-md:mt-10">
        <div className="self-stretch flex flex-col text-4xl text-[rgba(12,12,12,1)] font-normal whitespace-nowrap w-[154px] my-auto">
          <div className="flex items-center gap-[15px] justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebeb0708994daf1cd26f66d226efe4a281c21f5f?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[1] object-contain w-[49px] self-stretch shrink-0 my-auto"
            />
            <div className="border self-stretch my-auto border-[rgba(12,12,12,1)] border-solid">
              znis
            </div>
          </div>
        </div>
        <div className="text-black text-[32px] font-medium text-center self-stretch w-[235px] my-auto">
          Portfolio 2024
        </div>
        <div className="self-stretch flex min-w-60 gap-[40px_72px] my-auto">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7701770520ce155810cdf780f70b9aeed61e1b84?placeholderIfAbsent=true"
              alt="Twitter"
              className="aspect-[1] object-contain w-12 shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/629048384602f2be1f9d8ec7173796851f1b3dd6?placeholderIfAbsent=true"
              alt="Instagram"
              className="aspect-[1] object-contain w-12 shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61668d4e9dfec0cb4e707562db88ce773aa4d59c?placeholderIfAbsent=true"
              alt="LinkedIn"
              className="aspect-[1] object-contain w-12 shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
