import { motion } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function SplitTextMagnetic({ text, onClick, style }: Props) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMove = (e: React.MouseEvent) => {
    refs.current.forEach((el) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 120;

      if (distance < maxDistance) {
        const power = (maxDistance - distance) / maxDistance;

        const x = dx * power * 0.4;
        const y = dy * power * 0.4;

        el.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        el.style.transform = "translate(0px,0px)";
      }
    });
  };

  const handleLeave = () => {
    refs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "translate(0px,0px)";
    });
  };

  return (
    <span onMouseMove={handleMove} onMouseLeave={handleLeave} style={style}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          style={{
            display: "inline-block",
            transition: "transform 0.25s ease",
            cursor: onClick ? "pointer" : "default",
          }}
          whileHover={{
            scale: 1.15,
          }}
          onClick={onClick}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
