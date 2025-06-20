import React from "react";

const ClinicalTopics = () => {
  const topics = ["Cardiology", "Respiratory", "Neurology", "Gastro"];

  return (
    <div className='p-4 rounded-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>
        Latest Clinical Topics
      </h2>
      <div className='flex gap-2 overflow-x-auto sm:overflow-x-visible sm:flex-wrap'>
        {topics.map((topic, index) => (
          <div
            key={index}
            className='bg-[#EC5638] text-white px-3 py-2 rounded-lg flex items-center justify-center text-center font-semibold text-xs flex-1 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95'
            style={{ minHeight: "40px" }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalTopics;
