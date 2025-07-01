"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewPatientModal from "./NewPatientModal";

const CallToAction = () => {
  const [hasHistory, setHasHistory] = useState(false);
  const [lastPatient, setLastPatient] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      try {
        const chatState = sessionStorage.getItem("chatState");
        if (chatState) {
          const { messages, patient } = JSON.parse(chatState);
          if (
            messages &&
            messages.length > 1 &&
            patient &&
            patient.patientInfo?.name
          ) {
            setHasHistory(true);
            setLastPatient(patient.patientInfo.name);
          }
        }
      } catch {}
    }
  }, []);

  return (
    <div
      className='relative rounded-lg p-6 flex justify-between items-start'
      style={{
        height: "180px",
        width: "100%",
        background: "linear-gradient(to right, #279FD5, #1E4462)",
      }}
    >
      {/* Left Text Content */}
      <div className='flex flex-col justify-center'>
        <h1 className='text-white font-bold text-xl mb-2 font-bricolage'>
          {hasHistory ? "Continue Where You Left Off" : "Ready to Practice?"}
        </h1>
        <p className='text-white text-sm mb-4 opacity-90 font-sans'>
          {hasHistory
            ? `Resume your last session with ${
                lastPatient ? lastPatient : "your patient"
              }.`
            : "Sharpen your diagnostic skills with AI patients."}
        </p>
        {hasHistory ? (
          <Link href='/chat'>
            <button
              className={`bg-white text-[#279FD5] font-semibold px-6 py-2 my-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-sans flex items-center gap-2`}
            >
              <span
                className='inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse'
                title='Session in progress'
              ></span>
              Continue Session
            </button>
          </Link>
        ) : (
          <button
            className={`bg-white text-[#279FD5] font-semibold px-6 py-2 my-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-sans flex items-center gap-2`}
            onClick={() => setIsModalOpen(true)}
          >
            New Patient Practice
          </button>
        )}
      </div>

      {/* Top-right decoration */}
      <div className='absolute top-4 right-4 animate-pulse'>
        <Image src='/moon.svg' alt='moon' width={50} height={50} />
      </div>

      {/* Bottom-right decoration */}
      <div className='absolute bottom-4 right-4 animate-bounce'>
        <Image src='/orange.svg' alt='orange' width={30} height={30} />
      </div>

      <NewPatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CallToAction;
