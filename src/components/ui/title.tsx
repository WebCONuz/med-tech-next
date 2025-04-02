import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col mb-10">
      <h2 className="text-main-color text-3xl font-bold mb-3">{title}</h2>
      <div className="w-14 h-1 bg-main-color rounded-md"></div>
    </div>
  );
};

export default Title;
