import React from "react";

const Contact = React.forwardRef(function () {
  return (
    <div id="contact" className="border-t border-t-gray-900 bg-black">
      <div className="container mx-auto py-14">
        <section className="text-center text-white">
          <p className="mx-auto mb-12 text-2xl font-bold text-gray-300 md:w-1/2">
            I am always excited to work on some awesome projects, message me and
            let's discuss over Chai ☕️
          </p>
        </section>
        <div className="mx-auto md:w-1/3">
          <input
            type="text"
            placeholder="email address"
            className="focus:shadow-outline w-full border-slate-500 bg-slate-500 bg-opacity-10 px-4 py-3 text-slate-50 placeholder:text-gray-500 placeholder:text-opacity-40 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
});

export default Contact;
