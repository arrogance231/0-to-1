"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { clinicalCases } from "@/constants/cases";

interface NewPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPatientModal: React.FC<NewPatientModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleRandom = () => {
    // Always select Aling Nena de Guzman
    const nenang = clinicalCases.find((c) => c.id === "case-aling-nena");
    if (nenang) {
      sessionStorage.setItem("chatState", JSON.stringify({ patient: nenang }));
    }
    router.push("/chat");
    onClose();
  };

  const handleCaseStudy = () => {
    router.push("/cases");
    onClose();
  };

  const handleCustom = () => {
    router.push("/customize");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4'>
      <div className='bg-white rounded-2xl max-w-sm w-full p-4 sm:p-6 relative'>
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none z-10'
          onClick={onClose}
          aria-label='Close'
        >
          &times;
        </button>
        <div className='text-center mb-6'>
          <h2 className='text-lg font-bold mb-1'>New Patient</h2>
          <p className='text-sm text-gray-600'>
            Choose how you&apos;d like to start your practice session
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <button
            className='w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition'
            onClick={handleRandom}
          >
            Random Patient
          </button>
          <button
            className='w-full py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition'
            onClick={handleCaseStudy}
          >
            Case Study
          </button>
          <button
            className='w-full py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition'
            onClick={handleCustom}
          >
            Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPatientModal;
