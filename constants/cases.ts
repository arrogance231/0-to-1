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
  specialty: string;
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
    specialty: "Cardiology",
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
    specialty: "Neurology",
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
    specialty: "Pulmonology",
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
    specialty: "Gastroenterology",
  },
  {
    id: "cardio-001",
    title: "Chest Pain on Exertion",
    description:
      "A 54-year-old man experiences chest pain while climbing stairs.",
    initialPrompt:
      "Doctor, I get a tight pain in my chest whenever I walk up stairs. It goes away when I rest.",
    patientInfo: {
      name: "Paul Adams",
      details: "54M, Salesman",
      avatarText: "Patient 54",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Cardiology",
  },
  {
    id: "cardio-002",
    title: "Palpitations and Dizziness",
    description:
      "A 28-year-old woman reports a racing heart and feeling faint.",
    initialPrompt: "My heart sometimes races and I feel like I might pass out.",
    patientInfo: {
      name: "Lisa Green",
      details: "28F, Teacher",
      avatarText: "Patient 28",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Cardiology",
  },
  {
    id: "cardio-003",
    title: "Shortness of Breath at Night",
    description: "A 70-year-old man wakes up breathless at night.",
    initialPrompt:
      "I wake up at night gasping for air. I have to sit up to breathe.",
    patientInfo: {
      name: "George Lee",
      details: "70M, Retired",
      avatarText: "Patient 70",
    },
    difficulty: "Advanced",
    time: "30 min",
    specialty: "Cardiology",
  },
  {
    id: "cardio-004",
    title: "Leg Swelling and Fatigue",
    description: "A 62-year-old woman has swollen legs and feels tired.",
    initialPrompt:
      "My legs are swollen and I get tired easily, even after little activity.",
    patientInfo: {
      name: "Mary Brown",
      details: "62F, Librarian",
      avatarText: "Patient 62",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Cardiology",
  },
  {
    id: "cardio-005",
    title: "Sudden Severe Chest Pain",
    description:
      "A 48-year-old man presents with sudden, severe chest pain radiating to his left arm.",
    initialPrompt:
      "I suddenly got this crushing pain in my chest and it goes down my left arm.",
    patientInfo: {
      name: "John Smith",
      details: "48M, Engineer",
      avatarText: "Patient 48",
    },
    difficulty: "Expert",
    time: "40 min",
    specialty: "Cardiology",
  },
  {
    id: "neuro-001",
    title: "Frequent Headaches",
    description: "A 25-year-old woman has frequent, throbbing headaches.",
    initialPrompt: "I've been getting these bad headaches almost every week.",
    patientInfo: {
      name: "Anna Bell",
      details: "25F, Student",
      avatarText: "Patient 25",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Neurology",
  },
  {
    id: "neuro-002",
    title: "Sudden Weakness on One Side",
    description: "A 60-year-old man suddenly can't move his right arm and leg.",
    initialPrompt:
      "I suddenly couldn't move my right side and my speech is slurred.",
    patientInfo: {
      name: "Frank Miller",
      details: "60M, Retired",
      avatarText: "Patient 60",
    },
    difficulty: "Expert",
    time: "35 min",
    specialty: "Neurology",
  },
  {
    id: "neuro-003",
    title: "Tingling in Hands and Feet",
    description: "A 40-year-old woman reports tingling in her hands and feet.",
    initialPrompt: "My hands and feet feel tingly and sometimes numb.",
    patientInfo: {
      name: "Sophie King",
      details: "40F, Chef",
      avatarText: "Patient 40",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Neurology",
  },
  {
    id: "neuro-004",
    title: "Seizure Episode",
    description: "A 19-year-old man collapses and shakes for 2 minutes.",
    initialPrompt:
      "I don't remember what happened, but people said I was shaking on the ground.",
    patientInfo: {
      name: "Tom White",
      details: "19M, Student",
      avatarText: "Patient 19",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Neurology",
  },
  {
    id: "neuro-005",
    title: "Double Vision",
    description: "A 35-year-old woman sees double when looking to the side.",
    initialPrompt: "When I look to the left, I see two of everything.",
    patientInfo: {
      name: "Rachel Kim",
      details: "35F, Designer",
      avatarText: "Patient 35",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Neurology",
  },
  {
    id: "id-001",
    title: "Fever and Sore Throat",
    description:
      "A 22-year-old man has fever, sore throat, and swollen glands.",
    initialPrompt:
      "My throat hurts, I have a fever, and my neck feels swollen.",
    patientInfo: {
      name: "Ben Carter",
      details: "22M, Student",
      avatarText: "Patient 22",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Infectious Disease",
  },
  {
    id: "id-002",
    title: "Persistent Cough and Night Sweats",
    description:
      "A 30-year-old woman has a cough for 3 weeks and night sweats.",
    initialPrompt:
      "I've been coughing for weeks and wake up sweating at night.",
    patientInfo: {
      name: "Linda Fox",
      details: "30F, Nurse",
      avatarText: "Patient 30",
    },
    difficulty: "Advanced",
    time: "30 min",
    specialty: "Infectious Disease",
  },
  {
    id: "id-003",
    title: "Diarrhea After Travel",
    description: "A 27-year-old man has diarrhea after returning from abroad.",
    initialPrompt: "I just got back from a trip and now I have bad diarrhea.",
    patientInfo: {
      name: "Chris Lee",
      details: "27M, Engineer",
      avatarText: "Patient 27",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Infectious Disease",
  },
  {
    id: "id-004",
    title: "Rash and Joint Pain",
    description:
      "A 34-year-old woman has a rash and joint pain after a mosquito bite.",
    initialPrompt:
      "I was bitten by mosquitoes and now I have a rash and my joints hurt.",
    patientInfo: {
      name: "Maya Patel",
      details: "34F, Lawyer",
      avatarText: "Patient 34",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Infectious Disease",
  },
  {
    id: "id-005",
    title: "High Fever and Confusion",
    description: "A 50-year-old man is confused and has a high fever.",
    initialPrompt: "My family says I'm acting strange and I have a high fever.",
    patientInfo: {
      name: "Peter Young",
      details: "50M, Accountant",
      avatarText: "Patient 50",
    },
    difficulty: "Expert",
    time: "40 min",
    specialty: "Infectious Disease",
  },
  {
    id: "gi-001",
    title: "Abdominal Pain After Eating",
    description: "A 45-year-old woman has pain after meals.",
    initialPrompt: "My stomach hurts after I eat, especially fatty foods.",
    patientInfo: {
      name: "Susan Hall",
      details: "45F, Chef",
      avatarText: "Patient 45",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gi-002",
    title: "Bloody Diarrhea",
    description: "A 29-year-old man has bloody diarrhea and cramping.",
    initialPrompt:
      "I've had diarrhea with blood and bad cramps for a few days.",
    patientInfo: {
      name: "Alex Kim",
      details: "29M, Analyst",
      avatarText: "Patient 29",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gi-003",
    title: "Heartburn and Regurgitation",
    description:
      "A 38-year-old woman has heartburn and sour taste in her mouth.",
    initialPrompt: "I keep getting heartburn and sometimes food comes back up.",
    patientInfo: {
      name: "Nina Park",
      details: "38F, Writer",
      avatarText: "Patient 38",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gi-004",
    title: "Jaundice and Dark Urine",
    description: "A 52-year-old man has yellow skin and dark urine.",
    initialPrompt: "My skin and eyes are yellow and my urine is very dark.",
    patientInfo: {
      name: "David Lin",
      details: "52M, Banker",
      avatarText: "Patient 52",
    },
    difficulty: "Expert",
    time: "35 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gi-005",
    title: "Constipation and Bloating",
    description: "A 60-year-old woman is constipated and bloated.",
    initialPrompt:
      "I haven't had a bowel movement in days and my belly feels bloated.",
    patientInfo: {
      name: "Helen Moore",
      details: "60F, Retired",
      avatarText: "Patient 60",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Gastroenterology",
  },
  {
    id: "pulm-001",
    title: "Chronic Cough",
    description: "A 55-year-old man has a cough for months.",
    initialPrompt: "I've been coughing for months and it won't go away.",
    patientInfo: {
      name: "Mark Evans",
      details: "55M, Driver",
      avatarText: "Patient 55",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Pulmonology",
  },
  {
    id: "pulm-002",
    title: "Wheezing and Shortness of Breath",
    description: "A 23-year-old woman has wheezing and can't catch her breath.",
    initialPrompt:
      "I get wheezy and short of breath, especially when I exercise.",
    patientInfo: {
      name: "Olivia Scott",
      details: "23F, Student",
      avatarText: "Patient 23",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Pulmonology",
  },
  {
    id: "pulm-003",
    title: "Coughing Up Blood",
    description: "A 47-year-old man coughs up blood.",
    initialPrompt: "I coughed and there was blood in it. I'm scared.",
    patientInfo: {
      name: "Brian Lee",
      details: "47M, Chef",
      avatarText: "Patient 47",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Pulmonology",
  },
  {
    id: "pulm-004",
    title: "Nighttime Shortness of Breath",
    description: "A 65-year-old woman wakes up breathless at night.",
    initialPrompt: "I wake up at night and can't breathe well.",
    patientInfo: {
      name: "Patricia Young",
      details: "65F, Retired",
      avatarText: "Patient 65",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Pulmonology",
  },
  {
    id: "pulm-005",
    title: "Sudden Severe Asthma Attack",
    description: "A 16-year-old boy has a sudden asthma attack.",
    initialPrompt: "I suddenly can't breathe and my inhaler isn't helping.",
    patientInfo: {
      name: "Ethan Brown",
      details: "16M, Student",
      avatarText: "Patient 16",
    },
    difficulty: "Expert",
    time: "20 min",
    specialty: "Pulmonology",
  },
  {
    id: "endo-001",
    title: "Increased Thirst and Urination",
    description: "A 35-year-old woman is always thirsty and urinates often.",
    initialPrompt: "I'm always thirsty and have to pee all the time.",
    patientInfo: {
      name: "Julia Adams",
      details: "35F, Accountant",
      avatarText: "Patient 35",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-002",
    title: "Weight Loss and Fatigue",
    description: "A 42-year-old man is losing weight and feels tired.",
    initialPrompt:
      "I've lost weight without trying and feel tired all the time.",
    patientInfo: {
      name: "Kevin Smith",
      details: "42M, Manager",
      avatarText: "Patient 42",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-003",
    title: "Neck Swelling and Heat Intolerance",
    description:
      "A 29-year-old woman has a swollen neck and can't tolerate heat.",
    initialPrompt: "My neck is swollen and I get hot and sweaty easily.",
    patientInfo: {
      name: "Emily Clark",
      details: "29F, Nurse",
      avatarText: "Patient 29",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-004",
    title: "Episodes of Shakiness",
    description: "A 50-year-old man has episodes of shakiness and confusion.",
    initialPrompt:
      "Sometimes I get shaky and confused, but it goes away after I eat.",
    patientInfo: {
      name: "Robert Lee",
      details: "50M, Chef",
      avatarText: "Patient 50",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-005",
    title: "Excessive Hair Growth",
    description: "A 24-year-old woman has excessive hair growth on her face.",
    initialPrompt: "I've noticed more hair growing on my face and body.",
    patientInfo: {
      name: "Sara Kim",
      details: "24F, Student",
      avatarText: "Patient 24",
    },
    difficulty: "Expert",
    time: "25 min",
    specialty: "Endocrinology",
  },
  {
    id: "onco-001",
    title: "Unintentional Weight Loss",
    description: "A 58-year-old man is losing weight and has no appetite.",
    initialPrompt: "I've lost a lot of weight and don't feel like eating.",
    patientInfo: {
      name: "Henry Ford",
      details: "58M, Retired",
      avatarText: "Patient 58",
    },
    difficulty: "Advanced",
    time: "30 min",
    specialty: "Oncology",
  },
  {
    id: "onco-002",
    title: "Lump in the Breast",
    description: "A 45-year-old woman found a lump in her breast.",
    initialPrompt: "I found a lump in my breast during a shower.",
    patientInfo: {
      name: "Laura Smith",
      details: "45F, Teacher",
      avatarText: "Patient 45",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Oncology",
  },
  {
    id: "onco-003",
    title: "Blood in Urine",
    description: "A 62-year-old man has blood in his urine.",
    initialPrompt: "I noticed blood in my urine a few times this week.",
    patientInfo: {
      name: "George Lee",
      details: "62M, Retired",
      avatarText: "Patient 62",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Oncology",
  },
  {
    id: "onco-004",
    title: "Persistent Cough and Hoarseness",
    description: "A 50-year-old woman has a cough and hoarse voice for months.",
    initialPrompt: "I've had a cough and my voice is hoarse for months.",
    patientInfo: {
      name: "Megan Brown",
      details: "50F, Lawyer",
      avatarText: "Patient 50",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Oncology",
  },
  {
    id: "onco-005",
    title: "Easy Bruising and Fatigue",
    description: "A 35-year-old man bruises easily and feels tired.",
    initialPrompt: "I get bruises easily and I'm always tired.",
    patientInfo: {
      name: "James Kim",
      details: "35M, Chef",
      avatarText: "Patient 35",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Oncology",
  },
  {
    id: "peds-001",
    title: "Fever and Rash in a Child",
    description: "A 4-year-old boy has fever and a red rash.",
    initialPrompt:
      "My son has a fever and now he has a red rash all over his body.",
    patientInfo: {
      name: "Eli Brown",
      details: "4M, Preschooler",
      avatarText: "Patient 4",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Pediatrics",
  },
  {
    id: "peds-002",
    title: "Cough and Wheezing in a Child",
    description: "A 6-year-old girl has a cough and wheezing.",
    initialPrompt:
      "My daughter has a cough and sometimes she wheezes when she breathes.",
    patientInfo: {
      name: "Lily Evans",
      details: "6F, Student",
      avatarText: "Patient 6",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Pediatrics",
  },
  {
    id: "peds-003",
    title: "Vomiting and Diarrhea in a Child",
    description: "A 3-year-old girl has vomiting and diarrhea.",
    initialPrompt:
      "My daughter has been throwing up and has diarrhea since yesterday.",
    patientInfo: {
      name: "Mia Lee",
      details: "3F, Toddler",
      avatarText: "Patient 3",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Pediatrics",
  },
  {
    id: "peds-004",
    title: "Ear Pain in a Child",
    description: "A 5-year-old boy complains of ear pain.",
    initialPrompt: "My ear hurts a lot, especially when I swallow.",
    patientInfo: {
      name: "Noah Kim",
      details: "5M, Preschooler",
      avatarText: "Patient 5",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Pediatrics",
  },
  {
    id: "peds-005",
    title: "Limping Child",
    description: "A 7-year-old boy is limping and refuses to walk.",
    initialPrompt:
      "My son is limping and says his leg hurts, but he didn't fall.",
    patientInfo: {
      name: "Jack White",
      details: "7M, Student",
      avatarText: "Patient 7",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Pediatrics",
  },
  {
    id: "psych-001",
    title: "Low Mood and Loss of Interest",
    description:
      "A 32-year-old woman feels sad and uninterested in activities.",
    initialPrompt:
      "I feel down all the time and nothing makes me happy anymore.",
    patientInfo: {
      name: "Emma Green",
      details: "32F, Artist",
      avatarText: "Patient 32",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-002",
    title: "Anxiety and Panic Attacks",
    description: "A 27-year-old man has anxiety and panic attacks.",
    initialPrompt: "I get really anxious and sometimes have panic attacks.",
    patientInfo: {
      name: "Ryan Lee",
      details: "27M, Engineer",
      avatarText: "Patient 27",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-003",
    title: "Insomnia and Racing Thoughts",
    description: "A 40-year-old woman can't sleep and has racing thoughts.",
    initialPrompt: "I can't fall asleep and my mind won't stop racing.",
    patientInfo: {
      name: "Sophia Brown",
      details: "40F, Writer",
      avatarText: "Patient 40",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-004",
    title: "Hearing Voices",
    description: "A 22-year-old man hears voices others don't.",
    initialPrompt: "I hear voices talking to me, but no one else is there.",
    patientInfo: {
      name: "Adam Smith",
      details: "22M, Student",
      avatarText: "Patient 22",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-005",
    title: "Obsessive Thoughts and Repetitive Behaviors",
    description:
      "A 29-year-old woman has obsessive thoughts and repetitive actions.",
    initialPrompt:
      "I can't stop thinking about germs and I wash my hands over and over.",
    patientInfo: {
      name: "Grace Lee",
      details: "29F, Nurse",
      avatarText: "Patient 29",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Psychiatry",
  },
];
