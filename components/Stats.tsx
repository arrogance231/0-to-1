"use client";
import React from "react";
import { useChat } from "@/contexts/ChatContext";
import Image from "next/image";

const Stats = () => {
  const { stats } = useChat();

  return (
    <div className='p-4 rounded-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-4 font-bricolage'>
        Your Statistics
      </h2>
      <div className='flex flex-wrap justify-center gap-3 mb-3'>
        {/* Day Streak */}
        <div className='flex-1 min-w-[100px] max-w-[160px] bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl p-4 flex flex-col items-center text-white shadow'>
          <span className='mb-1'>
            <Image src='/flame.svg' alt='Day Streak' width={28} height={28} />
          </span>
          <span className='text-2xl font-bold'>12</span>
          <span className='text-xs opacity-90 mt-1'>Day Streak</span>
        </div>
        {/* Case Points */}
        <div className='flex-1 min-w-[100px] max-w-[160px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 flex flex-col items-center text-white shadow'>
          <span className='mb-1'>
            <Image src='/cross.svg' alt='Case Points' width={28} height={28} />
          </span>
          <span className='text-2xl font-bold'>{stats.points}</span>
          <span className='text-xs opacity-90 mt-1'>Case Points</span>
        </div>
        {/* Remaining Lives */}
        <div className='flex-1 min-w-[100px] max-w-[160px] bg-gradient-to-br from-red-400 to-orange-400 rounded-xl p-4 flex flex-col items-center text-white shadow'>
          <span className='mb-1'>
            <Image
              src='/heart.svg'
              alt='Remaining Lives'
              width={28}
              height={28}
            />
          </span>
          <span className='text-2xl font-bold'>{stats.lives}</span>
          <span className='text-xs opacity-90 mt-1'>Remaining Lives</span>
        </div>
      </div>
      <div className='flex justify-center gap-3'>
        {/* Cases Completed */}
        <div className='flex-1 min-w-[100px] max-w-[160px] bg-gray-200 rounded-xl p-4 flex flex-col items-center'>
          <span className='text-2xl font-bold text-[#1E4462]'>28</span>
          <span className='text-xs text-gray-600 mt-1'>Cases Completed</span>
        </div>
        {/* Avg. Accuracy */}
        <div className='flex-1 min-w-[100px] max-w-[160px] bg-gray-200 rounded-xl p-4 flex flex-col items-center'>
          <span className='text-2xl font-bold text-[#1E4462]'>87%</span>
          <span className='text-xs text-gray-600 mt-1'>Avg. Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
