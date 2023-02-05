import React from "react";

export default function Card({ className, children }) {
  return (
    <section
      className={`rounded-md border border-gray-300 border-opacity-25 bg-gray-900 bg-opacity-30 p-3 text-white ${className}`}
    >
      {children}
    </section>
  );
}
