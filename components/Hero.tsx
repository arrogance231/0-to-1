"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='mx-4 my-4'>
      <div
        className='w-full overflow-x-hidden box-border rounded-lg p-3 sm:p-6'
        style={{
          minHeight: "240px",
          height: "40vh",
          background: "linear-gradient(90deg, #DCEAEB 0%, #F3F6F7 100%)",
        }}
      >
        <div className='w-full mx-auto flex flex-col sm:flex-row items-stretch justify-between h-full min-h-0 box-border'>
          {/* Left half */}
          <div className='flex-1 flex flex-col justify-center h-full gap-2 sm:gap-6 items-start text-left min-w-0 sm:pl-0 pl-0'>
            <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-black break-words font-bricolage'>
              Hi Matthew, ready to scrub in?
            </h1>
            <p className='text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-4 max-w-md break-words font-sans'>
              Continue your medical training journey with interactive
              simulations and expert mentorship.
            </p>
            <button className='w-full sm:w-fit px-3 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs xs:text-sm sm:text-base shadow transition font-sans'>
              New Patient
            </button>
          </div>
          {/* Right half */}
          <div className='flex-1 flex items-center justify-end h-full mt-4 sm:mt-0 min-w-0 sm:pr-0 pr-0'>
            <Image
              src='/micon.svg'
              alt='Medical Icon'
              width={320}
              height={320}
              className='object-contain w-[120px] h-[120px] xs:w-[180px] xs:h-[180px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] max-w-xs sm:max-w-full'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
