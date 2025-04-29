import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1576e233095aeb6bed624c2ab036773e6bae8c4?placeholderIfAbsent=true",
      title: "User Research",
      description: "Services we're providing that derive 99% result",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a335e66a1604ac37215409bd6e987e1bf7b1fceb?placeholderIfAbsent=true",
      title: "Wireframing",
      description: "Services we're providing that derive 99% result",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f33b5ab9c70b047bc7c8ba1d799549f96dee18e?placeholderIfAbsent=true",
      title: "UI Designing",
      description: "Services we're providing that derive 99% result",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3eeffd72a214242e841a1d853f611da54f03f8f?placeholderIfAbsent=true",
      title: "Prototyping",
      description: "Services we're providing that derive 99% result",
    },
  ];

  return (
    <section className="z-10 flex w-full flex-col mt-20 pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="z-10 flex w-full items-start gap-5 text-5xl text-black font-medium flex-wrap justify-between max-md:max-w-full max-md:text-[40px]">
        <div className="flex items-stretch gap-[31px] flex-wrap max-md:text-[40px]">
          <h2 className="basis-auto grow shrink max-md:max-w-full max-md:text-[40px]">
            Services we're providing
            <br />
            that derive 99% result
          </h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d267fb0c599838036f51e07484fec3fba3b94f4e?placeholderIfAbsent=true"
            alt="Decorative element"
            className="aspect-[1.07] object-contain w-[73px] shrink-0 mt-[13px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c037b6fdcc5be50b171ab925eedd5f0fa4ad9b?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[0.66] object-contain w-[84px] shadow-[0px_8px_0px_rgba(190,191,180,1)] shrink-0 mt-[81px] max-md:mt-10"
        />
      </div>
      <div className="flex text-black flex-wrap border-y-[3px] border-black max-md:max-w-full">
        <div className="min-w-60 font-medium whitespace-nowrap w-[448px] max-md:max-w-full">
          <div className="max-w-full w-[448px] pl-[21px] pr-[313px] py-[41px] border-b-[3px] border-black max-md:px-5">
            <div className="text-5xl max-md:text-[40px]">39</div>
            <div className="text-2xl mt-[7px]">Projects</div>
          </div>
          <div className="max-w-full w-[448px] pl-[21px] pr-72 py-[41px] max-md:px-5">
            <div className="text-5xl max-md:text-[40px]">100k+</div>
            <div className="text-2xl mt-[7px]">generated</div>
          </div>
        </div>
        <div className="flex min-w-60 gap-[-4px] flex-wrap w-[890px] max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
