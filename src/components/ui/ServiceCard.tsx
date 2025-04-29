import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="min-w-60 grow shrink w-[358px] max-md:max-w-full">
      <div className="max-w-full w-[447px] pl-[26px] pr-[82px] py-[60px] border-b-[3px] border-x-[3px] border-black max-md:px-5">
        <img
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-[70px] rounded-[50px]"
        />
        <h3 className="text-4xl font-bold mt-[19px]">{title}</h3>
        <p className="text-2xl font-medium mt-[19px]">{description}</p>
      </div>
      <div className="max-w-full w-[447px] text-4xl font-medium pl-[26px] pr-[90px] py-[31px] border-b-[3px] border-x-[3px] border-black max-md:px-5 hover:bg-gray-100 cursor-pointer transition-colors">
        Learn more
      </div>
    </div>
  );
};

export default ServiceCard;
