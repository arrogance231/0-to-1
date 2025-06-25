"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clinicalCases, Case } from "@/constants/cases";
import { useChat } from "@/contexts/ChatContext";
import Loading from "@/components/Loading";

const ALL_SPECIALTIES = [
  "Cardiology",
  "Neurology",
  "Infectious Disease",
  "Gastroenterology",
  "Pulmonology",
  "Endocrinology",
  "Oncology",
  "Pediatrics",
  "Psychiatry",
];

const difficultyColors: Record<string, string> = {
  Beginner: "from-cyan-400 to-blue-400",
  Advanced: "from-orange-400 to-red-400",
  Expert: "from-blue-900 to-blue-400",
};
const badgeColors: Record<string, string> = {
  Beginner: "bg-cyan-500",
  Advanced: "bg-orange-500",
  Expert: "bg-blue-900",
};

const CaseCard = ({ caseData }: { caseData: Case }) => {
  const { selectCase } = useChat();
  const router = useRouter();

  const handleStartCase = () => {
    selectCase(caseData);
    router.push("/chat");
  };

  return (
    <div className='rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col bg-white'>
      {/* Colored header */}
      <div
        className={`h-20 w-full bg-gradient-to-br ${
          difficultyColors[caseData.difficulty]
        } flex items-start justify-between px-4 py-2`}
      >
        <span
          className={`text-xs font-semibold text-white px-2 py-1 rounded-lg mt-2 font-sans ${
            badgeColors[caseData.difficulty]
          }`}
        >
          {caseData.difficulty}
        </span>
        <span className='text-xs text-white font-semibold mt-2 font-sans'>
          {caseData.time}
        </span>
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h3 className='text-lg font-bold text-[#1E4462] mb-1 font-bricolage'>
          {caseData.title}
        </h3>
        <p className='text-sm text-gray-600 mb-4 flex-1 font-sans'>
          {caseData.description}
        </p>
        <button
          onClick={handleStartCase}
          className='bg-[#279FD5] text-white font-semibold w-full py-2 rounded-lg hover:bg-[#1E4462] transition-all duration-200 mt-auto text-base font-sans'
        >
          Start
        </button>
      </div>
    </div>
  );
};

const BrowseCard = ({
  specialties,
  onSelect,
}: {
  specialties: string[];
  onSelect: (specialty: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col bg-white items-center justify-center min-h-[220px] p-4'>
        <button
          className='flex flex-col items-center justify-center w-full h-full py-8 focus:outline-none transition hover:scale-105 active:scale-95'
          onClick={() => setOpen(true)}
        >
          <span className='bg-blue-100 text-blue-600 rounded-full p-3 mb-2 transition-all'>
            <svg width='32' height='32' fill='none' viewBox='0 0 24 24'>
              <path
                d='M12 5v14m7-7H5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span className='text-blue-600 font-semibold text-base font-sans mb-2'>
            Browse
          </span>
        </button>
      </div>
      {open && (
        <>
          <div
            className='fixed inset-0 bg-black/30 z-50 animate-fade-in'
            onClick={() => setOpen(false)}
          />
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs animate-pop-in flex flex-col items-center'>
              <h3 className='text-lg font-bold text-blue-700 mb-4'>
                Browse Other Specialties
              </h3>
              <div className='w-full flex flex-col gap-2 mb-2'>
                {specialties.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => {
                      onSelect(spec);
                      setOpen(false);
                    }}
                    className='w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg py-2 px-2 transition text-sm border border-blue-100'
                  >
                    {spec}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setOpen(false)}
                className='mt-2 text-xs text-gray-500 underline hover:text-blue-700'
              >
                Cancel
              </button>
            </div>
          </div>
          <style jsx global>{`
            .animate-fade-in {
              animation: fadeIn 0.2s;
            }
            .animate-pop-in {
              animation: popIn 0.2s;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes popIn {
              from {
                transform: scale(0.9);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
};

const CasesPage = () => {
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [filteredCases, setFilteredCases] = useState<Case[]>([]);
  const [userSpecialty, setUserSpecialty] = useState<string | null>(null);
  const [tempSpecialty, setTempSpecialty] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onboardingInfo = localStorage.getItem("onboardingInfo");
      if (onboardingInfo) {
        try {
          const parsed = JSON.parse(onboardingInfo);
          setSpecialty(parsed.disease);
          setUserSpecialty(parsed.disease);
        } catch {}
      }
    }
  }, []);

  useEffect(() => {
    const activeSpecialty = tempSpecialty || specialty;
    if (activeSpecialty) {
      setFilteredCases(
        clinicalCases.filter((c) => c.specialty === activeSpecialty)
      );
    }
  }, [specialty, tempSpecialty]);

  const handleResetOnboarding = () => {
    localStorage.removeItem("onboardingInfo");
    localStorage.removeItem("onboardingComplete");
    router.replace("/onboarding");
  };

  const handleBrowseSpecialty = (spec: string) => {
    setTempSpecialty(spec);
  };

  const handleClearBrowse = () => {
    setTempSpecialty(null);
  };

  // Specialties to show in browse (all except user's specialty)
  const browseSpecialties = userSpecialty
    ? ALL_SPECIALTIES.filter((s) => s !== userSpecialty)
    : ALL_SPECIALTIES;

  // Message above mascot icon (footer)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if we should show the onboarding message just once
      const showOnboardingMessage = sessionStorage.getItem(
        "showOnboardingMessage"
      );
      let msg = "";
      if (showOnboardingMessage) {
        msg = userSpecialty
          ? `Recommended cases for your specialty: ${userSpecialty}`
          : "";
        // Remove the flag so it only shows once
        sessionStorage.removeItem("showOnboardingMessage");
      } else {
        msg = tempSpecialty
          ? `Showing cases for ${tempSpecialty}`
          : userSpecialty
          ? ""
          : "";
      }
      // Set a custom attribute on the body for the footer to read
      document.body.setAttribute("data-cases-message", msg);
    }
  }, [userSpecialty, tempSpecialty]);

  return (
    <Suspense fallback={<Loading />}>
      <div className='p-4 space-y-6'>
        <div className='flex justify-end mb-2'>
          <button
            onClick={handleResetOnboarding}
            className='px-4 py-1 rounded-lg bg-red-100 text-red-600 text-xs font-semibold shadow hover:bg-red-200 transition'
          >
            Reset Onboarding
          </button>
        </div>
        <header>
          <h1 className='text-xl font-bold text-gray-800 mb-2 font-bricolage'>
            Clinical Cases
          </h1>
          <p className='text-sm text-gray-500 font-sans'>
            Select a case to begin your diagnosis simulation.
          </p>
        </header>
        {tempSpecialty && (
          <div className='mb-2 flex justify-between items-center'>
            <span className='text-xs text-blue-700 font-semibold'>
              Showing cases for <b>{tempSpecialty}</b>
            </span>
            <button
              onClick={handleClearBrowse}
              className='text-xs text-gray-500 underline hover:text-blue-700'
            >
              Back to recommended
            </button>
          </div>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {filteredCases.length > 0 ? (
            filteredCases.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))
          ) : (
            <div className='col-span-2 text-center text-gray-400 font-sans py-8'>
              No cases available for your selected specialty.
            </div>
          )}
          <BrowseCard
            specialties={browseSpecialties}
            onSelect={handleBrowseSpecialty}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default CasesPage;
