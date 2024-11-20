import React from "react";
import SocialLinks from "./SocialLinks";
import NavbarLinks from "./NavbarLinks";
import { getIcon } from "../assets";

function LinkBoxes({ linksTop }) {
  const Links = [
    {
      title: "QUICK LINK",
      links: linksTop,
    },
    {
      title: "MISCELLANEOUS",
      links: [
        {
          linkName: "Gallery",
          linkUrl: "/gallery",
        },

        {
          linkName: "Me",
          linkUrl: "/me",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:gap-24">
      {Links.map((LinkBox) => {
        return (
          <div className="flex flex-col" key={LinkBox.title}>
            <h6 className="mb-3 text-sm text-gray-300">{LinkBox.title}</h6>
            <NavbarLinks className="space-y-2" links={LinkBox.links} />
          </div>
        );
      })}
    </section>
  );
}

export default function Footer({ links }) {
  return (
    <footer className="border-t border-t-gray-900 bg-black">
      <div className="container mx-auto py-14">
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-between">
          <section className="flex flex-col items-center gap-4">
            <img
              loading="lazy"
              src={getIcon("signature")}
              alt="signature"
              width={249}
            />
            <span className="text-sm text-gray-500">
              If you need any help, ping me !
            </span>
            <SocialLinks heading />
          </section>
          <LinkBoxes linksTop={links} />
        </div>
      </div>
      <p className="py-3 text-center text-gray-400">
        Crafted with ❤️ by Aditya Tarale
      </p>
    </footer>
  );
}
