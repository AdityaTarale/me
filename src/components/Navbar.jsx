import React from "react";
import SocialLinks from "./SocialLinks";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";

export default function Navbar({ onNavigate, links }) {
  return (
    <nav className="fixed z-[3] w-full border-b border-b-gray-900 backdrop-blur-sm">
      <div className="container mx-auto grid h-20 grid-cols-12 items-center justify-between">
        <Logo className="col-span-2" />
        <SocialLinks className="place-content-en col-span-3 col-start-10 sm:col-start-11 md:order-3 md:col-start-11" />
        <NavbarLinks
          className="order-2 col-span-full
           flex justify-between md:col-span-7"
          links={links}
          onNavigate={onNavigate}
        />
      </div>
    </nav>
  );
}
