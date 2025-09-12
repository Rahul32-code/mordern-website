import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard marketing",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app marketing",
      description: "We help you create marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="ourWork"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our latest work"}
        desc={
          "We are a team of professionals who are passionate about what they do and dedicated to delivering exceptional results."
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {workData.map((work, index) => {
          return (
            <div
              key={index}
              className="hover:scale-102 duration-500 transition-all cursor-pointer"
            >
              <img
                src={work.image}
                alt="workImage"
                className="w-full rounded-xl"
              />
              <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
              <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWork;
