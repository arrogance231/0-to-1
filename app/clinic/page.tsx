"use client";
export const dynamic = "force-dynamic";
import React from "react";
import { useRouter } from "next/navigation";
import ClinicTTSVisualizer from "@/components/chat/ClinicTTSVisualizer";
import ActionButtons from "@/components/chat/ActionButtons";
import Footer from "@/components/Footer";
import { useChat } from "@/contexts/ChatContext";
import ChatNavBar from "@/components/chat/ChatNavBar";
import CustomPatientModal from "@/components/chat/CustomPatientModal";
import NoteTakingModal from "@/components/chat/NoteTakingModal";
import SubmitDiagnosisModal from "@/components/chat/SubmitDiagnosisModal";
import Loading from "@/components/Loading";
import { Case } from "@/constants/cases";

const ClinicPage = () => {
  const router = useRouter();
  const {
    notes,
    updateNotes,
    setCustomPatient,
    patient,
    isStateLoaded,
    evaluations,
    getSessionTime,
    messages,
  } = useChat();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = React.useState(false);
  const [isSubmitDiagnosisModalOpen, setIsSubmitDiagnosisModalOpen] =
    React.useState(false);

  // If no patient, redirect to /chat (only after state is loaded)
  React.useEffect(() => {
    if (isStateLoaded && !patient) {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("routeChangeStart"));
      }
      router.push("/chat");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("routeChangeComplete"));
      }
    }
  }, [isStateLoaded, patient, router]);

  if (!isStateLoaded || !patient) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }

  const handleApplyCustomPatient = (patient: Case) => {
    setCustomPatient(patient);
    setIsModalOpen(false);
  };

  const handleSubmitDiagnosis = () => {
    setIsSubmitDiagnosisModalOpen(true);
  };

  return (
    <div className='flex flex-col h-screen max-h-screen min-h-0 bg-transparent relative pt-16 pb-36 overflow-hidden'>
      <ChatNavBar />
      <div className='flex-1 min-h-0 flex flex-col items-center justify-center w-full'>
        <ClinicTTSVisualizer squashContent={true} />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200'>
          <ActionButtons
            onCustomPatientClick={() => setIsModalOpen(true)}
            onNoteTakingClick={() => setIsNoteModalOpen(true)}
            onSubmitDiagnosisClick={handleSubmitDiagnosis}
          />
        </div>
      </div>
      <Footer />

      {/* Modals */}
      <CustomPatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={handleApplyCustomPatient}
      />
      <NoteTakingModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        onSave={updateNotes}
        initialNotes={notes}
      />
      <SubmitDiagnosisModal
        isOpen={isSubmitDiagnosisModalOpen}
        onClose={() => setIsSubmitDiagnosisModalOpen(false)}
        patientName={patient?.patientInfo.name || ""}
        sessionTime={getSessionTime()}
        evaluations={evaluations}
        conversationHistory={messages
          .map((m) => `${m.sender}: ${m.text}`)
          .join("\n")}
      />
    </div>
  );
};

export default ClinicPage;
