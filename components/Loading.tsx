import React from "react";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full min-h-[300px]'>
      <Image
        src='/animation.svg'
        alt='Loading animation'
        width={180}
        height={180}
        priority
        className='animate-pulse'
      />
      <span className='mt-6 text-lg text-blue-700 font-semibold animate-pulse'>
        Loading...
      </span>
    </div>
  );
};

export default Loading;
