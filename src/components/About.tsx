import SplitText from "./SplitText";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection className="about" id="about">
      <div className="section-inner">
        <h2 className="section-title">
          <SplitText
            text="About Me"
            tag="span"
            splitType="chars"
            delay={40}
            duration={0.8}
            textAlign="left"
          />
        </h2>
        <p className="about-text">
          Self-driven Full-Stack Developer and Telecom System Builder with hands-on experience in
          Asterisk-based PBX systems, VPS infrastructure management, and web-based SaaS application
          development.
        </p>
        <p className="about-text">
          Experienced in building custom call center platforms, VoIP integrations, and scalable
          server environments—from dialplan design and ARI/AMI integration to React dashboards and
          Dockerized deployments.
        </p>
      </div>
    </AnimatedSection>
  );
}
