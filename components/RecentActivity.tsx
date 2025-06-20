import Image from "next/image";
import React from "react";

const RecentActivity = () => {
  const cases = [
    {
      id: "041",
      title: "Abdominal pain",
      status: "Completed 2 hours ago",
      accuracy: "94%",
      icon: "/case41.svg",
    },
    {
      id: "040",
      title: "Headache",
      status: "Completed Yesterday",
      accuracy: "78%",
      icon: "/case40.svg",
    },
  ];

  return (
    <div className='p-4 rounded-lg bg-white shadow-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Recent Activity</h2>
      <div className='space-y-4'>
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md'
          >
            <Image
              src={caseItem.icon}
              alt={`Case ${caseItem.id}`}
              width={40}
              height={40}
            />
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-800'>
                Case #{caseItem.id} - {caseItem.title}
              </h3>
              <p className='text-sm text-gray-600'>
                {caseItem.status} • {caseItem.accuracy} accuracy
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
