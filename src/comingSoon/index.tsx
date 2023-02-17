import React, { createRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function ComingSoon() {
  const { pathname } = useLocation();

  return (
    <div className="h-screen w-full">
      <section className="container mx-auto py-24 text-center align-middle">
        <h1 className="bg-gradient-to-r from-green-700 via-blue-800 to-pink-500 bg-clip-text text-[3rem] font-extrabold leading-initial text-transparent sm:text-[6rem]">
          {pathname} Coming Soon
        </h1>

        <div className="my-24">
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
