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
      <div className='flex flex-nowrap overflow-x-auto gap-3 mb-3 justify-center px-4 pl-6 pr-6 snap-x snap-mandatory'>
        {/* Day Streak */}
        <div className='w-[110px] bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl p-4 flex flex-col items-center justify-center text-white shadow snap-center shrink-0'>
          <span className='mb-2 flex items-center justify-center'>
            <Image src='/flame.svg' alt='Day Streak' width={32} height={32} />
          </span>
          <span className='text-2xl font-bold text-center'>12</span>
          <span className='text-xs opacity-90 mt-1 text-center'>
            Day Streak
          </span>
        </div>
        {/* Case Points */}
        <div className='w-[110px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 flex flex-col items-center justify-center text-white shadow snap-center shrink-0'>
          <span className='mb-2 flex items-center justify-center'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='32' height='32' rx='16' fill='url(#paint0_linear)' />
              <path
                d='M16 9v14M9 16h14'
                stroke='#fff'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='0'
                  y1='0'
                  x2='32'
                  y2='32'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#60A5FA' />
                  <stop offset='1' stopColor='#2563EB' />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className='text-2xl font-bold text-center'>{stats.points}</span>
          <span className='text-xs opacity-90 mt-1 text-center'>
            Case Points
          </span>
        </div>
        {/* Remaining Lives */}
        <div className='w-[110px] bg-gradient-to-br from-red-400 to-orange-400 rounded-xl p-4 flex flex-col items-center justify-center text-white shadow snap-center shrink-0'>
          <span className='mb-2 flex items-center justify-center'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='32' height='32' rx='16' fill='url(#paint1_linear)' />
              <path
                d='M16 24s-6-4.5-6-8.5A4.5 4.5 0 0116 11a4.5 4.5 0 016 4.5C22 19.5 16 24 16 24z'
                fill='#fff'
              />
              <defs>
                <linearGradient
                  id='paint1_linear'
                  x1='0'
                  y1='0'
                  x2='32'
                  y2='32'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F87171' />
                  <stop offset='1' stopColor='#F59E42' />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className='text-2xl font-bold text-center'>{stats.lives}</span>
          <span className='text-xs opacity-90 mt-1 text-center'>
            Remaining Lives
          </span>
        </div>
      </div>
      <div className='flex flex-nowrap overflow-x-auto justify-center gap-3'>
        {/* Cases Completed */}
        <div className='flex-1 min-w-0 sm:min-w-[120px] max-w-[160px] bg-gray-200 rounded-xl p-3 sm:p-4 flex flex-col items-center'>
          <span className='text-2xl font-bold text-[#1E4462]'>28</span>
          <span className='text-xs text-gray-600 mt-1'>Cases Completed</span>
        </div>
        {/* Avg. Accuracy */}
        <div className='flex-1 min-w-0 sm:min-w-[120px] max-w-[160px] bg-gray-200 rounded-xl p-3 sm:p-4 flex flex-col items-center'>
          <span className='text-2xl font-bold text-[#1E4462]'>87%</span>
          <span className='text-xs text-gray-600 mt-1'>Avg. Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
