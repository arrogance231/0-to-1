import React from "react";
import Image from "next/image";

const news = [
  {
    image: "/case41.svg",
    title:
      "Fibroblast Growth Factor 8 drives key processes in embryonic development",
    category: "Nervous System",
    time: "1 Day ago",
  },
  {
    image: "/case40.svg",
    title: "Targeting ICAM-1 for new approaches in cancer therapy",
    category: "Cancer Medicine",
    time: "2 Days ago",
  },
];

const TrendingMedicalNews: React.FC = () => {
  return (
    <div className='p-4 rounded-lg bg-white shadow-lg'>
      <h2 className='text-lg font-bold text-gray-800 mb-3 font-bricolage'>
        Trending Medical News
      </h2>
      <div className='flex gap-4 overflow-x-auto pb-2'>
        {news.map((item, idx) => (
          <div
            key={idx}
            className='min-w-[260px] max-w-[260px] bg-[#F6F8FA] rounded-xl shadow border border-gray-100 flex flex-col p-3'
          >
            <div className='w-full h-28 rounded-lg overflow-hidden mb-2 flex items-center justify-center bg-white'>
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className='object-contain'
              />
            </div>
            <div className='flex-1 flex flex-col'>
              <div className='font-semibold text-sm text-gray-900 mb-1 line-clamp-2 font-sans'>
                {item.title}
              </div>
              <div className='text-xs text-gray-500 mb-2 font-sans'>
                {item.category} • {item.time}
              </div>
              <span className='self-start bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold font-sans'>
                Study
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMedicalNews;
