"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FooterProps {
  isFixed?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFixed = true }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [casesMessage, setCasesMessage] = useState<string>("");

  useEffect(() => {
    const updateMessage = () => {
      if (typeof window !== "undefined") {
        setCasesMessage(document.body.dataset.casesMessage || "");
      }
    };
    updateMessage();
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
    <nav className={`${baseClasses} ${fixedClasses}`} style={{ minHeight: 88 }}>
      {/* SVG cutout at the top center */}
      <div className='absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-8 z-20 pointer-events-none select-none'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 128 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0 Q64 40 128 0 V32 H0 V0Z' fill='#fff' />
        </svg>
      </div>
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
        <div className='absolute left-1/2 -translate-x-1/2 -top-8 z-30 flex flex-col items-center'>
          {casesMessage && (
            <div className='mb-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold shadow text-center whitespace-nowrap max-w-xs truncate border border-blue-100'>
              {casesMessage}
            </div>
          )}
          {/* Circular cutout background (z-10, behind mascot) */}
          <div
            className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none'
            style={{ width: 92, height: 92 }}
          >
            <svg
              width='92'
              height='92'
              viewBox='0 0 92 92'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='46' cy='46' r='46' fill='#fff' />
            </svg>
          </div>
          {/* Mascot button (z-20, above cutout) */}
          <button
            onClick={() => router.push("/")}
            className='relative bg-white rounded-full shadow-none p-2 flex items-center justify-center border-4 border-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition hover:scale-105 hover:animate-bounce active:scale-95 z-20'
            style={{ width: 80, height: 80 }}
            aria-label='PocketPatient Home'
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
  );
};

export default Footer;
