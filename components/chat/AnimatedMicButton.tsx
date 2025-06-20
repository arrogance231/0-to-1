import React from "react";

interface AnimatedMicButtonProps {
  amplitude: number; // 0 to 1
}

const AnimatedMicButton: React.FC<AnimatedMicButtonProps> = ({ amplitude }) => {
  // Animate border thickness and color based on amplitude
  const borderWidth = 8 + amplitude * 12; // 8-20px
  const borderColor = `rgba(236, 86, 56, ${0.5 + amplitude * 0.5})`;
  return (
    <div
      className='flex items-center justify-center'
      style={{ width: 80, height: 80 }}
    >
      <div
        className='rounded-full flex items-center justify-center transition-all duration-100'
        style={{
          width: 80,
          height: 80,
          boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`,
          background: "#fff",
        }}
      >
        {/* Mic Icon */}
        <svg
          width='36'
          height='36'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#EC5638'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='9' y='2' width='6' height='12' rx='3' />
          <path d='M5 10v2a7 7 0 0 0 14 0v-2' />
          <line x1='12' y1='19' x2='12' y2='22' />
          <line x1='8' y1='22' x2='16' y2='22' />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedMicButton;
