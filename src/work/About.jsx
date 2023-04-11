import React, { useRef, useEffect } from "react";
import ProfileImgUrl from "../assets/my-profile.jpeg";
import { animate, inView } from "motion";

const AnimatedParagraph = ({ paragraph }) => {
  const paragraphContainerRef = useRef(null);

  const paragraphRef = useRef(null);

  useEffect(() => {
    if (!paragraphContainerRef.current) return;

    inView(paragraphContainerRef.current, () => {
      if (!paragraphRef.current) return;

      animate(
        paragraphRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.4,
        }
      );
    });
  }, []);

  return (
    <span
      className="inline-block flex-1 overflow-hidden text-2xl"
      ref={paragraphContainerRef}
    >
      <span
        className="inline-block translate-y-6 text-2xl opacity-0"
        ref={paragraphRef}
      >
        {paragraph}
      </span>
    </span>
  );
};

const About = React.forwardRef(function (props, ref) {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageContainerRef.current) return;

    inView(imageContainerRef.current, () => {
      if (!imageRef.current) {
        return;
      }

      animate(
        imageRef.current,
        {
          scale: 1.1,
        },
        {
          duration: 2,
          delay: 0.2,
        }
      );
    });
  }, []);

  return (
    <main id="about" ref={ref} className="w-full bg-black text-white">
      <div className="container mx-auto grid grid-cols-3 place-content-start items-center gap-20 py-24 sm:w-2/3">
        <section className="col-span-3 flex items-center lg:col-span-1">
          <div className="">
            <span className="mx-auto max-w-[2rem]" ref={imageContainerRef}>
              <img
                decoding="async"
                loading="lazy"
                src={ProfileImgUrl}
                alt="aditya_profile"
                ref={imageRef}
              />
            </span>
          </div>
        </section>
        <aside className="col-span-3 lg:col-span-2">
          <h1
            className="
          mb-6 text-xl font-semibold sm:text-3xl"
          >
            <AnimatedParagraph paragraph="On Special Occasions I Reinvent Wheel" />
          </h1>
          <p className="text-xl">
            <AnimatedParagraph
              paragraph="About me, Keeper, I’m a UI developer specializing
            in component-driven development, design systems . I’m a React
            Developer at Appsphere and a contributor to open-source. Originally
            from Nagpur, I currently live in Indore. In my spare time, I try
            learn to cook."
            />
          </p>
        </aside>
      </div>
    </main>
  );
});

export default About;
