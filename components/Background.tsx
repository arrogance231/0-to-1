"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MOBILE_CIRCLES = 10;
const DESKTOP_CIRCLES = 24;
const CIRCLE_SIZE_MOBILE = [32, 48, 64, 80];
const CIRCLE_SIZE_DESKTOP = [48, 64, 80, 100, 120];
const CIRCLE_ANIM = [
  "float1 12s ease-in-out infinite",
  "float2 16s ease-in-out infinite",
  "float3 20s ease-in-out infinite",
  "float4 18s ease-in-out infinite",
  "drift1 22s linear infinite",
  "drift2 28s linear infinite",
];

interface Circle {
  size: number;
  left: number;
  top: number;
  anim: string;
  key: number;
  opacity: number;
}

function isDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 768;
}

function generateCircles(desktop: boolean) {
  const num = desktop ? DESKTOP_CIRCLES : MOBILE_CIRCLES;
  const sizes = desktop ? CIRCLE_SIZE_DESKTOP : CIRCLE_SIZE_MOBILE;
  return Array.from({ length: num }).map((_, i) => {
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const left = Math.random() * 90; // percent
    const top = Math.random() * (desktop ? 80 : 65) + 5; // percent
    const anim =
      CIRCLE_ANIM[
        Math.floor(Math.random() * (desktop ? CIRCLE_ANIM.length : 4))
      ];
    const opacity = desktop
      ? Math.random() * 0.4 + 0.4
      : Math.random() * 0.3 + 0.5;
    return { size, left, top, anim, key: i, opacity };
  });
}

const Background: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  useEffect(() => {
    const updateCircles = () => {
      setCircles(generateCircles(isDesktop()));
    };
    updateCircles();
    window.addEventListener("resize", updateCircles);
    return () => window.removeEventListener("resize", updateCircles);
  }, []);

  return (
    <div className='fixed inset-0 w-full h-full z-0 pointer-events-none select-none'>
      {/* Blue background */}
      <Image
        src='/bg-empty.svg'
        alt='Background'
        fill
        style={{ objectFit: "cover" }}
        className='z-0'
        priority
      />
      {/* Floating circles (only after mount) */}
      {circles.map(({ size, left, top, anim, key, opacity }) => (
        <div
          key={key}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            zIndex: 2,
            animation: anim,
            opacity,
          }}
        >
          <Image
            src='/circle.svg'
            alt='Floating Circle'
            width={size}
            height={size}
            style={{ opacity: 1, width: "100%", height: "100%" }}
          />
        </div>
      ))}
      {/* Wavy cutter at the bottom */}
      <div className='absolute left-0 w-full z-10' style={{ bottom: 0 }}>
        <Image
          src='/bg-cutter.svg'
          alt='Cutter'
          width={1920}
          height={200}
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      {/* Keyframes for floating and drifting animation */}
      <style jsx global>{`
        @keyframes float1 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-50px) scale(0.95);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.05);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        @keyframes float4 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-60px) scale(1.12);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        @keyframes drift1 {
          0% {
            transform: translateX(0px) scale(1);
          }
          50% {
            transform: translateX(60px) scale(1.1);
          }
          100% {
            transform: translateX(0px) scale(1);
          }
        }
        @keyframes drift2 {
          0% {
            transform: translateX(0px) scale(1);
          }
          50% {
            transform: translateX(-80px) scale(0.95);
          }
          100% {
            transform: translateX(0px) scale(1);
          }
        }
        @media (min-width: 768px) {
          /* Desktop: more bubbles, larger, slower, more drifting */
          .bubble {
            filter: blur(0.5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
