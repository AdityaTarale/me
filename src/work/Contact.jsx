import React, { useState } from "react";
import {
  CORS_PROXY,
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_EMAIL_ID,
  GOOGLE_FORM_MESSAGE_ID,
  GOOGLE_FORM_NAME_ID,
} from "../config";

const Contact = React.forwardRef(function () {
  const titleArray = [
    "Write a message for me below",
    "Your Name",
    "Your Email",
  ];

  const inputType = ["text", "text", "email"];

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [step, setStep] = useState(0);

  const valueOfInput = () => {
    if (step == 0) {
      return message;
    }
    if (step === 1) {
      return name;
    }
    if (step === 2) {
      return email;
    }
  };

  const handleChange = (event) => {
    if (step == 0) {
      setMessage(event.target.value);
    }
    if (step === 1) {
      setName(event.target.value);
    }
    if (step === 2) {
      setEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step == 0) {
      setStep(1);
    }
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      setStep(3);
      setTimeout(() => {
        sendEmail();
      }, 1500);
    }
  };

  const sendEmail = () => {
    const formData = new FormData();

    formData.append(GOOGLE_FORM_MESSAGE_ID, message);
    formData.append(GOOGLE_FORM_NAME_ID, name);
    formData.append(GOOGLE_FORM_EMAIL_ID, email);
    fetch(CORS_PROXY + GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      data: formData,
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };

  return (
    <div id="contact" className="border-t border-t-gray-900 bg-black">
      <div className="container relative mx-auto py-24 text-white sm:w-8/12">
        <div className="absolute inset-0 z-[1] grid place-items-center">
          <div className="h-3/4 w-1/4 translate-x-1/4 rotate-45 rounded-tl-3xl rounded-br-3xl bg-gradient-to-tl from-purple-400 to-orange-600 opacity-40 blur-3xl"></div>
          <div className="-translate-x-1/5 h-4/6 w-3/4 -rotate-12 rounded-tl-3xl rounded-br-3xl bg-gradient-to-l from-purple-800 to-orange-600 opacity-30 blur-3xl"></div>
        </div>
        <div className="container mx-auto py-14">
          <section className="text-center text-white">
            <p className="mx-auto mb-12 text-2xl font-bold text-gray-300 md:w-1/2">
              🌟 Excited to work on more impactful projects? Drop me a message,
              and let’s bring your ideas to life over a cup of coffee ☕!
            </p>
          </section>
          <div className="mx-auto md:w-96">
            {/* <h5 className="mb-2 text-xl font-medium text-gray-600">
            
          </h5> */}
            <form onSubmit={handleSubmit}>
              <input
                type={inputType[step]}
                value={valueOfInput()}
                onChange={handleChange}
                placeholder={titleArray[step]}
                className="focus:shadow-outline w-full rounded-sm border-slate-500 bg-slate-500 bg-opacity-30 px-4 py-3 text-slate-100 placeholder:text-gray-300 placeholder:text-opacity-40 focus:outline-none"
              />
            </form>
            <div className="max-w-full shadow">
              <div
                className="h-1 rounded bg-gray-200"
                role="progressbar"
                aria-valuenow="width"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="h-1 bg-green-400 text-center"
                  style={{
                    width: `${step * 33.33}%`,
                    transition: "width 2s ease-out",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
