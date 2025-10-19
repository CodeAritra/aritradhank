import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

export default function About({ data }) {
  return (
    <Section id="about" className="py-16 ">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="card bg-base-100 rounded-xl shadow-xl p-9 mx-auto flex flex-col lg:flex-row min-h-[75vh]"
      >
        

        {/* Text */}
        <div className="card-body text-center lg:text-left">
          <h2 className="card-title text-3xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed">{data.text}</p>
        </div>
      </motion.div>
    </Section>
  );
}
