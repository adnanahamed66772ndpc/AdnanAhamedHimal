import { useRef, useEffect, useMemo, createElement } from "react";
import gsap from "gsap";
import { useInView } from "framer-motion";

type SplitType = "chars" | "words" | "lines" | "words, chars";

interface SplitTextProps {
  text: string;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: `${string}px` | `${string}%`;
  textAlign?: "left" | "center" | "right";
  onComplete?: () => void;
}

export default function SplitText({
  text,
  tag: Tag = "p",
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-80px",
  textAlign = "center",
  onComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: rootMargin as `${number}px`,
  });

  const elements = useMemo(() => {
    if (!text) return [];
    if (splitType === "chars") {
      return text.split("").map((char, i) => (
        <span key={i} className="split-char" style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    if (splitType === "words") {
      return text.split(/\s+/).map((word, i) => (
        <span key={i} className="split-word" style={{ display: "inline-block", marginRight: "0.25em" }}>
          {word}
        </span>
      ));
    }
    if (splitType === "lines") {
      return text.split("\n").map((line, i) => (
        <span key={i} className="split-line" style={{ display: "block" }}>
          {line}
        </span>
      ));
    }
    return text.split(/\s+/).map((word, wi) => (
      <span key={wi} className="split-word" style={{ display: "inline-block", marginRight: "0.25em" }}>
        {word.split("").map((char, ci) => (
          <span key={ci} className="split-char" style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    ));
  }, [text, splitType]);

  useEffect(() => {
    if (!ref.current || !isInView) return;
    const el = ref.current;
    const targets =
      splitType === "chars"
        ? el.querySelectorAll(".split-char")
        : splitType === "words"
          ? el.querySelectorAll(".split-word")
          : el.querySelectorAll(".split-line");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease: ease as gsap.EaseString,
          stagger: delay / 1000,
          onComplete,
        }
      );
    }, el);
    return () => ctx.revert();
  }, [isInView, splitType, delay, duration, ease, from, to, onComplete]);

  return createElement(
    Tag,
    {
      ref,
      className,
      style: { textAlign },
    },
    elements
  );
}
