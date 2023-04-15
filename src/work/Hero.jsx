import React, { useRef, useEffect } from "react";
import Button from "../components/Button";
import { inView, animate, stagger } from "motion";

const AnimatedWord = ({ title }) => {
  const animatedWordContainerRef = useRef(null);
  const animatedWordRef = useRef(null);

  useEffect(() => {
    if (!animatedWordContainerRef.current) {
      return;
    }

    inView(animatedWordContainerRef.current, () => {
      if (!animatedWordRef.current) return;

      animate(
        animatedWordRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.8,
          delay: 0.8,
        }
      );
    });
  }, []);

  return (
    <span
      className="inline-block overflow-hidden leading-[8vw]"
      ref={animatedWordContainerRef}
    >
      <span
        className="inline-block translate-y-28 align-middle text-4xl uppercase text-white opacity-0 sm:text-8xl"
        ref={animatedWordRef}
      >
        {title}
      </span>
    </span>
  );
};

const HEADER = [
  "A",
  "d",
  "i",
  "t",
  "y",
  "a",
  "\u00A0",
  "T",
  "a",
  "r",
  "a",
  "l",
  "e",
];

const AnimatedLetters = () => {
  const letterContainerRef = useRef(null);

  useEffect(() => {
    if (!letterContainerRef.current) {
      return;
    }

    inView(letterContainerRef.current, () => {
      const letters = document.querySelectorAll(".animated-letter");

      animate(
        letters,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.2,
          delay: stagger(0.1),
        }
      );
    });
  }, []);

  return (
    <span
      className="inline-block overflow-hidden leading-[8vw]"
      ref={letterContainerRef}
    >
      {HEADER.map((headerItem, index) => {
        return (
          <span
            className="animated-letter inline-block translate-y-28 align-middle text-4xl uppercase text-white opacity-0 sm:text-8xl"
            key={headerItem + index}
          >
            {headerItem}
          </span>
        );
      })}
    </span>
  );
};

const Hero = React.forwardRef(function () {
  return (
    <div id="hero" className="hero-box relative top-20 h-[calc(100vh-5rem)]">
      <main className="container mx-auto flex h-full items-center justify-center">
        <section className="mx-auto flex flex-col text-center align-middle">
          {/* <h1 className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl">
            Aditya Tarale
          </h1>
          <h1 className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl">
            I'm a developer
          </h1> */}

          <AnimatedWord title="I'm" />
          <AnimatedLetters />
          <AnimatedWord title="A developer" />

          <div className="my-24">
            <Button>Scroll to know more</Button>
          </div>
        </section>
      </main>
    </div>
  );
});

export default Hero;

// source for gradient: https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
