"use client";

import { useEffect, useRef } from "react";

type LoopVideoProps = {
  src: string;
  className?: string;
  /** Sayfa açılışında görünen videolar için; diğerleri ekrana girince yüklenip oynatılır. */
  eager?: boolean;
};

/** Sessiz, döngüde oynayan dekoratif arka plan videosu. */
export default function LoopVideo({ src, className, eager = false }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (eager || !video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, src]);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      autoPlay={eager}
      preload={eager ? "auto" : "none"}
      muted
      loop
      playsInline
      aria-hidden
    />
  );
}
