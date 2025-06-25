"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface FooterProps {
  isFixed?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFixed = true }) => {
  const pathname = usePathname();
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
    { id: "home", label: "Home", icon: "/home.svg", href: "/" },
    { id: "cases", label: "Cases", icon: "/cases.svg", href: "/cases" },
    { id: "clinic", label: "Clinic", icon: "/clinic.svg", href: "/chat" },
    { id: "settings", label: "Settings", icon: "/settings.svg", href: "#" },
  ];

  const getActiveTab = () => {
    if (!pathname) return "";
    if (pathname === "/") return "home";
    if (pathname.startsWith("/cases")) return "cases";
    if (pathname.startsWith("/chat")) return "clinic";
    return "";
  };
  const activeTab = getActiveTab();

  const baseClasses = "w-full bg-white border-t border-gray-200 shadow-lg z-50";
  const fixedClasses = isFixed ? "fixed bottom-0 left-0 right-0" : "relative";

  return (
    <nav className={`${baseClasses} ${fixedClasses}`} style={{ minHeight: 72 }}>
      <div className='relative flex items-center justify-between px-4 py-2'>
        {/* Left nav items */}
        <div className='flex flex-1 justify-evenly'>
          {navItems.slice(0, 2).map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-0 flex-1 transition-all duration-300 ease-in-out transform hover:scale-110 ${
                activeTab === item.id
                  ? "text-blue-600 scale-110"
                  : "text-gray-500"
              }`}
            >
              <div className='w-8 h-8 flex items-center justify-center mb-1'>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`transition-all duration-200 ${
                    activeTab === item.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <span className='text-xs font-medium truncate font-sans'>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        {/* Mascot icon in the center */}
        <div className='absolute left-1/2 -translate-x-1/2 -top-7 z-10 flex flex-col items-center'>
          {casesMessage && (
            <div className='mb-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold shadow-sm text-center whitespace-nowrap max-w-xs truncate'>
              {casesMessage}
            </div>
          )}
          <div
            className='bg-white rounded-full shadow-lg p-2 flex items-center justify-center border-2 border-blue-100'
            style={{ width: 64, height: 64 }}
          >
            <Image src='/icon.svg' alt='Mascot' width={48} height={48} />
          </div>
        </div>
        {/* Right nav items */}
        <div className='flex flex-1 justify-evenly'>
          {navItems.slice(2).map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-0 flex-1 transition-all duration-300 ease-in-out transform hover:scale-110 ${
                activeTab === item.id
                  ? "text-blue-600 scale-110"
                  : "text-gray-500"
              }`}
            >
              <div className='w-8 h-8 flex items-center justify-center mb-1'>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`transition-all duration-200 ${
                    activeTab === item.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <span className='text-xs font-medium truncate font-sans'>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Footer;
