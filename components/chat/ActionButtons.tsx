import Image from "next/image";
import React from "react";

interface ActionButtonsProps {
  onCustomPatientClick: () => void;
  onNoteTakingClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCustomPatientClick,
  onNoteTakingClick,
}) => {
  return (
    <div className='grid grid-cols-3 gap-3 my-4 mx-2'>
      <button
        onClick={onCustomPatientClick}
        className='bg-[#EC5638] text-white p-3 rounded-xl flex flex-col items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95'
      >
        <Image
          src='/custom-patient.svg'
          alt='Custom Patient'
          width={24}
          height={24}
        />
        <span>Custom Patient</span>
      </button>
      <button
        onClick={onNoteTakingClick}
        className='bg-[#279FD5] text-white p-3 rounded-xl flex flex-col items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95'
      >
        <Image
          src='/note-taking.svg'
          alt='Note Taking'
          width={24}
          height={24}
        />
        <span>Note Taking</span>
      </button>
      <button className='bg-[#b5442b] text-white p-3 rounded-xl flex flex-col items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95'>
        <Image
          src='/submit-diagnosis.svg'
          alt='Submit Diagnosis'
          width={24}
          height={24}
        />
        <span>Submit Diagnosis</span>
      </button>
    </div>
  );
};

export default ActionButtons;
