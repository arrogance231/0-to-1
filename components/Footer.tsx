"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface FooterProps {
  isFixed?: boolean;
}

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

const Footer: React.FC<FooterProps> = ({ isFixed = true }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [casesMessage, setCasesMessage] = useState<string>("");

  useEffect(() => {
    const updateMessage = () => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        setCasesMessage(document.body.dataset.casesMessage || "");
      }
    };
    updateMessage();
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("cases-message-update", updateMessage);
      const observer = new MutationObserver(updateMessage);
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-cases-message"],
      });
      return () => {
        window.removeEventListener("cases-message-update", updateMessage);
        observer.disconnect();
      };
    }
    return () => {};
  }, []);

  const navItems = [
    { id: "cases", label: "Cases", icon: "/cases.svg", href: "/cases" },
    { id: "settings", label: "Settings", icon: "/settings.svg", href: "#" },
  ];

  const getActiveTab = () => {
    if (!pathname) return "";
    if (pathname.startsWith("/cases")) return "cases";
    if (pathname.startsWith("/settings")) return "settings";
    return "";
  };
  const activeTab = getActiveTab();

  const baseClasses = "w-full bg-white border-t border-gray-200 shadow-lg z-50";
  const fixedClasses = isFixed ? "fixed bottom-0 left-0 right-0" : "relative";

  return (
    <>
      <TopbarProgress />
      <nav
        className={`${baseClasses} ${fixedClasses}`}
        style={{ minHeight: 88 }}
      >
        <div className='relative flex items-center justify-between px-4 py-2'>
          {/* Cases nav item (left) */}
          <div className='flex flex-1 justify-start'>
            <Link
              href='/cases'
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-0 flex-1 transition-all duration-300 ease-in-out transform hover:scale-110 ${
                activeTab === "cases"
                  ? "text-blue-600 scale-110"
                  : "text-gray-500"
              }`}
            >
              <div className='w-8 h-8 flex items-center justify-center mb-1'>
                <Image
                  src='/cases.svg'
                  alt='Cases'
                  width={24}
                  height={24}
                  className={`transition-all duration-200 ${
                    activeTab === "cases" ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <span className='text-xs font-medium truncate font-sans'>
                Cases
              </span>
            </Link>
          </div>
          {/* Mascot icon in the center as a button to home, visually embedded */}
          <div className='absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 z-30 flex flex-col items-center w-[72px] sm:w-auto'>
            {casesMessage && (
              <div className='mb-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold shadow text-center whitespace-nowrap max-w-xs truncate border border-blue-100'>
                {casesMessage}
              </div>
            )}
            {/* Mascot button (z-20, above cutout) */}
            <button
              className='relative bg-white rounded-full shadow-lg p-2 flex items-center justify-center border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition hover:scale-105 active:scale-95 z-20'
              style={{ width: 80, height: 80, boxShadow: '0 0 0 4px #FFA50055' }}
              aria-label='PocketPatient Home'
              onClick={() => router.push("/")}
            >
              {/* Mascot icon */}
              <Image src='/icon.svg' alt='Mascot' width={56} height={56} />
            </button>
          </div>
          {/* Settings nav item (right) */} 
          <div className='flex flex-1 justify-end'>
            <Link
              href={navItems[1].href}
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-0 flex-1 transition-all duration-300 ease-in-out transform hover:scale-110 ${
                activeTab === "settings"
                  ? "text-blue-600 scale-110"
                  : "text-gray-500"
              }`}
            >
              <div className='w-8 h-8 flex items-center justify-center mb-1'>
                <Image
                  src={navItems[1].icon}
                  alt={navItems[1].label}
                  width={24}
                  height={24}
                  className={`transition-all duration-200 ${
                    activeTab === "settings" ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <span className='text-xs font-medium truncate font-sans'>
                Settings
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
