import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const EMAIL = "adnanahamed6677@yahoo.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatedSection className="contact" id="contact">
      <div className="section-inner contact-inner">
        <h2 className="section-title">Get in Touch</h2>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'd love to hear from you. Say hello!
        </motion.p>
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <motion.button
            type="button"
            className="contact-link contact-email-btn"
            onClick={copyEmail}
            title={`Click to copy: ${EMAIL}`}
            aria-label={`Copy email ${EMAIL}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? "Copied!" : "Email"}
          </motion.button>
          <motion.a
            href="https://github.com/himalahamed99"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/adnan-ahamed-himal-39b442386/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
