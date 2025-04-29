import React from "react";

const ToolsSection: React.FC = () => {
  const tools = ["Figma", "Framer", "Webflow", "Notion", "Lottie"];

  return (
    <section className="bg-black flex flex-col overflow-hidden items-center text-5xl text-white font-medium whitespace-nowrap justify-center mt-[148px] px-[101px] py-[39px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:px-5">
      <div className="flex gap-[40px_113px] flex-wrap max-md:max-w-full max-md:text-[40px]">
        {tools.map((tool, index) => (
          <div key={index} className="max-md:text-[40px]">
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
