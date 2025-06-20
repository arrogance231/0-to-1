"use client";
import React, { useState } from "react";

export interface CustomPatientParams {
  language: string;
  ageGroup: string;
  gender: string;
  mainConcern: string;
  mood: string;
  cooperativeness: string;
  healthLevel: string;
  talkStyle: string;
  support: string;
}

interface CustomPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (params: CustomPatientParams) => void;
}

const CustomPatientModal: React.FC<CustomPatientModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [formData, setFormData] = useState<CustomPatientParams>({
    language: "English",
    ageGroup: "Adult",
    gender: "Female",
    mainConcern: "Physical",
    mood: "Calm",
    cooperativeness: "Cooperative",
    healthLevel: "Generally Healthy",
    talkStyle: "Direct",
    support: "Not Mentioned",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(formData);
    onClose();
  };

  const formFields: {
    name: keyof CustomPatientParams;
    label: string;
    options: string[];
  }[] = [
    {
      name: "language",
      label: "Language",
      options: ["Tagalog", "English", "Taglish", "Other"],
    },
    {
      name: "ageGroup",
      label: "Age Group",
      options: ["Child", "Teen", "Adult", "Elderly"],
    },
    { name: "gender", label: "Gender", options: ["Male", "Female", "Other"] },
    {
      name: "mainConcern",
      label: "Main Concern",
      options: ["Physical", "Mental", "Memory", "Pain", "Unsure"],
    },
    {
      name: "mood",
      label: "Mood",
      options: ["Calm", "Anxious", "Irritated", "Sad", "Confused"],
    },
    {
      name: "cooperativeness",
      label: "Cooperativeness",
      options: ["Cooperative", "Uncertain", "Resistant"],
    },
    {
      name: "healthLevel",
      label: "Health Level",
      options: ["Generally Healthy", "Has Illness", "Not Sure"],
    },
    {
      name: "talkStyle",
      label: "Talk Style",
      options: ["Direct", "Vague", "Talkative", "Quiet"],
    },
    {
      name: "support",
      label: "Support",
      options: ["Has Family", "Alone", "Not Mentioned"],
    },
  ];

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4'>
      <div className='bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md transform transition-all'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>
          Customize Patient
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2'>
            {formFields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  {field.label}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm'
                >
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className='mt-8 flex justify-end gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-[#279FD5] text-white font-semibold rounded-lg hover:bg-[#1E4462] transition-colors shadow-lg'
            >
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomPatientModal;
