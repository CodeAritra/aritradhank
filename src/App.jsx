import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/data/aritra.json`);
        const json = await res.json();
        console.log("data = ", json);

        if (active) setData(json);
      } catch (e) {
        console.error(e);
        if (active) setData(null);
      } finally {
        if (active) setLoading(false);
      }
    }

    load()
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {data && <Nav data={data} />}

      <div className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center"
            >
              Loading...
            </motion.div>
          )}

          {!loading && data && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Hero data={data.hero} />
              {/* <About data={data.about} /> */}
              {data.services && <Services services={data.services} />}
              {data.skills && <Skills skills={data.skills} />}
              {data.projects && <Project projects={data.projects} />}
              {data.work && (
                <Portfolio
                  items={data.work}
                  layoutVariant={data.layoutVariant}
                />
              )}
              {data.testimonials && <Testimonials data={data.testimonials} />}
              <Contact data={data.contact} />
            </motion.div>
          )}

          {!loading && !data && (
            <motion.div
              key="bad"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              Invalid niche. Use /tech, /creative or /business
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
