"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TopbarProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Animate the bar width
  const start = () => {
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
      progressRef.current.style.opacity = "1";
      let width = 0;
      const animate = () => {
        if (width < 90) {
          width += Math.random() * 10;
          progressRef.current!.style.width = `${Math.min(width, 90)}%`;
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animate();
    }
  };

  // Complete the bar
  const finish = () => {
    if (progressRef.current) {
      progressRef.current.style.width = "100%";
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.opacity = "0";
          progressRef.current.style.width = "0%";
        }
      }, 300);
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    // Listen for route changes
    const handleStart = () => start();
    const handleComplete = () => finish();
    // Next.js app router does not have events, so we use browser events
    window.addEventListener("routeChangeStart", handleStart);
    window.addEventListener("routeChangeComplete", handleComplete);
    window.addEventListener("routeChangeError", handleComplete);
    return () => {
      window.removeEventListener("routeChangeStart", handleStart);
      window.removeEventListener("routeChangeComplete", handleComplete);
      window.removeEventListener("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: "0%",
        background: "linear-gradient(90deg, #279FD5 0%, #FACC15 100%)",
        zIndex: 9999,
        transition: "width 0.2s ease, opacity 0.3s ease",
        opacity: 0,
        pointerEvents: "none",
      }}
    />
  );
};

const NavBar = () => {
  return (
    <>
      <TopbarProgress />
      <nav className='fixed top-0 left-0 right-0 bg-[#1E4462] shadow-lg z-50'>
        <div className='flex items-center justify-between px-4 py-3'>
          {/* Left side - matt.svg */}
          <div className='flex items-center'>
            <Image src='/matt.svg' alt='matt' width={32} height={32} />
          </div>

          {/* Center - icon.svg and PocketPatient text */}
          <div className='flex items-center gap-2'>
            <Image src='/icon.svg' alt='logo' width={32} height={32} />
            <span className='text-white font-semibold text-lg font-bricolage'>
              Pocket<span className='text-[#EC5638]'>Patient</span>
            </span>
          </div>

          {/* Right side - empty for balance */}
          <div className='w-8'></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
