import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ElectricBorder from "./ElectricBorder";

const skillGroups = [
  {
    title: "Telephony & VoIP",
    items: [
      "Asterisk (22.x)",
      "SIP / PJSIP configuration",
      "ARI & AMI integration",
      "Dialplan design",
      "Trunks, IVR, Queues, Routing",
      "Extension management",
      "Call monitoring",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST API development",
      "MySQL",
      "SSH-based automation",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Admin dashboard UI development",
    ],
  },
  {
    title: "DevOps & Server Management",
    items: [
      "Ubuntu / Debian server administration",
      "VPS deployment & management",
      "Docker & Docker Compose",
      "Nginx / Apache",
      "Firewall (UFW)",
      "Fail2ban",
      "SSL configuration",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <AnimatedSection className="skills" id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={item}>
              <ElectricBorder
                color="#a78bfa"
                speed={1}
                chaos={0.1}
                borderRadius={12}
                style={{ borderRadius: 12 }}
              >
                <div className="skill-card">
                  <h3 className="skill-card-title">{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
