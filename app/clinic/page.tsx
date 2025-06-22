"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ClinicTTSVisualizer from "@/components/chat/ClinicTTSVisualizer";
import ActionButtons from "@/components/chat/ActionButtons";
import Footer from "@/components/Footer";
import { useChat } from "@/contexts/ChatContext";
import ChatNavBar from "@/components/chat/ChatNavBar";
import CustomPatientModal from "@/components/chat/CustomPatientModal";
import NoteTakingModal from "@/components/chat/NoteTakingModal";
import Loading from "@/components/Loading";
import { Case } from "@/constants/cases";

const ClinicPage = () => {
  const router = useRouter();
  const { notes, updateNotes, setCustomPatient, patient, isStateLoaded } =
    useChat();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = React.useState(false);

  // If no patient, redirect to /chat (only after state is loaded)
  React.useEffect(() => {
    if (isStateLoaded && !patient) router.push("/chat");
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

  return (
    <div className='flex flex-col h-screen max-h-screen min-h-0 bg-transparent relative'>
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
      <ChatNavBar />
      {/* Action Buttons at the top */}
      <div className='flex justify-center items-center w-full px-4 z-10 flex-shrink-0 mt-2'>
        <ActionButtons
          onCustomPatientClick={() => setIsModalOpen(true)}
          onNoteTakingClick={() => setIsNoteModalOpen(true)}
        />
      </div>
      {/* ClinicTTSVisualizer centered, squashed */}
      <div className='flex-1 min-h-0 flex flex-col items-center justify-center w-full pb-20'>
        <ClinicTTSVisualizer squashContent={true} />
      </div>
      <Footer isFixed={true} />
    </div>
  );
};

export default ClinicPage;
