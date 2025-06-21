"use client";
import React, { useState, useEffect } from "react";

interface NoteTakingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (notes: string) => void;
  initialNotes: string;
}

const NoteTakingModal: React.FC<NoteTakingModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialNotes,
}) => {
  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    setNotes(initialNotes);
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(notes);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
      <div
        className='bg-yellow-50 p-6 rounded-lg shadow-xl w-full max-w-lg h-[80vh] flex flex-col'
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        }}
      >
        <h2 className='text-2xl font-bold text-gray-700 mb-4 border-b-2 border-red-300 pb-2 font-bricolage'>
          My Notes
        </h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className='flex-1 w-full bg-transparent text-gray-800 text-base resize-none focus:outline-none p-2'
          placeholder='Jot down your observations...'
          style={{ lineHeight: "1.75", fontFamily: "'Kalam', cursive" }}
        />
        <div className='mt-4 flex justify-end gap-4'>
          <button
            type='button'
            onClick={onClose}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-sans'
          >
            Close
          </button>
          <button
            type='button'
            onClick={handleSave}
            className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors shadow-md font-sans'
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteTakingModal;
