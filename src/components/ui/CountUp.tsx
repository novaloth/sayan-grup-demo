"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  /** Milisaniye. */
  duration?: number;
};

/** Ekrana girdiğinde 0'dan value'ya kadar sayar ve orada durur. Ekran okuyucu yalnızca son değeri okur. */
export default function CountUp({ value, suffix = "", duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Hareket azaltma tercihi varsa sayma animasyonu yapılmaz.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          // İlk karenin zaman damgası start'tan biraz önce olabilir; t'yi 0–1 aralığında tut.
          const t = Math.min(Math.max((now - start) / duration, 0), 1);
          setCount(Math.round(value * (1 - (1 - t) ** 3))); // easeOutCubic
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </>
  );
}
