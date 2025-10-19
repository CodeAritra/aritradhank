import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Hero({ data }) {
  return (
    <Section
      id="hero"
      className="py-12 sm:py-16 bg-base-100 rounded-2xl shadow-xl max-h-[85vh] md:min-h-[75vh]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:gap-12 md:grid-cols-2 items-center px-4"
      >
        <div className="text-center md:text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {data.title}
          </h1>
          <h2
            className="text-2xl sm:text-sm md:text-md lg:text-2xl font-extrabold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {data.subtitle}
          </h2>
          <p className="mt-4 max-w-xl mx-auto md:mx-0  text-base sm:text-lg">
            {data.description}
          </p>
          {data.cta && (
            <a
              href={data.cta.href}
              className="inline-block mt-6 px-5 py-3 rounded-full bg-gradient-to-r 
            from-pink-500 to-indigo-500 text-white font-medium shadow-lg 
            hover:opacity-90 transition text-sm sm:text-base"
            >
              {data.cta.label}
            </a>
          )}
        </div>
        <motion.div className="w-full max-w-md mx-auto">
          <img
            src={data.image}
            alt="hero"
            className="rounded-xl shadow-xl object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
