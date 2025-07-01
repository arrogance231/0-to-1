"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
    // Hardcoded redirect to chat
    router.push("/chat");
    onClose();
  };

  const handleCaseStudy = () => {
    // Do nothing for now
    onClose();
  };

  const handleCustom = () => {
    router.push("/customize");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl max-w-sm w-full p-6'>
        <div className='text-center mb-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-2'>New Patient</h2>
          <p className='text-sm text-gray-600'>
            Choose how you&apos;d like to start your practice session
          </p>
        </div>

        <div className='space-y-3'>
          <button
            onClick={handleRandom}
            className='w-full p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors flex items-center gap-3'
          >
            <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>🎲</span>
            </div>
            <div className='text-left'>
              <div className='font-semibold text-blue-900'>Random Patient</div>
              <div className='text-xs text-blue-700'>
                Practice with a random case
              </div>
            </div>
          </button>

          <button
            onClick={handleCaseStudy}
            className='w-full p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors flex items-center gap-3'
          >
            <div className='w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>📋</span>
            </div>
            <div className='text-left'>
              <div className='font-semibold text-gray-900'>Case Study</div>
              <div className='text-xs text-gray-700'>Coming soon</div>
            </div>
          </button>

          <button
            onClick={handleCustom}
            className='w-full p-4 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition-colors flex items-center gap-3'
          >
            <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>⚙️</span>
            </div>
            <div className='text-left'>
              <div className='font-semibold text-orange-900'>
                Custom Patient
              </div>
              <div className='text-xs text-orange-700'>
                Create your own patient
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className='w-full mt-6 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewPatientModal;
