"use client";
import { useChat } from "@/contexts/ChatContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface StatItemProps {
  icon: string;
  value: number;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, color }) => {
  return (
    <div className='flex items-center gap-1'>
      <Image src={icon} alt='' width={16} height={16} />
      <span className={`font-bold text-xs sm:text-sm ${color}`}>{value}</span>
    </div>
  );
};

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

const ChatNavBar = () => {
  const { stats } = useChat();
  const [userInitials, setUserInitials] = useState("?");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onboardingInfo = localStorage.getItem("onboardingInfo");
      if (onboardingInfo) {
        const { name } = JSON.parse(onboardingInfo);
        if (name) {
          const initials = name
            .split(" ")
            .map((n: string) => n[0])
            .join("")
            .toUpperCase();
          setUserInitials(initials);
        }
      }
    }
  }, []);

  return (
    <>
      <TopbarProgress />
      <nav className='bg-[#1E4462] shadow-lg z-50 py-1 w-full rounded-none sm:rounded-xl'>
        <div className='flex items-center justify-between px-2 sm:px-6 gap-2 sm:gap-6'>
          {/* Left side - Back button and User Initials Avatar */}
          <div className='flex items-center gap-1 sm:gap-2'>
            <button
              onClick={() => router.back()}
              className='p-1 rounded-full hover:bg-[#279FD5]/30 focus:outline-none focus:ring-2 focus:ring-blue-300 transition'
              aria-label='Back'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13 16L7 10L13 4'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <div className='flex items-center justify-center w-7 h-7 bg-[#279FD5] rounded-full'>
              <span className='text-white font-bold text-base'>
                {userInitials}
              </span>
            </div>
          </div>

          {/* Center - Logo and Title */}
          <div className='flex items-center gap-1 sm:gap-2'>
            <Image src='/icon.svg' alt='logo' width={24} height={24} />
            <span className='text-white font-semibold text-base sm:text-lg'>
              Pocket<span className='text-[#EC5638]'>Patient</span>
            </span>
          </div>

          {/* Right side - Stats */}
          <div className='flex items-center gap-2 sm:gap-3'>
            <StatItem
              icon='/cross.svg'
              value={stats.points}
              color='text-blue-400'
            />
            <StatItem
              icon='/flame.svg'
              value={stats.cases}
              color='text-orange-400'
            />
            <StatItem
              icon='/heart.svg'
              value={stats.lives}
              color='text-red-500'
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default ChatNavBar;
