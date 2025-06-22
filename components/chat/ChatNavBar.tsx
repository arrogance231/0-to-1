"use client";
import { useChat } from "@/contexts/ChatContext";
import Image from "next/image";

interface StatItemProps {
  icon: string;
  value: number;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, color }) => {
  return (
    <div className='flex items-center gap-1'>
      <Image src={icon} alt='' width={16} height={16} />
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
};

const ChatNavBar = () => {
  const { stats } = useChat();

  return (
    <nav className='bg-[#1E4462] shadow-lg z-50 px-4 py-2 w-full'>
      <div className='flex items-center justify-between'>
        {/* Left side - M icon */}
        <div className='flex items-center justify-center w-8 h-8 bg-[#279FD5] rounded-full'>
          <span className='text-white font-bold'>M</span>
        </div>

        {/* Center - Logo */}
        <div className='flex items-center gap-2'>
          <Image src='/icon.svg' alt='logo' width={32} height={32} />
          <span className='text-white font-semibold text-lg'>
            Pocket<span className='text-[#EC5638]'>Patient</span>
          </span>
        </div>

        {/* Right side - Stats */}
        <div className='flex items-center gap-3'>
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
  );
};

export default ChatNavBar;
