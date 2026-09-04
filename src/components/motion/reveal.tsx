"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Motion tokens ported from the MegaFon 5G demo (docs/MOTION_SYSTEM.md).
const CARD_REVEAL_TIMING = { duration: 0.84, ease: "power3.out" } as const;
const CARD_REVEAL_RISE = 120;
const NESTED_CARD_REVEAL_RISE = 32;
const NESTED_STAGGER = 0.08;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Rendered wrapper element. Reuse an existing grid/list by passing its classes here. */
  as?: ElementType;
  /** ScrollTrigger start line. Reference uses "top 85%" on desktop, "top 95%" on mobile. */
  start?: string;
  /** Big cards flip in 3D (rotateX). Dense small cards rise + fade only. */
  flip?: boolean;
  /** Animate only matching descendants instead of direct children. */
  selector?: string;
  stagger?: number;
};

export function Reveal({
  children,
  className,
  as,
  start = "top 85%",
  flip = true,
  selector,
  stagger = NESTED_STAGGER,
}: RevealProps) {
  const scope = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets: Element[] = selector
          ? Array.from(root.querySelectorAll(selector))
          : Array.from(root.children);
        if (targets.length === 0) return;

        const rise = flip ? CARD_REVEAL_RISE : NESTED_CARD_REVEAL_RISE;
        const from = flip
          ? {
              y: rise,
              autoAlpha: 0,
              rotationX: -68,
              z: -36,
              transformPerspective: 900,
              transformOrigin: "50% 0%",
              willChange: "transform,opacity",
            }
          : { y: rise, autoAlpha: 0, willChange: "transform,opacity" };

        gsap.fromTo(targets, from, {
          y: 0,
          autoAlpha: 1,
          rotationX: 0,
          z: 0,
          transformPerspective: 900,
          ...CARD_REVEAL_TIMING,
          stagger: targets.length > 1 ? stagger : 0,
          immediateRender: true,
          clearProps: "willChange",
          scrollTrigger: {
            trigger: root,
            start,
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope },
  );

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}
