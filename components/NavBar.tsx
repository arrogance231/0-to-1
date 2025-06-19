import Image from "next/image";

const NavBar = () => {
  return (
    <nav className='w-full min-h-16 flex items-center justify-between px-4 sm:px-8 bg-[#FFFFFF] shadow border-b border-gray-200'>
      <div className='flex items-center gap-3 sm:gap-6'>
        <a href='/' className='font-semibold text-lg flex items-center'>
          <Image src={"/icon.svg"} alt='logo' width={32} height={32} />
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-black text-base sm:text-lg'
        >
          Mr. Simulation
        </a>
      </div>
      <div className='flex items-center gap-3 sm:gap-6'>
        <a
          href='#'
          className='text-gray-700 hover:text-black flex items-center'
        >
          <Image src={"/notif.svg"} alt='notification' width={32} height={32} />
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-black text-base sm:text-lg'
        >
          Matthew
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-black flex items-center'
        >
          <Image
            src={"/hamburger.svg"}
            alt='hamburger'
            width={32}
            height={32}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
