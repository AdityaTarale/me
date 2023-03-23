import React, { useState } from "react";

const Contact = React.forwardRef(function () {
  const titleArray = [
    "Write a message for me below",
    "Your Name",
    "Your Email",
  ];

  const inputType = ["text", "text", "email"];

  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [step, setStep] = useState(0);

  const handleSendEmail = () => {
    console.log("Sent");
  };

  const valueOfInput = () => {
    if (step == 0) {
      return message;
    }
    if (step === 1) {
      return fullName;
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
      setFullName(event.target.value);
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
    }
  };

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
  );
});

export default Contact;
