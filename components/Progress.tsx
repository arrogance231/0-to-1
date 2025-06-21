"use client";
import Image from "next/image";
import { useState } from "react";

const Progress = () => {
  const [score, setScore] = useState(72); // Adjustable percentage
  const completedHours = 18; // Example dynamic number
  const totalTraining = 40; // Example total training time

  return (
    <div className='w-full sm:px-0'>
      {/* Header */}
      <h2 className='text-lg sm:text-xl font-bold mx-6 font-bricolage'>
        Progress snapshot
      </h2>
      {/* Boxes */}
      <div className='flex flex-col sm:flex-row gap-4 w-ful mx-6'>
        {/* Box 1: Recent Score */}
        <div className='flex-1 basis-0 bg-white rounded-lg shadow p-3 sm:p-4 flex flex-col justify-between min-w-0 max-w-full w-full overflow-hidden'>
          <div className='flex items-center justify-between'>
            <span className='font-semibold text-base sm:text-lg font-sans'>
              Recent Score
            </span>
            <span className='font-bold text-xl sm:text-2xl'>{score}%</span>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='range'
              min={0}
              max={100}
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className='w-full accent-blue-600'
            />
            <span className='text-xs text-gray-500 font-sans'>Adjust</span>
          </div>
          <div className='w-full h-3 bg-gray-200 rounded mt-2'>
            <div
              className='h-3 bg-blue-600 rounded'
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        {/* Box 2: Completed Hours */}
        <div className='flex-1 basis-0 bg-white rounded-lg shadow p-3 sm:p-4 flex flex-col justify-between min-w-0 max-w-full w-full overflow-hidden'>
          <div className='flex items-center justify-between'>
            <span className='font-semibold text-base sm:text-lg font-sans'>
              Completed hours
            </span>
            <Image src='/clock.svg' alt='Clock' width={24} height={24} />
          </div>
          <div className='text-2xl sm:text-3xl font-bold'>{completedHours}</div>
          <div className='text-xs text-red-500 font-sans'>
            Total training time: {totalTraining} hrs
          </div>
        </div>
        {/* Box 3: Skill Level */}
        <div className='flex-1 basis-0 bg-white rounded-lg shadow p-3 sm:p-4 flex flex-col justify-between min-w-0 max-w-full w-full overflow-hidden'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image src='/dart.svg' alt='Dart' width={24} height={24} />
              <span className='font-semibold text-base sm:text-lg font-sans'>
                Skill Level
              </span>
            </div>
          </div>
          <div className='text-lg sm:text-xl font-bold'>Advanced</div>
          <div className='text-xs text-red-500 font-sans'>
            Current Proficiency
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
