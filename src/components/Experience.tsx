import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  "Designed and deployed a production-ready Asterisk PBX server for remote call center agents.",
  "Built a web-based admin panel to create and manage extensions dynamically.",
  "Implemented ARI/AMI integration for live call monitoring.",
  "Managed multiple VPS environments (local and international hosting).",
  "Configured secure SIP environments with firewall and intrusion protection.",
  "Automated system setup processes using scripts.",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <AnimatedSection className="experience" id="experience">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <motion.ul
          className="experience-list"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((text) => (
            <motion.li key={text} className="experience-item" variants={listItem}>
              <span className="experience-bullet" aria-hidden />
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
