export interface Case {
  id: string;
  title: string;
  description: string;
  initialPrompt: string;
  patientInfo: {
    name: string;
    details: string;
    avatarText: string;
  };
  difficulty: "Beginner" | "Advanced" | "Expert";
  time: string;
}

export const clinicalCases: Case[] = [
  {
    id: "case-001",
    title: "Sudden Onset Chest Pain",
    description:
      "A 45-year-old office worker presents with acute, sharp chest pain that began two hours ago.",
    initialPrompt:
      "Hello, Doctor. I've been having this really sharp chest pain for the past 2 hours. It started all of a sudden while I was at my desk. It gets much worse when I try to take a deep breath.",
    patientInfo: {
      name: "John Smith",
      details: "Patient / 45 Years Old / Accountant",
      avatarText: "Patient 45",
    },
    difficulty: "Advanced",
    time: "45 min",
  },
  {
    id: "case-002",
    title: "Persistent Headache",
    description:
      "A 32-year-old graphic designer complains of a persistent, throbbing headache over the last 48 hours.",
    initialPrompt:
      "Hi. I've had this awful, throbbing headache for two days straight, and it's not getting any better. Over-the-counter pain meds aren't helping much.",
    patientInfo: {
      name: "Emily White",
      details: "Patient / 32 Years Old / Designer",
      avatarText: "Patient 32",
    },
    difficulty: "Expert",
    time: "30 min",
  },
  {
    id: "case-003",
    title: "Difficulty Breathing",
    description:
      "A 68-year-old retired teacher is experiencing shortness of breath and a persistent cough.",
    initialPrompt:
      "I can't seem to catch my breath for the last few days, and I have this nagging cough that won't go away. I feel more tired than usual.",
    patientInfo: {
      name: "Sarah Jones",
      details: "Patient / 68 Years Old / Retired",
      avatarText: "Patient 68",
    },
    difficulty: "Beginner",
    time: "25 min",
  },
  {
    id: "case-004",
    title: "Abdominal Pain",
    description:
      "A 19-year-old college student reports severe, localized pain in their lower right abdomen.",
    initialPrompt:
      "Help, my stomach hurts so bad. It's a really sharp pain on my lower right side, and I feel like I might throw up. I also have a bit of a fever.",
    patientInfo: {
      name: "Michael Brown",
      details: "Patient / 19 Years Old / Student",
      avatarText: "Patient 19",
    },
    difficulty: "Beginner",
    time: "20 min",
  },
];
