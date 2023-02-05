import React from "react";
import { getIcon } from "../assets";

export default function SocialLinks({ className }) {
  const socialLinks = [
    {
      link: "https://github.com/AdityaTarale",
      icon: getIcon("linkedIn"),
      alt: "Linkedin",
    },
    {
      link: "https://www.linkedin.com/in/aditya-tarale-about/",
      icon: getIcon("github"),
      alt: "Github",
    },
    {
      link: "#twitter",
      icon: getIcon("twitter"),
      alt: "Twitter",
    },
  ];

  return (
    <div className={className}>
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          return (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <img decoding="async" src={social.icon} alt={social.alt} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
