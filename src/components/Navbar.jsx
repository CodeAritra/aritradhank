import { useScroll, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ data }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { scrollYProgress } = useScroll();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // ✅ Dynamic links
  const links = [];
  if (data.about) links.push({ href: "about", label: "About" });
  if (data.skills) links.push({ href: "skills", label: "Skills" });
  if (data.projects) links.push({ href: "projects", label: "Projects" });
  if (data.services) links.push({ href: "services", label: "Services" });
  if (data.work) links.push({ href: "work", label: "Work" });
  if (data.testimonials)
    links.push({ href: "testimonials", label: "Testimonials" });
  if (data.contact) links.push({ href: "contact", label: "Contact" });

  // ✅ Smooth scroll without #
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // close drawer on link click
    }
  };

  return (
    <>
      <nav className="navbar bg-base-100 sticky top-0 z-50 backdrop-blur border-b border-base-300">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand / Name */}
          <span className="text-xl font-bold">My Portfolio — Demo</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.href)}
                className="btn btn-ghost btn-sm text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost text-xl"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          {/* Mobile Controls (darkmode + hamburger) */}
          <div className="flex md:hidden gap-2 items-center">
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost text-xl"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="btn btn-circle btn-ghost text-xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Drawer (Mobile Sidebar) */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer Panel */}
        {/* ✅ Drawer (Mobile Sidebar) */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Overlay — start *below* navbar */}
          <div
            className="absolute top-[64px] left-0 right-0 bottom-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Panel — start *below* navbar */}
          <div className="absolute right-0 top-[64px] h-[calc(100%-64px)] w-72 bg-base-200 shadow-xl flex flex-col p-4">
            <div className="flex flex-col gap-3">
              {links.map((link, i) => (
                <button
                  key={i}
                  onClick={() => handleScroll(link.href)}
                  className="btn btn-ghost btn-lg text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-[64px] left-0 right-0 h-1 bg-indigo-500 origin-left z-30"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
