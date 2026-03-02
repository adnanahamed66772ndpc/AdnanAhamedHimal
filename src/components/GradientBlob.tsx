import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function GradientBlob() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blobs = [blob1.current, blob2.current, blob3.current].filter(Boolean);
    const tl = gsap.timeline({ repeat: -1 });
    blobs.forEach((blob, i) => {
      if (!blob) return;
      tl.to(
        blob,
        {
          x: `+=${(i - 1) * 60}`,
          y: `+=${i * 40}`,
          scale: 1.1 + i * 0.1,
          duration: 4 + i,
          ease: "sine.inOut",
        },
        i * 0.5
      );
      tl.to(
        blob,
        {
          x: `-=${(i - 1) * 60}`,
          y: `-=${i * 40}`,
          scale: 1,
          duration: 4 + i,
          ease: "sine.inOut",
        },
        4 + i * 0.5
      );
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="gradient-blob-container" aria-hidden>
      <div ref={blob1} className="blob blob-1" />
      <div ref={blob2} className="blob blob-2" />
      <div ref={blob3} className="blob blob-3" />
    </div>
  );
}
