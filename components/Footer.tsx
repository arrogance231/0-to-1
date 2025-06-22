"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  isFixed?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFixed = true }) => {
  const pathname = usePathname();

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
    <nav className={`${baseClasses} ${fixedClasses}`}>
      <div className='flex items-center justify-around py-2'>
        {navItems.map((item) => (
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
    </nav>
  );
};

export default Footer;
