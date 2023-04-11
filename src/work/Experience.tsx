import { animate, inView, stagger } from "motion";
import React, { useEffect, useRef } from "react";

const TransformXAxisCard = ({ children }) => {
  const experienceCardContainer = useRef(null);
  const experienceCard = useRef(null);

  useEffect(() => {
    if (!experienceCardContainer.current) return;
    inView(experienceCardContainer.current, () => {
      if (!experienceCard.current) return;

      animate(
        experienceCard.current,
        {
          opacity: 1,
          transform: "none",
        },
        { duration: 2, delay: stagger(1) }
      );
    });

    return () => {};
  }, []);

  return (
    <li
      className="inline-block w-full overflow-hidden"
      ref={experienceCardContainer}
    >
      <span
        className="inline-block w-full -translate-x-96 opacity-0"
        ref={experienceCard}
      >
        {children}
      </span>
    </li>
  );
};

function ExperienceBoxCard({ imgUrl, companyTitle, jobTitle, date }) {
  return (
    <section className="opacity:0.5  transform:none mb-4 flex w-full place-items-center gap-1 rounded-lg border border-emerald-600/30 bg-emerald-600/10 p-4 opacity-60 sm:gap-4">
      <span className="flex aspect-square w-14 align-middle sm:w-20">
        <img
          loading="lazy"
          decoding="async"
          src={imgUrl}
          alt=""
          className="my-auto"
        />
      </span>
      <div className="flex-1">
        <h4 className="text-base text-blue-50 sm:text-xl">{companyTitle}</h4>
        <h5 className="text-sm text-gray-400 sm:text-base">{jobTitle}</h5>
      </div>
      <span className="text-sm sm:text-base">{date}</span>
    </section>
  );
}

const Experience = React.forwardRef(function () {
  return (
    <main className="flex justify-center bg-black">
      <section className="container relative mx-auto flex flex-col items-center justify-center py-24 text-white sm:w-1/2">
        <div className="absolute inset-0 z-[1] grid place-items-center">
          <div className="h-3/4 w-1/4 translate-x-1/4 rotate-45 rounded-tl-3xl rounded-br-3xl bg-gradient-to-tl from-purple-400 to-orange-600 opacity-20 blur-3xl"></div>
          <div className="-translate-x-1/5 h-4/6 w-3/4 -rotate-12 rounded-tl-3xl rounded-br-3xl bg-gradient-to-l from-purple-800 to-orange-600 opacity-25 blur-3xl"></div>
        </div>
        <h2 className="mb-12 text-center text-4xl font-bold">Experience</h2>
        <div className="w-full">
          <ul className="">
            {experiences.map((experience, i) => {
              return (
                <TransformXAxisCard>
                  <ExperienceBoxCard key={i} {...experience} />
                </TransformXAxisCard>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
});

export default Experience;

const experiences = [
  {
    imgUrl:
      "https://static.wixstatic.com/media/1b950e_408061f5e5a14a50b9b10d0c5a9356fb~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/appsphere-logo.png",
    companyTitle: "AppSphere Software LLP",
    jobTitle: "React and React Native Developer",
    date: "May 2021",
  },
  {
    imgUrl: "https://www.6simplex.co.in/assets/images/img/logo.png",
    companyTitle: "6Simplex Software Solutions Ptv Ltd",
    jobTitle: "JavaScript Intern",
    date: "Nov 2020",
  },
];
