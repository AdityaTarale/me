import React from "react";
import Card from "../components/Card";

const Builds = React.forwardRef(function (props, ref) {
  return (
    <section id="builds" ref={ref} className="w-full bg-black">
      <div className="container relative mx-auto py-24 text-white sm:w-1/2">
        <div className="absolute inset-0 z-[1] grid place-items-center">
          <div className="h-3/4 w-1/4 translate-x-1/4 rotate-45 rounded-tl-3xl rounded-br-3xl bg-gradient-to-tl from-purple-400 to-orange-600 opacity-40 blur-3xl"></div>
          <div className="-translate-x-1/5 h-4/6 w-3/4 -rotate-12 rounded-tl-3xl rounded-br-3xl bg-gradient-to-l from-purple-800 to-orange-600 opacity-30 blur-3xl"></div>
        </div>
        <h2 className="mb-12 text-center text-4xl font-bold">My Builds</h2>
        <div className="z-[2] grid gap-2 sm:grid-cols-3 sm:grid-rows-3">
          <Card className="">
            <h2>Coming Soon</h2>
          </Card>
          <Card className="sm:row-span-2">
            <h2>Coming Soon</h2>
          </Card>
          <Card className="">
            <h2>Coming Soon</h2>
          </Card>
          <Card className="sm:row-span-2">
            <h2>Coming Soon</h2>
          </Card>
          <Card className="">
            <h2>Coming Soon</h2>
          </Card>
          <Card className="sm:col-span-2">
            <h2>Coming Soon</h2>
          </Card>
        </div>
      </div>
    </section>
  );
});

export default Builds;
