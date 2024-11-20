import React from "react";
import { getIcon } from "../assets";

export default function SocialLinks({ className }) {
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/aditya-tarale-about/",
      icon: getIcon("linkedIn"),
      alt: "Linkedin",
    },
    {
      link: "https://github.com/AdityaTarale",
      icon: getIcon("github"),
      alt: "Github",
    },
    {
      link: "https://x.com/AdiTarale",
      icon: getIcon("twitter"),
      alt: "Twitter",
    },
  ];

  return (
    <div className={className}>
      <div className="flex justify-end space-x-4">
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
