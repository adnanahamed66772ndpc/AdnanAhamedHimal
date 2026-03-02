import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    id: 1,
    title: "PBX System",
    subtitle: "Web-Controlled Call Center Platform",
    description:
      "Production-ready PBX with Asterisk 22.x. Web admin panel for extensions, trunks, and routes. Inbound & outbound routing, queues, IVR. ARI/AMI real-time call monitoring. Firewall and intrusion protection.",
    tags: ["Asterisk 22.x", "Node.js", "ARI/AMI", "React", "IVR"],
    href: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Live Call Monitoring Dashboard",
    subtitle: "ARI-Based Real-Time System",
    description:
      "Real-time call tracking with Asterisk ARI: active calls, caller ID, channel state, duration. Modern React dashboard connected to telephony backend API.",
    tags: ["Asterisk ARI", "React", "REST API", "Real-time"],
    href: "#",
  },
  {
    id: 3,
    title: "Extension Automation System",
    subtitle: "Web-Based SSH Automation",
    description:
      "SSH-driven automation to generate Asterisk extensions. Database-driven config model, no manual edits. Backend applies changes instantly.",
    tags: ["Asterisk", "SSH", "Automation", "Node.js"],
    href: "#",
  },
  {
    id: 4,
    title: "ADNFLIX",
    subtitle: "OTT Streaming Platform",
    description:
      "Netflix-style streaming app. Node.js & Express REST API. VPS deployment, Dockerized architecture. Scalable media storage experiments.",
    tags: ["React", "Node.js", "Docker", "VPS", "REST API"],
    href: "#",
  },
  {
    id: 5,
    title: "Multi-VPS DevOps",
    subtitle: "Infrastructure & Deployment",
    description:
      "Multiple Ubuntu/Debian servers. Docker environments and container networking. SSL, firewall, security hardening. Production web app deployment.",
    tags: ["Ubuntu", "Docker", "SSL", "DevOps"],
    href: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <AnimatedSection className="projects" id="projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.href}
              className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-card-glow" />
              {project.featured && <span className="project-badge">Top project</span>}
              <h3>{project.title}</h3>
              {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
