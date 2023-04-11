import React, { createRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Builds from "./Builds";
import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Experience from "./Experience";
import Lenis from "@studio-freight/lenis";

export default function Work() {
  const heroRef = createRef();
  const aboutRef = createRef();
  const projectRef = createRef();
  const contactRef = createRef();

  function onNavigate(ref) {
    ref.current.scrollIntoView();
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const links = [
    {
      linkName: "Home",
      linkUrl: "#hero",
      ref: heroRef,
    },
    {
      linkName: "About",
      linkUrl: "#about",
      ref: aboutRef,
    },
    {
      linkName: "Projects",
      linkUrl: "#builds",
      ref: projectRef,
    },
    {
      linkName: "Resume",
      linkUrl: "/resume",
    },
    {
      linkName: "Contact",
      linkUrl: "#contact",
      ref: contactRef,
    },
  ];

  return (
    <>
      <Navbar onNavigate={onNavigate} links={links} />
      <Hero />
      <About ref={aboutRef} />
      <Experience />
      <Skills />
      <Builds />
      <Contact />
      <Footer links={links} />
    </>
  );
}
