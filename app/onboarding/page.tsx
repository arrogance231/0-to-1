"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DISEASES = [
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

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [mascotVisible, setMascotVisible] = useState(false);
  const [stepAnim, setStepAnim] = useState("fade-in");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Prevent flash of main app/footer by checking onboardingComplete
  useEffect(() => {
    if (typeof window !== "undefined") {
      const complete = localStorage.getItem("onboardingComplete");
      if (complete) {
        router.replace("/cases");
      } else {
        setLoading(false);
      }
    }
  }, [router]);

  // Animate mascot entrance
  useEffect(() => {
    setMascotVisible(false);
    const t = setTimeout(() => setMascotVisible(true), 200);
    return () => clearTimeout(t);
  }, [step]);

  // Animate step transitions
  const goToStep = (n: number) => {
    setStepAnim("fade-out");
    setTimeout(() => {
      setStep(n);
      setStepAnim("fade-in");
    }, 200);
  };

  // Save onboarding info to localStorage
  const handleProceed = () => {
    if (step === 1 && name.trim()) {
      goToStep(2);
    } else if (step === 2 && disease) {
      localStorage.setItem("onboardingInfo", JSON.stringify({ name, disease }));
      localStorage.setItem("onboardingComplete", "true");
      goToStep(3);
    }
  };

  useEffect(() => {
    if (step === 3) {
      // Redirect to /cases after onboarding
      setTimeout(() => router.replace("/cases"), 1200);
    }
  }, [step, router]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3fafb] via-[#e0f2fe] to-[#f3fafb]'>
        {" "}
        <span className='text-blue-400 text-lg font-semibold animate-pulse'>
          Loading...
        </span>{" "}
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f3fafb] via-[#e0f2fe] to-[#f3fafb] px-4 relative overflow-hidden'>
      {/* Subtle animated background pattern */}
      <div className='absolute inset-0 pointer-events-none z-0'>
        <svg
          width='100%'
          height='100%'
          className='opacity-10 animate-pulse-slow'
        >
          <circle cx='30%' cy='20%' r='120' fill='#279FD5' />
          <circle cx='80%' cy='80%' r='100' fill='#FACC15' />
        </svg>
      </div>
      <div className='w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center z-10 relative animate-fade-in'>
        {/* Mascot with bounce-in animation */}
        <div
          className={`mb-4 transition-all duration-500 ${
            mascotVisible
              ? "scale-100 opacity-100 animate-bounce-in"
              : "scale-75 opacity-0"
          }`}
        >
          <Image
            src='/icon.svg'
            alt='PockyP Mascot'
            width={100}
            height={100}
            className='drop-shadow-xl'
            priority
          />
        </div>
        {/* Step content with fade/slide animation */}
        <div className={`w-full transition-all duration-300 ${stepAnim}`}>
          {step === 1 && (
            <>
              <h2 className='text-center text-lg font-semibold text-[#279FD5] mb-2 animate-slide-in'>
                Greetings!
              </h2>
              <p className='text-center text-[#279FD5] mb-6 animate-fade-in'>
                My name is <span className='font-bold'>PockyP</span>.<br />
                What is your name?
              </p>
              <input
                type='text'
                className='w-full rounded-lg border border-gray-200 px-3 py-2 mb-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-200 animate-fade-in'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <button
                className='w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg py-2 shadow transition transform hover:scale-105 active:scale-95 animate-pop-in disabled:opacity-50'
                onClick={handleProceed}
                disabled={!name.trim()}
              >
                Proceed
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className='text-center text-lg font-semibold text-[#279FD5] mb-2 animate-slide-in'>
                Hi {name.trim()}!
              </h2>
              <p className='text-center text-[#279FD5] mb-4 animate-fade-in'>
                Which disease or specialty do you want to practice conquering?
              </p>
              <div className='w-full mb-4 animate-fade-in'>
                <select
                  className='w-full rounded-lg border border-gray-200 px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-200 animate-pop-in'
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                >
                  <option value=''>Select a specialty</option>
                  {DISEASES.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className='w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg py-2 shadow transition transform hover:scale-105 active:scale-95 animate-pop-in disabled:opacity-50'
                onClick={handleProceed}
                disabled={!disease}
              >
                Proceed
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className='text-center text-lg font-semibold text-[#279FD5] mb-2 animate-slide-in'>
                Welcome, {name.trim()}!
              </h2>
              <p className='text-center text-[#279FD5] mb-6 animate-fade-in'>
                You're all set to start practicing {disease}!<br />
                You can always change your focus later in settings.
              </p>
              <div className='w-full flex justify-center animate-pop-in'>
                <span className='text-blue-500 font-semibold text-sm bg-blue-50 rounded-full px-4 py-2 shadow'>
                  Redirecting to your recommended cases...
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx global>{`
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        .animate-pop-in {
          animation: popIn 0.3s;
        }
        .animate-slide-in {
          animation: slideIn 0.4s;
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
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
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s infinite alternate;
        }
        @keyframes pulseSlow {
          from {
            opacity: 0.08;
          }
          to {
            opacity: 0.18;
          }
        }
      `}</style>
    </div>
  );
}
