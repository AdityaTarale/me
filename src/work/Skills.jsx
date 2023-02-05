import React from "react";
import { getIcon } from "../assets";

function SkillBoxCardLone() {
  return (
    <li className="opacity: 0.5 transform:none grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10 opacity-60" />
  );
}

function SkillBoxCardDead() {
  return (
    <li className="opacity: 0.3; transform: none; grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10 opacity-30" />
  );
}

function SkillBoxCardActive({ box }) {
  return (
    <li className="opacity: 1  transform: none  grid aspect-square w-20 place-items-center rounded-lg border border-emerald-600/30 bg-emerald-600/10">
      <span className="relative m-0 box-border inline-block w-full overflow-hidden border-0 bg-none p-2 opacity-100">
        <span className="m-0 box-border flex w-full items-center justify-center border-0 bg-none p-0 opacity-100">
          <img
            loading="lazy"
            className="m-0 block w-full border-0 bg-none p-0 opacity-100"
            alt={box.condition}
            aria-hidden="true"
            src={box.iconUrl}
          />
        </span>
      </span>
    </li>
  );
}

const Skills = React.forwardRef(function () {
  return (
    <main className="flex justify-center bg-black">
      <section className="container mx-auto flex flex-col items-center justify-center py-24 text-white">
        <h2 className="mb-12 text-center text-4xl font-bold">My Skills</h2>
        <div className="w-full overflow-x-scroll">
          <ul className="opacity: 1 transform: none mx-auto flex w-[calc(100rem)] max-w-5xl flex-wrap items-center justify-center gap-2 overflow-x-scroll p-1">
            {boxArray.map((box, i) => {
              if (box.condition === "dead") {
                return <SkillBoxCardDead key={box.condition + i} />;
              }
              if (box.condition === "lone") {
                return <SkillBoxCardLone key={box.condition + i} />;
              }
              return <SkillBoxCardActive box={box} key={box.condition + i} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
});

export default Skills;

const boxArray = [
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("firebase"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("redux"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("scss"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("ionic"),
  },
  {
    condition: "active",
    iconUrl: getIcon("mongo"),
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("router"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("tailwind"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("material"),
  },
  {
    condition: "active",
    iconUrl: getIcon("query"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("postman"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("typescript"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("node"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("react"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("javascript"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("css"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("vscode"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("jira"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("saga"),
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("ubuntu"),
  },
  {
    condition: "lone",
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("json"),
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("githubColored"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("linux"),
  },
  {
    condition: "dead",
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("html"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("openLayers"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("styleGuide"),
  },
  {
    condition: "active",
    iconUrl: getIcon("express"),
  },
  {
    condition: "dead",
  },
  {
    condition: "lone",
  },
  {
    condition: "active",
    iconUrl: getIcon("nginx"),
  },
  {
    condition: "dead",
  },
  {
    condition: "active",
    iconUrl: getIcon("testing"),
  },
  {
    condition: "lone",
  },
  {
    condition: "dead",
  },
];
