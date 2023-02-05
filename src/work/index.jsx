import React, { createRef } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Builds from "./Builds";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function Work() {
  const homeRef = createRef();
  const aboutRef = createRef();
  const projectRef = createRef();
  const contactRef = createRef();

  function onNavigate(ref) {
    ref.current.scrollIntoView();
  }

  const links = [
    {
      linkName: "Home",
      linkUrl: "#home",
      ref: homeRef,
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
      <Home />
      <About ref={aboutRef} />
      <Skills />
      <Builds />
      <Contact />
      <Footer links={links} />
    </>
  );
}
