"use client";
import Image from "next/image";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
