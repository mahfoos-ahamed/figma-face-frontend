import React from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  arrowIcon: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  description,
  arrowIcon,
}) => {
  return (
    <div className="flex flex-col relative min-h-[566px] grow items-stretch text-black justify-center px-[18px] py-[15px] max-md:max-w-full max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b887a8c1a1d6579184ed3affefb6364e882acef?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative bg-white flex w-full flex-col items-stretch px-9 py-[46px] max-md:max-w-full max-md:px-5 hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt={title}
          className="aspect-[1.58] object-contain w-full max-md:max-w-full"
        />
        <div className="flex gap-[40px_70px] justify-center mt-8 max-md:max-w-full">
          <div className="min-w-60 w-[339px]">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className="text-2xl font-medium mt-3">
              {description.split("-").map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && "- "}
                  {part.trim()}
                  {index < description.split("-").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <img
            src={arrowIcon}
            alt="View project"
            className="aspect-[1] object-contain w-[38px] shadow-[4px_4px_0px_rgba(142,143,135,1)] shrink-0 cursor-pointer hover:translate-x-1 hover:translate-y-1 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
