import Image from "next/image";
import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div
      className='relative rounded-lg p-6 flex justify-between items-start'
      style={{
        height: "180px",
        width: "100%",
        background: "linear-gradient(to right, #279FD5, #1E4462)",
      }}
    >
      {/* Left Text Content */}
      <div className='flex flex-col justify-center'>
        <h1 className='text-white font-bold text-xl mb-2 font-bricolage'>
          Ready to Practice?
        </h1>
        <p className='text-white text-sm mb-4 opacity-90 font-sans'>
          Sharpen your diagnostic skills with AI patients.
        </p>
        <Link href='/cases'>
          <button className='bg-white text-[#279FD5] font-semibold px-6 py-2 my-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-sans'>
            New Patient Practice
          </button>
        </Link>
      </div>

      {/* Top-right decoration */}
      <div className='absolute top-4 right-4 animate-pulse'>
        <Image src='/moon.svg' alt='moon' width={50} height={50} />
      </div>

      {/* Bottom-right decoration */}
      <div className='absolute bottom-4 right-4 animate-bounce'>
        <Image src='/orange.svg' alt='orange' width={30} height={30} />
      </div>
    </div>
  );
};

export default CallToAction;
