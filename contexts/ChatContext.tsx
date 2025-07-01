"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Case } from "@/constants/cases";

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
  notes: string;
  sessionStartTime: number | null;
  evaluations: ("good" | "bad" | "neutral")[];
  selectCase: (caseData: Case) => void;
  addMessage: (message: Message) => void;
  updateStats: (evaluation: "good" | "bad" | "neutral") => void;
  setIsLoading: (isLoading: boolean) => void;
  setCustomPatient: (patient: Case) => void;
  updateNotes: (notes: string) => void;
  clearChat: () => void;
  getSessionTime: () => number; // returns session time in minutes
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
  const [notes, setNotes] = useState("");
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [evaluations, setEvaluations] = useState<
    ("good" | "bad" | "neutral")[]
  >([]);

  useEffect(() => {
    try {
      const savedState = sessionStorage.getItem("chatState");
      if (savedState) {
        const {
          stats,
          messages,
          patient,
          notes,
          sessionStartTime,
          evaluations,
        } = JSON.parse(savedState);
        if (stats) setStats(stats);
        if (messages) setMessages(messages);
        if (patient) setPatient(patient);
        if (notes) setNotes(notes);
        if (sessionStartTime) setSessionStartTime(sessionStartTime);
        if (evaluations) setEvaluations(evaluations);
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
        notes,
        sessionStartTime,
        evaluations,
      };
      sessionStorage.setItem("chatState", JSON.stringify(chatState));
    } catch (error) {
      console.error("Failed to save chat state to sessionStorage:", error);
    }
  }, [stats, messages, patient, notes, sessionStartTime, evaluations]);

  const selectCase = (caseData: Case) => {
    setPatient(caseData);
    setSessionStartTime(Date.now());
    setEvaluations([]);
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
  };

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateStats = (evaluation: "good" | "bad" | "neutral") => {
    setEvaluations((prev) => [...prev, evaluation]);
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

  const setCustomPatient = (patient: Case) => {
    setPatient(patient);
    setSessionStartTime(Date.now());
    setEvaluations([]);
    setMessages([
      {
        sender: "patient",
        text: patient.initialPrompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const updateNotes = (notes: string) => {
    setNotes(notes);
  };

  const getSessionTime = (): number => {
    if (!sessionStartTime) return 0;
    return Math.floor((Date.now() - sessionStartTime) / (1000 * 60)); // Convert to minutes
  };

  const clearChat = () => {
    setMessages([]);
    setPatient(null);
    setNotes("");
    setSessionStartTime(null);
    setEvaluations([]);
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
        notes,
        sessionStartTime,
        evaluations,
        selectCase,
        addMessage,
        updateStats,
        setIsLoading,
        setCustomPatient,
        updateNotes,
        clearChat,
        getSessionTime,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
