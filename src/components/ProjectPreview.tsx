import React from "react";
import { getIcon } from "../assets";

export default function ProjectPreview({
  image,
  url,
  title,
  description,
  tag,
  website,
}: {
  image: string;
  url: string;
  title: string;
  description: string[];
  tag: string;
  website: string;
}) {
  return (
    <div className="flex flex-col">
      <img loading="lazy" src={getIcon(image)} alt="signature" />
      <div className="w-full p-4">
        <h3
          data-testid="title"
          className="mb-2 text-lg font-semibold text-white"
        >
          {title}
        </h3>
        {description.length && (
          <span data-testid="desc" className="mb-2 block text-sm text-white">
            {description.length > 100
              ? description[0].slice(0, 100) + "..."
              : description[0]}
          </span>
        )}
        <div className="text-sm">
          <span className="font-medium text-white">{tag}</span> •{" "}
          <span className="text-slate-50">{website}</span>
        </div>
      </div>
      <span className="block w-full p-4 text-sm text-white">
        {description[1]}
      </span>
    </div>
  );
}
