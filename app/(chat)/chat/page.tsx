"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ActionButtons from "@/components/chat/ActionButtons";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import Footer from "@/components/Footer";
import { getOpenAIResponse } from "@/lib/openai";
import { useChat } from "@/contexts/ChatContext";
import CustomPatientModal, {
  CustomPatientParams,
} from "@/components/chat/CustomPatientModal";
import NoteTakingModal from "@/components/chat/NoteTakingModal";
import Loading from "@/components/Loading";

interface Message {
  sender: "patient" | "user";
  text: string;
  time: string;
}

const getSystemPrompt = (
  history: string,
  customParams: CustomPatientParams | null
) => {
  let customPromptPart = "";
  if (customParams) {
    customPromptPart = `
The user has customized the patient with the following characteristics. You MUST adhere to them in your responses:
- Language: ${customParams.language}
- Age Group: ${customParams.ageGroup}
- Gender: ${customParams.gender}
- Main Concern: ${customParams.mainConcern}
- Mood: ${customParams.mood}
- Cooperativeness: ${customParams.cooperativeness}
- Health Level: ${customParams.healthLevel}
- Talk Style: ${customParams.talkStyle}
- Support: ${customParams.support}
`;
  }

  return `
You are a virtual patient simulator for a medical diagnosis training application. The user is a medical student.
Your primary role is to respond as the patient based on the user's questions.
Your secondary role is to evaluate the user's question for its clinical relevance and helpfulness.
${customPromptPart}
Based on the user's last question, you MUST return a JSON object with two keys: "answer" and "evaluation".
1.  "answer": (string) Your response from the patient's perspective. Be realistic.
2.  "evaluation": (string) Your clinical evaluation of the question. Must be one of three values:
    - "good": The question is relevant, helpful, and moves the diagnosis forward.
    - "neutral": The question is acceptable but not critical.
    - "bad": The question is irrelevant, unprofessional, harmful, or clinically incorrect. This will cause the user to lose a life.

Here is the conversation history:
${history}

Now, evaluate the user's latest question and provide the JSON response.
`;
};

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const {
    messages,
    addMessage,
    patient,
    updateStats,
    isLoading,
    setIsLoading,
    isStateLoaded,
    customPatientParams,
    setCustomPatient,
    notes,
    updateNotes,
  } = useChat();
  const router = useRouter();

  useEffect(() => {
    if (isStateLoaded && !patient) {
      router.push("/cases");
    }
  }, [patient, router, isStateLoaded]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    addMessage(userMessage);
    setIsLoading(true);

    try {
      const history = [...messages, userMessage]
        .map((m) => `${m.sender}: ${m.text}`)
        .join("\n");
      const systemPrompt = getSystemPrompt(history, customPatientParams);
      const rawResponse = await getOpenAIResponse(text, systemPrompt);

      let answer = "I'm not sure how to respond to that.";
      let evaluation: "good" | "bad" | "neutral" = "neutral";
      try {
        let jsonStr = rawResponse.trim();
        if (jsonStr.startsWith("```json")) {
          jsonStr = jsonStr
            .replace(/^```json/, "")
            .replace(/```$/, "")
            .trim();
        }
        const parsed = JSON.parse(jsonStr);
        answer = parsed.answer || answer;
        evaluation = parsed.evaluation || evaluation;
      } catch {
        console.warn("Failed to parse JSON from OpenAI, using raw response.");
        answer = rawResponse;
      }

      updateStats(evaluation);

      const patientMessage: Message = {
        sender: "patient",
        text: answer,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      addMessage(patientMessage);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorMessage: Message = {
        sender: "patient",
        text: "Sorry, I'm having trouble connecting right now.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      addMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isStateLoaded || !patient) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <CustomPatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={setCustomPatient}
      />
      <NoteTakingModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        onSave={updateNotes}
        initialNotes={notes}
      />
      <div className='flex flex-col h-screen max-h-screen min-h-0 bg-transparent relative pt-16 pb-20 overflow-hidden'>
        <div className='flex-1 min-h-0 flex flex-col items-center justify-center w-full'>
          {/* Profile bar and action buttons */}
          <div className='flex flex-col items-center w-full px-4 flex-shrink-0'>
            <div className='flex items-center w-full bg-[#1E4462] rounded-xl shadow-md px-4 py-3 gap-4'>
              <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-[#27A8E0]'>
                <span className='text-[#27A8E0] font-bold'>
                  {patient?.patientInfo.avatarText}
                </span>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='text-white font-bold text-lg leading-tight'>
                  {patient?.patientInfo.name}
                </div>
                <div className='text-white text-xs opacity-80'>
                  {patient?.patientInfo.details}
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-full z-10 flex-shrink-0'>
            <div className='flex gap-4'>
              <ActionButtons
                onCustomPatientClick={() => setIsModalOpen(true)}
                onNoteTakingClick={() => setIsNoteModalOpen(true)}
              />
            </div>
          </div>
          <ChatMessages messages={messages} isLoading={isLoading} />
          <div
            className='w-full flex justify-center items-center flex-shrink-0'
            style={{ position: "relative", bottom: 0, zIndex: 20 }}
          >
            <div className='w-full max-w-md'>
              <ChatInput
                onSendMessage={handleSendMessage}
                disabled={isLoading}
                onEnterClinicMode={() => router.push("/clinic")}
              />
            </div>
          </div>
        </div>
        <Footer isFixed={true} />
      </div>
    </>
  );
};

export default ChatPage;
