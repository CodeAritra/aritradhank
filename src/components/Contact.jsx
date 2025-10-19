import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Section from "./Section";

export default function Contact({ data }) {
  if (!data) return null;

  return (
    <Section id="contact" className="py-20 ">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" text-center bg-base-100 p-9 rounded-xl shadow-xl "
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {data.instagram && (
            <motion.a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="btn btn-circle btn-outline text-pink-500 hover:bg-pink-500 hover:text-white text-2xl"
            >
              <FaInstagram />
            </motion.a>
          )}

          {data.facebook && (
            <motion.a
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="btn btn-circle btn-outline text-blue-600 hover:bg-blue-600 hover:text-white text-2xl"
            >
              <FaFacebook />
            </motion.a>
          )}

          {data.gmail && (
            <motion.a
              href={`mailto:${data.gmail}`}
              whileHover={{ scale: 1.2 }}
              className="btn btn-circle btn-outline text-red-500 hover:bg-red-500 hover:text-white text-2xl"
            >
              <FaEnvelope />
            </motion.a>
          )}

          {data.linkedin && (
            <motion.a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="btn btn-circle btn-outline text-blue-700 hover:bg-blue-700 hover:text-white text-2xl"
            >
              <FaLinkedin />
            </motion.a>
          )}
          {data.github && (
            <motion.a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="btn btn-circle btn-outline text-black hover:bg-black hover:text-white text-2xl"
            >
              <FaGithub />
            </motion.a>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
