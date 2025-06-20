"use client";
import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { clinicalCases, Case } from "@/constants/cases";
import { useChat } from "@/contexts/ChatContext";
import Loading from "@/components/Loading";

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
          className={`text-xs font-semibold text-white px-2 py-1 rounded-lg mt-2 ${
            badgeColors[caseData.difficulty]
          }`}
        >
          {caseData.difficulty}
        </span>
        <span className='text-xs text-white font-semibold mt-2'>
          {caseData.time}
        </span>
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h3 className='text-lg font-bold text-[#1E4462] mb-1'>
          {caseData.title}
        </h3>
        <p className='text-sm text-gray-600 mb-4 flex-1'>
          {caseData.description}
        </p>
        <button
          onClick={handleStartCase}
          className='bg-[#279FD5] text-white font-semibold w-full py-2 rounded-lg hover:bg-[#1E4462] transition-all duration-200 mt-auto text-base'
        >
          Start
        </button>
      </div>
    </div>
  );
};

const BrowseCard = () => (
  <div className='rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col bg-white items-center justify-center min-h-[220px]'>
    <button className='flex flex-col items-center justify-center w-full h-full py-8'>
      <span className='bg-blue-100 text-blue-600 rounded-full p-3 mb-2'>
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
      <span className='text-blue-600 font-semibold text-base'>Browse</span>
    </button>
  </div>
);

const CasesPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='p-4 space-y-6'>
        <header>
          <h1 className='text-xl font-bold text-gray-800 mb-2'>
            Clinical Cases
          </h1>
          <p className='text-sm text-gray-500'>
            Select a case to begin your diagnosis simulation.
          </p>
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {clinicalCases.map((caseData) => (
            <CaseCard key={caseData.id} caseData={caseData} />
          ))}
          <BrowseCard />
        </div>
      </div>
    </Suspense>
  );
};

export default CasesPage;
