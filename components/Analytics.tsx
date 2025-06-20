import React from "react";

const Analytics: React.FC = () => {
  return (
    <div className='p-4 rounded-lg bg-white shadow-lg mb-6'>
      <h2 className='text-lg font-bold text-gray-800 mb-3'>Your Analytics</h2>
      <div className='flex flex-wrap gap-4'>
        {/* 7-Day Accuracy */}
        <div className='flex-1 bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-start min-w-[140px] max-w-[220px]'>
          <div className='flex items-center gap-2 mb-2'>
            <span className='font-semibold text-sm text-gray-700'>
              7-Day Accuracy
            </span>
            <span className='w-2 h-2 rounded-full bg-blue-400 inline-block' />
          </div>
          {/* Simple area chart mock */}
          <svg
            width='100%'
            height='40'
            viewBox='0 0 100 40'
            className='w-full h-10'
          >
            <polyline
              fill='#BFDBFE'
              stroke='#60A5FA'
              strokeWidth='2'
              points='0,35 10,32 20,30 30,28 40,25 50,20 60,18 70,22 80,28 90,32 100,30 100,40 0,40'
            />
          </svg>
        </div>
        {/* Daily Cases */}
        <div className='flex-1 bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-start min-w-[140px] max-w-[220px]'>
          <div className='flex items-center gap-2 mb-2'>
            <span className='font-semibold text-sm text-gray-700'>
              Daily Cases
            </span>
            <span className='w-2 h-2 rounded-full bg-red-400 inline-block' />
          </div>
          {/* Placeholder for chart */}
          <div className='w-full h-10 flex items-center justify-center text-gray-300 text-xs'>
            (No data)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
