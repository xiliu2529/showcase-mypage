import { useState, useRef } from "react";

interface Props {
  text: string;
  duration?: number; // 总动画时间(ms)
  interval?: number; // 切换速度(ms)
  className?: string;
}
const CHARS =
  "ABCDEFGHIJKLM◆◇○●◎□■△▲▽▼※☆★NOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}<>?/|~";

export default function ScrambleTextHover({
  text,
  duration = 800, // 默认动画持续800ms
  interval = 80, // 默认每80ms切换一次字符
  className,
}: Props) {
  const [display, setDisplay] = useState(text);

  const frame = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const lastUpdate = useRef<number>(0);

  const scramble = () => {
    if (frame.current) cancelAnimationFrame(frame.current);

    start.current = null;
    lastUpdate.current = 0;

    const animate = (time: number) => {
      if (!start.current) start.current = time;

      const elapsed = time - start.current;

      // 控制字符更新速度
      if (time - lastUpdate.current > interval) {
        lastUpdate.current = time;

        const scrambled = text
          .split("")
          .map((c) =>
            c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join("");

        setDisplay(scrambled);
      }

      if (elapsed < duration) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    frame.current = requestAnimationFrame(animate);
  };

  return (
    <span className={className} onMouseEnter={scramble}>
      {display}
    </span>
  );
}
