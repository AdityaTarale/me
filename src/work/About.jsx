import React from "react";
import ProfileImgUrl from "../assets/my-profile.jpeg";

const About = React.forwardRef(function (props, ref) {
  return (
    <main id="about" ref={ref} className="w-full bg-black text-white">
      <div className="container mx-auto grid grid-cols-3 place-content-start items-center gap-20 py-24 sm:w-2/3">
        <section className="col-span-3 flex items-center lg:col-span-1">
          <span className="mx-auto max-w-[14rem]">
            <img
              decoding="async"
              loading="lazy"
              src={ProfileImgUrl}
              alt="aditya_profile"
            />
          </span>
        </section>
        <aside className="col-span-3 lg:col-span-2">
          <h1
            className="
          mb-6 text-xl font-semibold sm:text-3xl"
          >
            On Special Occasions I Reinvent Wheel
          </h1>
          <p className="text-xl">
            About me, Keeper, I’m a UI developer specializing in
            component-driven development, design systems . I’m a React Developer
            at Appsphere and a contributor to open-source. Originally from
            Nagpur, I currently live in Indore. In my spare time, I try learn to
            cook.
          </p>
        </aside>
      </div>
    </main>
  );
});

export default About;
