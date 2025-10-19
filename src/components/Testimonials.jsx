import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Section from "./Section";

export default function Testimonials({ data }) {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <Section id="testimonials" className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 text-center bg-base-100 p-9 rounded-xl shadow-xl">
        <h3 className="text-3xl font-bold text-center mb-10">Testimonials</h3>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="card bg-base-100  p-8"
        >
          <p className="text-xl italic opacity-80 leading-relaxed">
            “{data[index].text}”
          </p>
          <h4 className="mt-6 font-semibold text-primary text-lg">
            — {data[index].name}
          </h4>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`btn btn-xs btn-circle ${
                i === index ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
