"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

const CustomizePage = () => {
  const router = useRouter();
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    chiefComplaint: "",
    medicalHistory: "",
    symptoms: "",
    vitalSigns: "",
    physicalExam: "",
    labResults: "",
    imaging: "",
    medications: "",
    allergies: "",
    socialHistory: "",
    familyHistory: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setPatientData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Here you would typically save the custom patient data
    // For now, just redirect to chat with the custom data
    router.push("/chat");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 py-4'>
          <div className='flex items-center gap-3'>
            <button
              onClick={handleBack}
              className='p-2 hover:bg-gray-100 rounded-lg transition'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <h1 className='text-xl font-bold text-gray-900'>
              Custom Patient Creator
            </h1>
          </div>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6'>
        <div className='bg-white rounded-xl shadow-sm border p-3 sm:p-6 mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Patient Information
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Name
              </label>
              <input
                type='text'
                value={patientData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Patient name'
              />
            </div>

            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Age
              </label>
              <input
                type='number'
                value={patientData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Age'
              />
            </div>

            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Gender
              </label>
              <select
                value={patientData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value=''>Select gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Chief Complaint
            </label>
            <textarea
              value={patientData.chiefComplaint}
              onChange={(e) =>
                handleInputChange("chiefComplaint", e.target.value)
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={3}
              placeholder='Primary reason for visit'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Symptoms
            </label>
            <textarea
              value={patientData.symptoms}
              onChange={(e) => handleInputChange("symptoms", e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={3}
              placeholder='Describe symptoms in detail'
            />
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border p-6 mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Medical History
          </h2>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Past Medical History
            </label>
            <textarea
              value={patientData.medicalHistory}
              onChange={(e) =>
                handleInputChange("medicalHistory", e.target.value)
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={3}
              placeholder='Previous medical conditions, surgeries, etc.'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Medications
            </label>
            <textarea
              value={patientData.medications}
              onChange={(e) => handleInputChange("medications", e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={2}
              placeholder='Current medications'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Allergies
            </label>
            <textarea
              value={patientData.allergies}
              onChange={(e) => handleInputChange("allergies", e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={2}
              placeholder='Known allergies'
            />
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border p-6 mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Clinical Data
          </h2>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Vital Signs
            </label>
            <textarea
              value={patientData.vitalSigns}
              onChange={(e) => handleInputChange("vitalSigns", e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={2}
              placeholder='BP, HR, RR, Temp, O2 Sat'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Physical Examination
            </label>
            <textarea
              value={patientData.physicalExam}
              onChange={(e) =>
                handleInputChange("physicalExam", e.target.value)
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={3}
              placeholder='Physical examination findings'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Lab Results
              </label>
              <textarea
                value={patientData.labResults}
                onChange={(e) =>
                  handleInputChange("labResults", e.target.value)
                }
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                rows={3}
                placeholder='Laboratory findings'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Imaging
              </label>
              <textarea
                value={patientData.imaging}
                onChange={(e) => handleInputChange("imaging", e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                rows={3}
                placeholder='X-ray, CT, MRI findings'
              />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border p-6 mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Additional History
          </h2>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Social History
            </label>
            <textarea
              value={patientData.socialHistory}
              onChange={(e) =>
                handleInputChange("socialHistory", e.target.value)
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={2}
              placeholder='Smoking, alcohol, occupation, etc.'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Family History
            </label>
            <textarea
              value={patientData.familyHistory}
              onChange={(e) =>
                handleInputChange("familyHistory", e.target.value)
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows={2}
              placeholder='Relevant family medical history'
            />
          </div>
        </div>

        <div className='flex gap-4'>
          <button
            onClick={handleBack}
            className='flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
          >
            Create Patient & Start Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;
