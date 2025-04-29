import React from "react";
import PortfolioCard from "@/components/ui/PortfolioCard";

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf0a21979caf5dbadd8297a3ea2b9e13546abde7?placeholderIfAbsent=true",
      title: "Portfolio design",
      description: "UI design - User research - webflow develop",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1939851e5891034433a53d030524bcd74a70faf0?placeholderIfAbsent=true",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3651ac5d347bc816e7fac6f26807bf606dc5b89f?placeholderIfAbsent=true",
      title: "Portfolio design",
      description: "UI design - User research - webflow develop",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b85f98a84e14ecf3f643a7e8f03f9699fdddc0e?placeholderIfAbsent=true",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa87365102320bef723491df4b1ee035e79e9de1?placeholderIfAbsent=true",
      title: "Portfolio design",
      description: "UI design - User research - webflow develop",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8eb5518a040e8b5700e65bb34f1fb3b339e9658?placeholderIfAbsent=true",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/289e7aeebc8adf8d835fc217620ffc0c22466188?placeholderIfAbsent=true",
      title: "Portfolio design",
      description: "UI design - User research - webflow develop",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70624eaba28357566fe44d7273b937f9e951104?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="mt-[87px] max-md:mt-10">
      <h2 className="text-black text-[80px] font-normal self-center border-black border-solid border-[3px] max-md:max-w-full max-md:text-[40px]">
        My Portfolio ️
      </h2>
      <div className="self-center w-full max-w-[1196px] ml-[25px] mt-[99px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <PortfolioCard {...portfolioItems[0]} />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <PortfolioCard {...portfolioItems[1]} />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1196px] ml-7 mt-[57px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <PortfolioCard {...portfolioItems[2]} />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <PortfolioCard {...portfolioItems[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
