import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SVG Goo filter - React Bits style (feGaussianBlur + feColorMatrix + feComposite) */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo-svg-defs" aria-hidden>
        <defs>
          <filter id="goo-nav">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <motion.nav
        className="nav nav-gooey"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            Portfolio
          </a>

          {/* Desktop: gooey pill nav */}
          <div className="nav-gooey-wrap" style={{ filter: "url(#goo-nav)" }}>
            <ul className="nav-links nav-links-gooey">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link-pill">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="nav-toggle-line"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="nav-toggle-line"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="nav-toggle-line"
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
