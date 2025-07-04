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
    // Basic Information
    name: "",
    age: "",
    sex: "Female",
    reasonForInquiring: "",
    chiefComplaint: "",
    historyOfPresentingIllness: "",

    // Patient-Physician Relationship
    patientPhysicianRelationship: "",
    interviewTechniques: "",

    // Medical History
    cardiac: "",
    hypertension: "",
    birthDevelopment: "",
    childhoodIllnesses: "",
    adulthoodIllnesses: "",
    surgeriesInjuriesAccidents: "",
    allergies: "",

    // Current Health Status
    currentHealthStatus: "",
    nutrition: "",
    sleepPattern: "",
    exercise: "",
    smokingAlcohol: "",
    environmentalExposure: "",
    medicationData: "",
    riskFactors: "",
    healthStatusOfRelatives: "",

    // Personal & Social History
    maritalStatus: "",
    lifestyleHomeSituation: "",
    financialSupport: "",
    significantLifeEvents: "",
    waterSource: "",
    verminPests: "",

    // Physical Examination
    generalAppearance: "",
    skinHairNails: "",
    pulmonary: "",
    cardiovascular: "",
    musculoskeletal: "",
    neurological: "",

    // Behavioral & Cultural
    forgetfulness: "",
    healthLiteracy: "",
    languageBarriers: "",
    cultureMindset: "",
    challengingBehavior: "",
    typicalProblemPatientBehaviors: "",
    feelingMistreatedMisunderstood: "",
    stressOfIllnessOrLifeProblems: "",
    culturalDifferences: "",

    // Symptoms
    onset: "",
    fever: "",
    bodyAches: "",
    cough: "",
    nasalSymptoms: "",
    generalSigns: "",

    // Language Fluency
    english: "",
    tagalog: "",
    otherDialect: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        age: "",
        sex: "Female",
        reasonForInquiring: "",
        chiefComplaint: "",
        historyOfPresentingIllness: "",
        patientPhysicianRelationship: "",
        interviewTechniques: "",
        cardiac: "",
        hypertension: "",
        birthDevelopment: "",
        childhoodIllnesses: "",
        adulthoodIllnesses: "",
        surgeriesInjuriesAccidents: "",
        allergies: "",
        currentHealthStatus: "",
        nutrition: "",
        sleepPattern: "",
        exercise: "",
        smokingAlcohol: "",
        environmentalExposure: "",
        medicationData: "",
        riskFactors: "",
        healthStatusOfRelatives: "",
        maritalStatus: "",
        lifestyleHomeSituation: "",
        financialSupport: "",
        significantLifeEvents: "",
        waterSource: "",
        verminPests: "",
        generalAppearance: "",
        skinHairNails: "",
        pulmonary: "",
        cardiovascular: "",
        musculoskeletal: "",
        neurological: "",
        forgetfulness: "",
        healthLiteracy: "",
        languageBarriers: "",
        cultureMindset: "",
        challengingBehavior: "",
        typicalProblemPatientBehaviors: "",
        feelingMistreatedMisunderstood: "",
        stressOfIllnessOrLifeProblems: "",
        culturalDifferences: "",
        onset: "",
        fever: "",
        bodyAches: "",
        cough: "",
        nasalSymptoms: "",
        generalSigns: "",
        english: "",
        tagalog: "",
        otherDialect: "",
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
      initialPrompt:
        formData.reasonForInquiring ||
        `Hello, Doctor. ${
          formData.chiefComplaint || "I need medical attention."
        }`,
      difficulty: "Advanced",
      time: "30-45 min",
      patientInfo: {
        name: formData.name || "Custom Patient",
        avatarText: formData.name.charAt(0).toUpperCase() || "C",
        details: `${
          formData.age || "Unknown"
        } year old ${formData.sex.toLowerCase()}`,
      },
      specialty: "Custom",
      customData: {
        Name: formData.name,
        Age: parseInt(formData.age) || 0,
        Sex: formData.sex,
        ReasonForInquiring: formData.reasonForInquiring,
        ChiefComplaint: formData.chiefComplaint,
        HistoryOfPresentingIllness: formData.historyOfPresentingIllness,
        PatientPhysicianRelationship: formData.patientPhysicianRelationship,
        InterviewTechniques: formData.interviewTechniques,
        MedicalHistorySubjectiveData: {
          Cardiac: formData.cardiac,
          Hypertension: formData.hypertension,
        },
        PastHistory: {
          BirthDevelopment: formData.birthDevelopment,
          ChildhoodIllnesses: formData.childhoodIllnesses,
          AdulthoodIllnesses: formData.adulthoodIllnesses,
          SurgeriesInjuriesAccidents: formData.surgeriesInjuriesAccidents,
          Allergies: formData.allergies,
        },
        CurrentHealthStatus: formData.currentHealthStatus,
        Nutrition: formData.nutrition,
        SleepPattern: formData.sleepPattern,
        Exercise: formData.exercise,
        SmokingAlcohol: formData.smokingAlcohol,
        EnvironmentalExposure: formData.environmentalExposure,
        MedicationData: formData.medicationData,
        RiskFactors: formData.riskFactors,
        HealthStatusOfRelatives: formData.healthStatusOfRelatives,
        PersonalAndSocialHistory: {
          MaritalStatus: formData.maritalStatus,
          LifestyleHomeSituation: formData.lifestyleHomeSituation,
          FinancialSupport: formData.financialSupport,
        },
        SignificantLifeEvents: formData.significantLifeEvents,
        WaterSource: formData.waterSource,
        VerminPests: formData.verminPests,
        PhysicalExaminationObjectiveData: {
          GeneralAppearance: formData.generalAppearance,
          SkinHairNails: formData.skinHairNails,
          Pulmonary: formData.pulmonary,
          Cardiovascular: formData.cardiovascular,
          Musculoskeletal: formData.musculoskeletal,
          Neurological: formData.neurological,
        },
        Forgetfulness: formData.forgetfulness,
        HealthLiteracy: formData.healthLiteracy,
        LanguageBarriers: formData.languageBarriers,
        CultureMindset: formData.cultureMindset,
        ChallengingBehavior: formData.challengingBehavior,
        TypicalProblemPatientBehaviors: formData.typicalProblemPatientBehaviors
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s),
        FeelingMistreatedMisunderstood: formData.feelingMistreatedMisunderstood,
        StressOfIllnessOrLifeProblems: formData.stressOfIllnessOrLifeProblems,
        CulturalDifferences: formData.culturalDifferences,
        Symptoms: {
          Onset: formData.onset,
          Fever: formData.fever,
          BodyAches: formData.bodyAches,
          Cough: formData.cough,
          NasalSymptoms: formData.nasalSymptoms,
          GeneralSigns: formData.generalSigns,
        },
        LanguageFluency: {
          English: formData.english,
          Tagalog: formData.tagalog,
          OtherDialect: formData.otherDialect,
        },
      },
    };
    onApply(customPatient);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
      <div className='bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
        <h2 className='text-2xl font-bold text-gray-700 mb-4 font-bricolage'>
          Create Custom Patient Persona
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Basic Information */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Basic Information
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Patient name'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Age
                </label>
                <input
                  type='number'
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Age'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Sex
                </label>
                <select
                  value={formData.sex}
                  onChange={(e) =>
                    setFormData({ ...formData, sex: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value='Female'>Female</option>
                  <option value='Male'>Male</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Chief Complaint & History */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Chief Complaint & History
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Reason for Inquiring
                </label>
                <textarea
                  value={formData.reasonForInquiring}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reasonForInquiring: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Why are they seeking medical attention?'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Chief Complaint
                </label>
                <textarea
                  value={formData.chiefComplaint}
                  onChange={(e) =>
                    setFormData({ ...formData, chiefComplaint: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Main complaint or symptoms'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  History of Presenting Illness
                </label>
                <textarea
                  value={formData.historyOfPresentingIllness}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      historyOfPresentingIllness: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Detailed history of current symptoms'
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Patient-Physician Relationship */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Patient-Physician Relationship
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Patient-Physician Relationship
                </label>
                <textarea
                  value={formData.patientPhysicianRelationship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      patientPhysicianRelationship: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='How do they typically interact with doctors?'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Interview Techniques
                </label>
                <textarea
                  value={formData.interviewTechniques}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      interviewTechniques: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='What interview techniques work best?'
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Medical History
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Cardiac History
                </label>
                <textarea
                  value={formData.cardiac}
                  onChange={(e) =>
                    setFormData({ ...formData, cardiac: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Heart-related conditions'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Hypertension
                </label>
                <textarea
                  value={formData.hypertension}
                  onChange={(e) =>
                    setFormData({ ...formData, hypertension: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Blood pressure history'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Childhood Illnesses
                </label>
                <textarea
                  value={formData.childhoodIllnesses}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      childhoodIllnesses: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Illnesses during childhood'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Adulthood Illnesses
                </label>
                <textarea
                  value={formData.adulthoodIllnesses}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      adulthoodIllnesses: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Illnesses during adulthood'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Surgeries/Injuries/Accidents
                </label>
                <textarea
                  value={formData.surgeriesInjuriesAccidents}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      surgeriesInjuriesAccidents: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Past surgeries, injuries, accidents'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Allergies
                </label>
                <textarea
                  value={formData.allergies}
                  onChange={(e) =>
                    setFormData({ ...formData, allergies: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Known allergies and reactions'
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Current Health Status */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Current Health Status
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Current Health Status
                </label>
                <textarea
                  value={formData.currentHealthStatus}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentHealthStatus: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Overall current health'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Nutrition
                </label>
                <textarea
                  value={formData.nutrition}
                  onChange={(e) =>
                    setFormData({ ...formData, nutrition: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Dietary habits and preferences'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Sleep Pattern
                </label>
                <textarea
                  value={formData.sleepPattern}
                  onChange={(e) =>
                    setFormData({ ...formData, sleepPattern: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Sleep habits and quality'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Exercise
                </label>
                <textarea
                  value={formData.exercise}
                  onChange={(e) =>
                    setFormData({ ...formData, exercise: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Physical activity level'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Smoking/Alcohol
                </label>
                <textarea
                  value={formData.smokingAlcohol}
                  onChange={(e) =>
                    setFormData({ ...formData, smokingAlcohol: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Tobacco and alcohol use'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Environmental Exposure
                </label>
                <textarea
                  value={formData.environmentalExposure}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      environmentalExposure: e.target.value,
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Environmental factors affecting health'
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Language & Cultural */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Language & Cultural Background
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  English Fluency
                </label>
                <textarea
                  value={formData.english}
                  onChange={(e) =>
                    setFormData({ ...formData, english: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='English language ability'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Tagalog Fluency
                </label>
                <textarea
                  value={formData.tagalog}
                  onChange={(e) =>
                    setFormData({ ...formData, tagalog: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Tagalog language ability'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Other Dialects
                </label>
                <textarea
                  value={formData.otherDialect}
                  onChange={(e) =>
                    setFormData({ ...formData, otherDialect: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Other languages or dialects'
                  rows={2}
                />
              </div>
            </div>
            <div className='mt-4'>
              <label className='block text-sm font-semibold text-gray-700 mb-1'>
                Cultural Mindset
              </label>
              <textarea
                value={formData.cultureMindset}
                onChange={(e) =>
                  setFormData({ ...formData, cultureMindset: e.target.value })
                }
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Cultural beliefs about health and medicine'
                rows={2}
              />
            </div>
          </div>

          {/* Symptoms */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>
              Current Symptoms
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Onset
                </label>
                <textarea
                  value={formData.onset}
                  onChange={(e) =>
                    setFormData({ ...formData, onset: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='When did symptoms start?'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Fever
                </label>
                <textarea
                  value={formData.fever}
                  onChange={(e) =>
                    setFormData({ ...formData, fever: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Fever symptoms'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Body Aches
                </label>
                <textarea
                  value={formData.bodyAches}
                  onChange={(e) =>
                    setFormData({ ...formData, bodyAches: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Body pain and aches'
                  rows={2}
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>
                  Cough
                </label>
                <textarea
                  value={formData.cough}
                  onChange={(e) =>
                    setFormData({ ...formData, cough: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Cough symptoms'
                  rows={2}
                />
              </div>
            </div>
          </div>

          <div className='mt-8 flex justify-end gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-6 py-2 bg-[#279FD5] text-white font-semibold rounded-lg hover:bg-[#1E4462] transition-colors shadow-lg'
            >
              Create Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomPatientModal;
