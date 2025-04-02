import React from "react";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="bg-[url(/pharm_tool.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-[#085843a0]">
        <div className="container">
          <div className="py-32 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
