import React from "react";

export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full max-w-6xl mx-auto px-4 md:px-8 py-12 ${className}`}
    >
      {children}
    </section>
  );
}
