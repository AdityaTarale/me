import React from "react";
import Card from "../components/Card";
import ProjectPreview from "../components/ProjectPreview";

const Builds = React.forwardRef(function (props, ref) {
  return (
    <section id="builds" ref={ref} className="w-full bg-black">
      <div className="container relative mx-auto py-24 text-white sm:w-8/12">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Work</h2>
        <div className="z-[2] grid gap-2 sm:grid-cols-3 sm:grid-rows-[min-content,1fr]">
          {/* <Card className="">
            <h2>Coming Soon1</h2>
          </Card> */}
          <Card className="">
            <ProjectPreview
              image="npmBg"
              title="rvelocity-cli"
              description={[
                "A CLI for generating and managing React and React Native components with ease.",
                "Overview: rvelocity-cli enhances productivity by providing quick commands to initialize new projects and create components effortlessly. Say goodbye to repetitive tasks and focus on building robust features instead.",
              ]}
              tag="npm"
              website="https://www.npmjs.com/package/rvelocity-cli"
            />
          </Card>
          <Card className="sm:col-span-2">
            <ProjectPreview
              image="evieeTech"
              title="Eviee Technologies Limited"
              description={[
                "A dynamic website for Eviee Technologies Limited, offering IT solutions and consulting services for various industries.",
                "Overview: Designed as part of a freelance project, this site showcases Eviee Technologies’ innovative approach in tech solutions, helping them connect with a broad client base across sectors.",
              ]}
              tag="website"
              website="https://evieetech.com"
            />
          </Card>
          {/* <Card className="sm:row-span-2">
            <h2>Coming Soon4</h2>
          </Card> */}
          {/* <Card className="">
            <h2>Coming Soon5</h2>
          </Card> */}
          <Card className="sm:col-span-full">
            <ProjectPreview
              image="naest"
              title="The National Anveshika Experimental Skill Test (NAEST)"
              description={[
                "An annual competition in India focused on assessing and nurturing students’ experimental skills in physics.",
                "Overview: This open-source project is dedicated to retired IIT professor H.C. Verma, known for his contributions to physics education in India. NAEST aims to encourage students to engage with hands-on learning and experimentation.",
              ]}
              tag="webapp"
              website="https://naest.shiksha-sopan.org"
            />
          </Card>
        </div>
      </div>
    </section>
  );
});

export default Builds;
