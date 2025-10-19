import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Project({ projects }) {
  return (
    <Section id="projects" className="py-16 ">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" bg-base-100 p-9 rounded-xl shadow-xl"
      >
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
        <div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="card bg-base-100  hover:shadow-2xl transition"
            >
              {/* Image */}
              <figure className="h-48 overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Text */}
              <div className="card-body text-center">
                <h4 className="card-title justify-center">{it.title}</h4>
                <p className="text-sm opacity-80">{it.category}</p>
                <div className="card-actions justify-center mt-3">
                  <button className="btn btn-primary btn-sm">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
