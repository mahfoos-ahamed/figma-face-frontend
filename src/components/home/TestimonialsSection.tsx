import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="mt-[129px] max-md:mt-10">
      <div className="flex items-center gap-[40px_47px] text-5xl text-black font-medium flex-wrap max-md:text-[40px]">
        <h2 className="self-stretch my-auto max-md:max-w-full max-md:text-[40px]">
          Here's what my clients
          <br />
          are saying about my work
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/592fe014cce189fed2692ac53c607ba02674fe94?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[1] object-contain w-[67px] self-stretch shrink-0 my-auto"
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54db01aa88f8876051f650a467aa37e9079b79e9?placeholderIfAbsent=true"
        alt="Testimonials"
        className="aspect-[1.51] object-contain w-full self-center max-w-[1246px] mt-[153px] max-md:max-w-full max-md:mt-10"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ef0a79b0e4c200727cbd8862caa4155cd45096?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[1.18] object-contain w-[151px] shadow-[0px_8px_0px_rgba(190,191,180,1)] max-w-full mr-[369px] mt-[141px] max-md:mr-2.5 max-md:mt-10"
      />
    </section>
  );
};

export default TestimonialsSection;
