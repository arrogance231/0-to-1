"use client";
import React from "react";
import { useChat } from "../../contexts/ChatContext";

const PatientHeader = () => {
  const { patient } = useChat();

  // Provide default data to prevent errors if the case is not yet loaded
  const patientInfo = patient?.patientInfo || {
    name: "Loading Patient...",
    details: "Please wait",
    avatarText: "...",
  };

  return (
    <div className='bg-[#279FD5] p-4 rounded-xl flex items-center gap-4 text-white'>
      <div className='relative flex-shrink-0'>
        <div className='w-20 h-20 rounded-full flex items-center justify-center border-2 border-white'>
          <span className='text-sm font-semibold text-center text-white font-sans'>
            {patientInfo.avatarText}
          </span>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-xl font-bricolage'>{patientInfo.name}</h2>
        <p className='text-sm opacity-90 font-sans'>{patientInfo.details}</p>
      </div>
    </div>
  );
};

export default PatientHeader;
