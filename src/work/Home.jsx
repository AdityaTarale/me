import React from "react";

const Home = React.forwardRef(function () {
  return (
    <div id="home" className="home-box relative top-20 h-[calc(100vh-5rem)]">
      <main className="container mx-auto flex h-full items-center justify-center">
        <section className="text-center align-middle">
          <h1 className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl">
            Aditya Tarale
          </h1>
          <h1 className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl">
            I'm a developer
          </h1>
          <div className="my-24">
            <div className="group relative inline-block">
              <div className="absolute -inset-0.5 animate-tilt bg-gradient-to-r from-pink-800 to-purple-700 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <button className="btn relative rounded-md bg-white py-3 px-8 transition duration-200 group-hover:bg-slate-100">
                Download Resume
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

export default Home;

// source for gradient: https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
