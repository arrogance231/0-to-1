"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const NUM_CIRCLES = 10;
const CIRCLE_SIZE = [40, 60, 80, 100];
const CIRCLE_ANIM = [
  "float1 12s ease-in-out infinite",
  "float2 16s ease-in-out infinite",
  "float3 20s ease-in-out infinite",
  "float4 18s ease-in-out infinite",
];

function generateCircles() {
  return Array.from({ length: NUM_CIRCLES }).map((_, i) => {
    const size = CIRCLE_SIZE[Math.floor(Math.random() * CIRCLE_SIZE.length)];
    const left = Math.random() * 90; // percent
    const top = Math.random() * 65 + 5; // percent, avoid bottom 30%
    const anim = CIRCLE_ANIM[Math.floor(Math.random() * CIRCLE_ANIM.length)];
    return { size, left, top, anim, key: i };
  });
}

const Background: React.FC = () => {
  const [circles, setCircles] = useState<any[]>([]);
  useEffect(() => {
    setCircles(generateCircles());
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
      {circles.map(({ size, left, top, anim, key }) => (
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
          }}
        >
          <Image
            src='/circle.svg'
            alt='Floating Circle'
            width={size}
            height={size}
            style={{ opacity: 0.7 }}
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
      {/* Keyframes for floating animation */}
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
      `}</style>
    </div>
  );
};

export default Background;
