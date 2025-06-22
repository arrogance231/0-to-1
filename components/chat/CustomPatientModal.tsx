"use client";
import React, { useState, useEffect } from "react";
import { Case as Patient } from "@/constants/cases";

interface CustomPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (patient: Patient) => void;
}

const CustomPatientModal: React.FC<CustomPatientModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    chiefComplaint: "",
    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    vitalSigns: {
      bloodPressure: "",
      heartRate: "",
      temperature: "",
      respiratoryRate: "",
      oxygenSaturation: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        age: "",
        gender: "Male",
        chiefComplaint: "",
        medicalHistory: "",
        currentMedications: "",
        allergies: "",
        vitalSigns: {
          bloodPressure: "",
          heartRate: "",
          temperature: "",
          respiratoryRate: "",
          oxygenSaturation: "",
        },
      });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customPatient: Patient = {
      id: "custom",
      title: formData.chiefComplaint || "Custom Patient",
      description: `Custom patient case: ${formData.name || "Unknown"} - ${
        formData.chiefComplaint || "No chief complaint"
      }`,
      initialPrompt: `Hello, Doctor. ${
        formData.chiefComplaint || "I need medical attention."
      }`,
      difficulty: "Advanced",
      time: "15-20 min",
      patientInfo: {
        name: formData.name || "Custom Patient",
        avatarText: formData.name.charAt(0).toUpperCase() || "C",
        details: `${
          formData.age || "Unknown"
        } year old ${formData.gender.toLowerCase()}`,
      },
    };
    onApply(customPatient);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
      <div className='bg-white p-6 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto'>
        <h2 className='text-2xl font-bold text-gray-700 mb-4 font-bricolage'>
          Custom Patient
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Basic Information */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                Name
              </label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                placeholder='Patient name'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                Age
              </label>
              <input
                type='number'
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                placeholder='Age'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
              Gender
            </label>
            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
              Chief Complaint
            </label>
            <textarea
              value={formData.chiefComplaint}
              onChange={(e) =>
                setFormData({ ...formData, chiefComplaint: e.target.value })
              }
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
              placeholder='Main complaint or reason for visit'
              rows={2}
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
              Medical History
            </label>
            <textarea
              value={formData.medicalHistory}
              onChange={(e) =>
                setFormData({ ...formData, medicalHistory: e.target.value })
              }
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
              placeholder='Past medical conditions, surgeries, etc.'
              rows={2}
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
              Current Medications
            </label>
            <textarea
              value={formData.currentMedications}
              onChange={(e) =>
                setFormData({ ...formData, currentMedications: e.target.value })
              }
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
              placeholder='Current medications and dosages'
              rows={2}
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
              Allergies
            </label>
            <textarea
              value={formData.allergies}
              onChange={(e) =>
                setFormData({ ...formData, allergies: e.target.value })
              }
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
              placeholder='Known allergies and reactions'
              rows={2}
            />
          </div>

          {/* Vital Signs */}
          <div>
            <h3 className='text-lg font-semibold text-gray-700 mb-2 font-bricolage'>
              Vital Signs
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                  Blood Pressure
                </label>
                <input
                  type='text'
                  value={formData.vitalSigns.bloodPressure}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vitalSigns: {
                        ...formData.vitalSigns,
                        bloodPressure: e.target.value,
                      },
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                  placeholder='e.g., 120/80'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                  Heart Rate
                </label>
                <input
                  type='text'
                  value={formData.vitalSigns.heartRate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vitalSigns: {
                        ...formData.vitalSigns,
                        heartRate: e.target.value,
                      },
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                  placeholder='bpm'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                  Temperature
                </label>
                <input
                  type='text'
                  value={formData.vitalSigns.temperature}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vitalSigns: {
                        ...formData.vitalSigns,
                        temperature: e.target.value,
                      },
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                  placeholder='°F'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1 font-sans'>
                  Respiratory Rate
                </label>
                <input
                  type='text'
                  value={formData.vitalSigns.respiratoryRate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vitalSigns: {
                        ...formData.vitalSigns,
                        respiratoryRate: e.target.value,
                      },
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans'
                  placeholder='breaths/min'
                />
              </div>
            </div>
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
