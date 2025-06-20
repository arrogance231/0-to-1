"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Case } from "@/constants/cases";

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

interface Message {
  sender: "patient" | "user";
  text: string;
  time: string;
}

interface Stats {
  points: number;
  cases: number;
  lives: number;
}

interface ChatContextType {
  stats: Stats;
  messages: Message[];
  patient: Case | null;
  isLoading: boolean;
  isStateLoaded: boolean;
  customPatientParams: CustomPatientParams | null;
  notes: string;
  selectCase: (caseData: Case) => void;
  addMessage: (message: Message) => void;
  updateStats: (evaluation: "good" | "bad" | "neutral") => void;
  setIsLoading: (isLoading: boolean) => void;
  setCustomPatient: (params: CustomPatientParams | null) => void;
  updateNotes: (notes: string) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<Stats>({
    points: 1372,
    cases: 12,
    lives: 5,
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [patient, setPatient] = useState<Case | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStateLoaded, setIsStateLoaded] = useState(false);
  const [customPatientParams, setCustomPatientParams] =
    useState<CustomPatientParams | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      const savedState = sessionStorage.getItem("chatState");
      if (savedState) {
        const { stats, messages, patient, customPatientParams, notes } =
          JSON.parse(savedState);
        if (stats) setStats(stats);
        if (messages) setMessages(messages);
        if (patient) setPatient(patient);
        if (customPatientParams) setCustomPatientParams(customPatientParams);
        if (notes) setNotes(notes);
      }
    } catch (error) {
      console.error("Failed to load chat state from sessionStorage:", error);
    } finally {
      setIsStateLoaded(true);
    }
  }, []);

  useEffect(() => {
    try {
      const chatState = {
        stats,
        messages,
        patient,
        customPatientParams,
        notes,
      };
      sessionStorage.setItem("chatState", JSON.stringify(chatState));
    } catch (error) {
      console.error("Failed to save chat state to sessionStorage:", error);
    }
  }, [stats, messages, patient, customPatientParams, notes]);

  const selectCase = (caseData: Case) => {
    setPatient(caseData);
    setMessages([
      {
        sender: "patient",
        text: caseData.initialPrompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setCustomPatientParams(null);
  };

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateStats = (evaluation: "good" | "bad" | "neutral") => {
    if (evaluation === "bad") {
      setStats((prev) => ({
        ...prev,
        lives: prev.lives - 1,
        points: prev.points - 10,
      }));
    } else if (evaluation === "good") {
      setStats((prev) => ({ ...prev, points: prev.points + 20 }));
    }
  };

  const setCustomPatient = (params: CustomPatientParams | null) => {
    setCustomPatientParams(params);
  };

  const updateNotes = (notes: string) => {
    setNotes(notes);
  };

  const clearChat = () => {
    setMessages([]);
    setPatient(null);
    setCustomPatientParams(null);
    setNotes("");
    sessionStorage.removeItem("chatState");
  };

  return (
    <ChatContext.Provider
      value={{
        stats,
        messages,
        patient,
        isLoading,
        isStateLoaded,
        customPatientParams,
        notes,
        selectCase,
        addMessage,
        updateStats,
        setIsLoading,
        setCustomPatient,
        updateNotes,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
 