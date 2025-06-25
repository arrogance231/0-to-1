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
      "Dok, matindi at biglang sumakit ang dibdib ko nitong nakaraang 2 oras. Bigla itong nagsimula habang nagtatrabaho ako. Lalong sumasakit kapag humihinga ako ng malalim.",
    patientInfo: {
      name: "John Smith",
      details: "Pasiyente / 45 taong gulang / Accountant",
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
      "Dok, dalawang araw na akong may matinding sakit ng ulo na hindi nawawala. Hindi na tumatalab ang gamot na binili ko.",
    patientInfo: {
      name: "Emily White",
      details: "Pasiyente / 32 taong gulang / Designer",
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
      "Hindi ako makahinga ng maayos nitong mga nakaraang araw at hindi mawala-wala ang ubo ko. Pakiramdam ko mas mabilis akong mapagod.",
    patientInfo: {
      name: "Sarah Jones",
      details: "Pasiyente / 68 taong gulang / Retirado",
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
      "Ang sakit ng tiyan ko, Dok. Matindi at matalim ang sakit sa kanang ibaba ng tiyan ko, parang masusuka ako. May lagnat din ako.",
    patientInfo: {
      name: "Michael Brown",
      details: "Pasiyente / 19 taong gulang / Estudyante",
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
      "Dok, nakakaramdam ako ng paninikip ng dibdib tuwing umaakyat ako ng hagdan. Nawawala ito kapag nagpapahinga ako.",
    patientInfo: {
      name: "Paul Adams",
      details: "Pasiyente / 54 taong gulang / Salesman",
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
    initialPrompt:
      "Minsan, Dok, biglang bumibilis ang tibok ng puso ko at parang mahihimatay ako.",
    patientInfo: {
      name: "Lisa Green",
      details: "Pasiyente / 28 taong gulang / Guro",
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
      "Nagigising ako sa gabi na hinihingal at kailangan kong umupo para makahinga ng maayos.",
    patientInfo: {
      name: "George Lee",
      details: "Pasiyente / 70 taong gulang / Retirado",
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
      "Namamaga ang mga binti ko at mabilis akong mapagod kahit kaunting galaw lang.",
    patientInfo: {
      name: "Mary Brown",
      details: "Pasiyente / 62 taong gulang / Librarian",
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
      "Bigla akong nakaramdam ng matinding paninikip ng dibdib na umaabot hanggang kaliwang braso ko.",
    patientInfo: {
      name: "John Smith",
      details: "Pasiyente / 48 taong gulang / Engineer",
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
    initialPrompt:
      "Halos linggo-linggo akong sumasakit ang ulo, Dok, at matindi ang pintig.",
    patientInfo: {
      name: "Anna Bell",
      details: "Pasiyente / 25 taong gulang / Estudyante",
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
      "Bigla akong hindi makagalaw sa kanang bahagi ng katawan ko at parang malabo ang pananalita ko.",
    patientInfo: {
      name: "Frank Miller",
      details: "Pasiyente / 60 taong gulang / Retirado",
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
    initialPrompt:
      "Namamanhid at parang may tusok-tusok ang mga kamay at paa ko, Dok, minsan parang wala akong maramdaman.",
    patientInfo: {
      name: "Sophie King",
      details: "Pasiyente / 40 taong gulang / Chef",
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
      "Hindi ko po maalala ang nangyari, pero sabi nila nanginginig daw ako at bumagsak sa sahig.",
    patientInfo: {
      name: "Tom White",
      details: "Pasiyente / 19 taong gulang / Estudyante",
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
    initialPrompt:
      "Kapag tumitingin ako sa kaliwa, Dok, dalawa ang nakikita ko sa lahat ng bagay.",
    patientInfo: {
      name: "Rachel Kim",
      details: "Pasiyente / 35 taong gulang / Designer",
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
      "Masakit ang lalamunan ko, may lagnat ako, at namamaga ang leeg ko, Dok.",
    patientInfo: {
      name: "Ben Carter",
      details: "Pasiyente / 22 taong gulang / Estudyante",
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
      "Tatlong linggo na akong inuubo at madalas akong pawisan sa gabi, Dok.",
    patientInfo: {
      name: "Linda Fox",
      details: "Pasiyente / 30 taong gulang / Nurse",
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
    initialPrompt:
      "Kakauwi ko lang mula sa biyahe at ngayon ay nagtatae ako, Dok.",
    patientInfo: {
      name: "Chris Lee",
      details: "Pasiyente / 27 taong gulang / Engineer",
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
      "Nakagat ako ng lamok, Dok, tapos nagkaroon ako ng pantal at sumasakit ang mga kasu-kasuan ko.",
    patientInfo: {
      name: "Maya Patel",
      details: "Pasiyente / 34 taong gulang / Abogado",
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
    initialPrompt:
      "Sabi ng pamilya ko, parang iba raw ang kilos ko at mataas ang lagnat ko, Dok.",
    patientInfo: {
      name: "Peter Young",
      details: "Pasiyente / 50 taong gulang / Accountant",
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
    initialPrompt:
      "Sumasakit ang tiyan ko tuwing pagkatapos kumain, lalo na kapag mamantika ang pagkain.",
    patientInfo: {
      name: "Susan Hall",
      details: "Pasiyente / 45 taong gulang / Chef",
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
      "Ilang araw na akong nagtatae na may kasamang dugo at matindi ang pananakit ng tiyan ko, Dok.",
    patientInfo: {
      name: "Alex Kim",
      details: "Pasiyente / 29 taong gulang / Analyst",
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
    initialPrompt:
      "Palagi akong nakakaranas ng heartburn at minsan umaakyat ang pagkain pabalik sa bibig ko, Dok.",
    patientInfo: {
      name: "Nina Park",
      details: "Pasiyente / 38 taong gulang / Manunulat",
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
    initialPrompt:
      "Nanilaw ang balat at mata ko, Dok, at napakadilim ng ihi ko.",
    patientInfo: {
      name: "David Lin",
      details: "Pasiyente / 52 taong gulang / Banker",
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
      "Ilang araw na akong hindi dumudumi at parang busog na busog ang tiyan ko, Dok.",
    patientInfo: {
      name: "Helen Moore",
      details: "Pasiyente / 60 taong gulang / Retirado",
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
    initialPrompt:
      "Matagal na akong inuubo, Dok, ilang buwan na at hindi pa rin gumagaling.",
    patientInfo: {
      name: "Mark Evans",
      details: "Pasiyente / 55 taong gulang / Driver",
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
      "Hingal ako at parang may tunog na sumisipol kapag humihinga, lalo na kapag nag-eehersisyo ako, Dok.",
    patientInfo: {
      name: "Olivia Scott",
      details: "Pasiyente / 23 taong gulang / Estudyante",
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
    initialPrompt: "Umubo ako at may dugo sa plema ko, Dok. Natatakot ako.",
    patientInfo: {
      name: "Brian Lee",
      details: "Pasiyente / 47 taong gulang / Chef",
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
    initialPrompt: "Nagigising ako sa gabi na hindi makahinga ng maayos, Dok.",
    patientInfo: {
      name: "Patricia Young",
      details: "Pasiyente / 65 taong gulang / Retirado",
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
    initialPrompt:
      "Bigla akong hindi makahinga at hindi na tumatalab ang inhaler ko, Dok.",
    patientInfo: {
      name: "Ethan Brown",
      details: "Pasiyente / 16 taong gulang / Estudyante",
      avatarText: "Patient 16",
    },
    difficulty: "Expert",
    time: "20 min",
    specialty: "Pulmonology",
  },
  {
    id: "endo-001",
    title: "Excessive Thirst and Urination",
    description:
      "A 45-year-old woman is always thirsty and urinates frequently.",
    initialPrompt:
      "Palaging nauuhaw ako at madalas umihi, Dok, kahit hindi naman mainit.",
    patientInfo: {
      name: "Maria Garcia",
      details: "Pasiyente / 45 taong gulang / Nurse",
      avatarText: "Patient 45",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-002",
    title: "Weight Gain and Fatigue",
    description:
      "A 35-year-old man gained weight and feels tired all the time.",
    initialPrompt:
      "Tumaba ako at palaging pagod, Dok, kahit hindi naman ako nagtatrabaho ng mabigat.",
    patientInfo: {
      name: "John Martinez",
      details: "Pasiyente / 35 taong gulang / Office Worker",
      avatarText: "Patient 35",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-003",
    title: "Hand Tremors and Anxiety",
    description: "A 40-year-old woman has shaking hands and feels anxious.",
    initialPrompt: "Nanginginig ang mga kamay ko at palaging kinakabahan, Dok.",
    patientInfo: {
      name: "Lisa Anderson",
      details: "Pasiyente / 40 taong gulang / Teacher",
      avatarText: "Patient 40",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-004",
    title: "Heat Intolerance and Sweating",
    description:
      "A 50-year-old man can't tolerate heat and sweats excessively.",
    initialPrompt: "Hindi ako makatiis sa init at sobrang pinagpapawisan, Dok.",
    patientInfo: {
      name: "Carlos Rodriguez",
      details: "Pasiyente / 50 taong gulang / Driver",
      avatarText: "Patient 50",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Endocrinology",
  },
  {
    id: "endo-005",
    title: "Irregular Menstrual Cycles",
    description: "A 28-year-old woman has irregular periods and acne.",
    initialPrompt:
      "Hindi regular ang regla ko, Dok, at may taghiyawat din ako.",
    patientInfo: {
      name: "Sofia Lopez",
      details: "Pasiyente / 28 taong gulang / Designer",
      avatarText: "Patient 28",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Endocrinology",
  },
  {
    id: "rheum-001",
    title: "Joint Pain and Stiffness",
    description: "A 55-year-old woman has morning stiffness and joint pain.",
    initialPrompt:
      "Masakit ang mga kasukasuan ko sa umaga, Dok, at mahirap maggalaw.",
    patientInfo: {
      name: "Elena Santos",
      details: "Pasiyente / 55 taong gulang / Retirado",
      avatarText: "Patient 55",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Rheumatology",
  },
  {
    id: "rheum-002",
    title: "Butterfly Rash on Face",
    description:
      "A 30-year-old woman has a red rash across her nose and cheeks.",
    initialPrompt:
      "May pulang pantal sa ilong at pisngi ko, Dok, parang butterfly.",
    patientInfo: {
      name: "Carmen Reyes",
      details: "Pasiyente / 30 taong gulang / Secretary",
      avatarText: "Patient 30",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Rheumatology",
  },
  {
    id: "rheum-003",
    title: "Finger Pain and Swelling",
    description: "A 45-year-old man has swollen, painful fingers.",
    initialPrompt:
      "Namamaga at masakit ang mga daliri ko, Dok, lalo na sa umaga.",
    patientInfo: {
      name: "Miguel Torres",
      details: "Pasiyente / 45 taong gulang / Carpenter",
      avatarText: "Patient 45",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Rheumatology",
  },
  {
    id: "rheum-004",
    title: "Back Pain and Fatigue",
    description:
      "A 40-year-old woman has chronic back pain and extreme fatigue.",
    initialPrompt:
      "Matagal na akong sumasakit ang likod at sobrang pagod, Dok.",
    patientInfo: {
      name: "Ana Cruz",
      details: "Pasiyente / 40 taong gulang / Housewife",
      avatarText: "Patient 40",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Rheumatology",
  },
  {
    id: "rheum-005",
    title: "Dry Eyes and Mouth",
    description: "A 50-year-old woman has dry eyes and mouth with joint pain.",
    initialPrompt:
      "Tuyo ang mga mata at bibig ko, Dok, at sumasakit din ang mga kasukasuan.",
    patientInfo: {
      name: "Rosa Mendoza",
      details: "Pasiyente / 50 taong gulang / Teacher",
      avatarText: "Patient 50",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Rheumatology",
  },
  {
    id: "onco-001",
    title: "Unintentional Weight Loss",
    description: "A 58-year-old man is losing weight and has no appetite.",
    initialPrompt:
      "Hindi ko alam kung bakit, Dok, pero pumapayat ako at wala akong ganang kumain.",
    patientInfo: {
      name: "Henry Ford",
      details: "Pasiyente / 58 taong gulang / Retirado",
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
    initialPrompt: "May nakapa akong bukol sa dibdib ko habang naliligo, Dok.",
    patientInfo: {
      name: "Laura Smith",
      details: "Pasiyente / 45 taong gulang / Guro",
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
    initialPrompt:
      "Napansin kong may dugo sa ihi ko ilang beses ngayong linggo, Dok.",
    patientInfo: {
      name: "George Lee",
      details: "Pasiyente / 62 taong gulang / Retirado",
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
    initialPrompt:
      "Matagal na akong inuubo at paos ang boses ko, Dok, ilang buwan na.",
    patientInfo: {
      name: "Megan Brown",
      details: "Pasiyente / 50 taong gulang / Abogado",
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
    initialPrompt: "Madali akong magkapasa at palaging pagod, Dok.",
    patientInfo: {
      name: "James Kim",
      details: "Pasiyente / 35 taong gulang / Chef",
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
      "May lagnat po ang anak ko at nagkaroon ng pulang pantal sa buong katawan.",
    patientInfo: {
      name: "Eli Brown",
      details: "Pasiyente / 4 taong gulang / Preschooler",
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
      "May ubo po ang anak ko at minsan parang sumisipol ang paghinga niya.",
    patientInfo: {
      name: "Lily Evans",
      details: "Pasiyente / 6 taong gulang / Estudyante",
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
    initialPrompt: "Simula kahapon, nagsusuka at nagtatae ang anak ko, Dok.",
    patientInfo: {
      name: "Mia Lee",
      details: "Pasiyente / 3 taong gulang / Toddler",
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
    initialPrompt: "Masakit ang tenga ko, Dok, lalo na kapag lumulunok ako.",
    patientInfo: {
      name: "Noah Kim",
      details: "Pasiyente / 5 taong gulang / Preschooler",
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
      "Paika-ika ang anak ko at ayaw maglakad, pero hindi naman siya nadapa, Dok.",
    patientInfo: {
      name: "Jack White",
      details: "Pasiyente / 7 taong gulang / Estudyante",
      avatarText: "Patient 7",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Pediatrics",
  },
  {
    id: "psych-001",
    title: "Depression and Sleep Problems",
    description: "A 28-year-old woman feels sad and can't sleep.",
    initialPrompt:
      "Malungkot ako at hindi ako makatulog, Dok, ilang linggo na.",
    patientInfo: {
      name: "Emma Davis",
      details: "Pasiyente / 28 taong gulang / Designer",
      avatarText: "Patient 28",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-002",
    title: "Anxiety and Panic Attacks",
    description: "A 32-year-old man has panic attacks and feels anxious.",
    initialPrompt:
      "Bigla na lang ako natatakot at nahihirapang huminga, Dok, parang mamatay na ako.",
    patientInfo: {
      name: "Alex Chen",
      details: "Pasiyente / 32 taong gulang / Engineer",
      avatarText: "Patient 32",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-003",
    title: "Hearing Voices",
    description: "A 25-year-old woman hears voices that aren't there.",
    initialPrompt:
      "May naririnig akong mga boses na hindi naman totoo, Dok, at natatakot ako.",
    patientInfo: {
      name: "Sarah Wilson",
      details: "Pasiyente / 25 taong gulang / Artist",
      avatarText: "Patient 25",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-004",
    title: "Mood Swings and Irritability",
    description: "A 35-year-old man has extreme mood changes.",
    initialPrompt:
      "Bigla na lang ako nagagalit o malungkot, Dok, hindi ko alam kung bakit.",
    patientInfo: {
      name: "Mike Johnson",
      details: "Pasiyente / 35 taong gulang / Sales",
      avatarText: "Patient 35",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Psychiatry",
  },
  {
    id: "psych-005",
    title: "Obsessive Thoughts",
    description:
      "A 30-year-old woman has repetitive thoughts she can't control.",
    initialPrompt:
      "May mga iniisip ako na paulit-ulit at hindi ko mapigilan, Dok.",
    patientInfo: {
      name: "Lisa Park",
      details: "Pasiyente / 30 taong gulang / Accountant",
      avatarText: "Patient 30",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Psychiatry",
  },
  {
    id: "derm-001",
    title: "Itchy Red Rash",
    description: "A 40-year-old woman has an itchy red rash on her arms.",
    initialPrompt:
      "May makati at pulang pantal sa mga braso ko, Dok, ilang araw na.",
    patientInfo: {
      name: "Anna Garcia",
      details: "Pasiyente / 40 taong gulang / Nurse",
      avatarText: "Patient 40",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Dermatology",
  },
  {
    id: "derm-002",
    title: "Mole Changes",
    description: "A 45-year-old man noticed a mole that changed color.",
    initialPrompt:
      "May nunal ako na nagbago ng kulay at laki, Dok, natatakot ako.",
    patientInfo: {
      name: "Carlos Rodriguez",
      details: "Pasiyente / 45 taong gulang / Teacher",
      avatarText: "Patient 45",
    },
    difficulty: "Advanced",
    time: "15 min",
    specialty: "Dermatology",
  },
  {
    id: "derm-003",
    title: "Acne Breakout",
    description: "A 16-year-old girl has severe acne on her face.",
    initialPrompt: "Maraming taghiyawat sa mukha ko, Dok, at nahihiya na ako.",
    patientInfo: {
      name: "Maria Santos",
      details: "Pasiyente / 16 taong gulang / Estudyante",
      avatarText: "Patient 16",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Dermatology",
  },
  {
    id: "derm-004",
    title: "Hair Loss",
    description: "A 38-year-old woman is losing hair rapidly.",
    initialPrompt:
      "Madami akong nalalaglag na buhok, Dok, at natatakot ako na kalbo na ako.",
    patientInfo: {
      name: "Jennifer Lopez",
      details: "Pasiyente / 38 taong gulang / Manager",
      avatarText: "Patient 38",
    },
    difficulty: "Advanced",
    time: "15 min",
    specialty: "Dermatology",
  },
  {
    id: "derm-005",
    title: "Nail Discoloration",
    description: "A 50-year-old man has yellow, thickened nails.",
    initialPrompt:
      "Dilaw at makapal ang mga kuko ko, Dok, at hindi ko alam kung bakit.",
    patientInfo: {
      name: "Robert Martinez",
      details: "Pasiyente / 50 taong gulang / Driver",
      avatarText: "Patient 50",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Dermatology",
  },
  {
    id: "ortho-001",
    title: "Knee Pain After Fall",
    description: "A 65-year-old woman fell and now has severe knee pain.",
    initialPrompt:
      "Nadapa ako at masakit na ang tuhod ko, Dok, hindi na ako makalakad ng maayos.",
    patientInfo: {
      name: "Helen White",
      details: "Pasiyente / 65 taong gulang / Retirado",
      avatarText: "Patient 65",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Orthopedics",
  },
  {
    id: "ortho-002",
    title: "Back Pain from Lifting",
    description: "A 45-year-old man has back pain after lifting heavy boxes.",
    initialPrompt:
      "Sumakit ang likod ko nang magbuhat ako ng mabigat na kahon, Dok.",
    patientInfo: {
      name: "David Thompson",
      details: "Pasiyente / 45 taong gulang / Warehouse Worker",
      avatarText: "Patient 45",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Orthopedics",
  },
  {
    id: "ortho-003",
    title: "Shoulder Pain and Limited Movement",
    description:
      "A 50-year-old woman can't raise her arm due to shoulder pain.",
    initialPrompt:
      "Hindi ko na maangat ang braso ko dahil sa sakit sa balikat, Dok.",
    patientInfo: {
      name: "Patricia Clark",
      details: "Pasiyente / 50 taong gulang / Secretary",
      avatarText: "Patient 50",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Orthopedics",
  },
  {
    id: "ortho-004",
    title: "Ankle Sprain",
    description: "A 25-year-old man twisted his ankle playing basketball.",
    initialPrompt:
      "Nakapilipit ang bukong-bukong ko habang naglalaro ng basketball, Dok.",
    patientInfo: {
      name: "Kevin Miller",
      details: "Pasiyente / 25 taong gulang / Estudyante",
      avatarText: "Patient 25",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Orthopedics",
  },
  {
    id: "ortho-005",
    title: "Hip Pain in Elderly",
    description: "A 70-year-old man has chronic hip pain that affects walking.",
    initialPrompt:
      "Matagal na akong sumasakit ang balakang, Dok, at nahihirapan na akong maglakad.",
    patientInfo: {
      name: "Frank Anderson",
      details: "Pasiyente / 70 taong gulang / Retirado",
      avatarText: "Patient 70",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Orthopedics",
  },
  {
    id: "uro-001",
    title: "Frequent Urination",
    description: "A 55-year-old man urinates frequently, especially at night.",
    initialPrompt:
      "Madalas akong umihi, Dok, lalo na sa gabi, at minsan hindi ko mapigilan.",
    patientInfo: {
      name: "William Davis",
      details: "Pasiyente / 55 taong gulang / Manager",
      avatarText: "Patient 55",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Urology",
  },
  {
    id: "uro-002",
    title: "Painful Urination",
    description: "A 30-year-old woman has burning pain when urinating.",
    initialPrompt: "Masakit kapag umihi ako, Dok, parang may apoy sa loob.",
    patientInfo: {
      name: "Amanda Wilson",
      details: "Pasiyente / 30 taong gulang / Teacher",
      avatarText: "Patient 30",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Urology",
  },
  {
    id: "uro-003",
    title: "Kidney Stone Pain",
    description: "A 40-year-old man has severe flank pain from kidney stones.",
    initialPrompt:
      "Matindi ang sakit sa tagiliran ko, Dok, parang may bato sa loob ng katawan ko.",
    patientInfo: {
      name: "Michael Taylor",
      details: "Pasiyente / 40 taong gulang / Engineer",
      avatarText: "Patient 40",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Urology",
  },
  {
    id: "uro-004",
    title: "Erectile Dysfunction",
    description: "A 45-year-old man has difficulty maintaining an erection.",
    initialPrompt:
      "Nahihirapan ako sa pagtayo ng ari, Dok, at nahihiya akong pag-usapan ito.",
    patientInfo: {
      name: "Robert Johnson",
      details: "Pasiyente / 45 taong gulang / Businessman",
      avatarText: "Patient 45",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Urology",
  },
  {
    id: "uro-005",
    title: "Prostate Problems",
    description: "A 60-year-old man has difficulty starting urination.",
    initialPrompt: "Nahihirapan akong umihi, Dok, parang may bara sa loob.",
    patientInfo: {
      name: "Thomas Brown",
      details: "Pasiyente / 60 taong gulang / Retirado",
      avatarText: "Patient 60",
    },
    difficulty: "Expert",
    time: "25 min",
    specialty: "Urology",
  },
  {
    id: "gastro-001",
    title: "Severe Abdominal Pain",
    description:
      "A 35-year-old woman has sudden, severe pain in her lower right abdomen.",
    initialPrompt:
      "Biglang sumakit ang tiyan ko sa kanang ibaba, Dok, at hindi ko matiis ang sakit.",
    patientInfo: {
      name: "Isabella Ramos",
      details: "Pasiyente / 35 taong gulang / Teacher",
      avatarText: "Patient 35",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gastro-002",
    title: "Chronic Heartburn",
    description:
      "A 45-year-old man has heartburn that gets worse after eating.",
    initialPrompt:
      "Palaging may heartburn ako, Dok, lalo na pagkatapos kumain.",
    patientInfo: {
      name: "Antonio Silva",
      details: "Pasiyente / 45 taong gulang / Engineer",
      avatarText: "Patient 45",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gastro-003",
    title: "Blood in Stool",
    description:
      "A 50-year-old woman noticed blood in her stool for the past week.",
    initialPrompt: "May dugo sa dumi ko, Dok, ilang araw na at natatakot ako.",
    patientInfo: {
      name: "Concepcion Flores",
      details: "Pasiyente / 50 taong gulang / Housewife",
      avatarText: "Patient 50",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gastro-004",
    title: "Nausea and Vomiting",
    description:
      "A 25-year-old woman has been nauseous and vomiting for 3 days.",
    initialPrompt:
      "Nahihilo ako at nagsusuka, Dok, tatlong araw na at hindi ako makakain.",
    patientInfo: {
      name: "Gabriela Santos",
      details: "Pasiyente / 25 taong gulang / Estudyante",
      avatarText: "Patient 25",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Gastroenterology",
  },
  {
    id: "gastro-005",
    title: "Jaundice and Dark Urine",
    description: "A 40-year-old man has yellow skin and dark urine.",
    initialPrompt: "Dilaw ang balat ko, Dok, at madilim ang ihi ko.",
    patientInfo: {
      name: "Ramon Cruz",
      details: "Pasiyente / 40 taong gulang / Driver",
      avatarText: "Patient 40",
    },
    difficulty: "Expert",
    time: "25 min",
    specialty: "Gastroenterology",
  },
  {
    id: "hema-001",
    title: "Easy Bruising and Bleeding",
    description:
      "A 30-year-old woman bruises easily and bleeds for a long time.",
    initialPrompt:
      "Madali akong magkapasa, Dok, at matagal magpahinto ang dugo kapag nasugatan.",
    patientInfo: {
      name: "Lucia Mendoza",
      details: "Pasiyente / 30 taong gulang / Secretary",
      avatarText: "Patient 30",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Hematology",
  },
  {
    id: "hema-002",
    title: "Pale Skin and Fatigue",
    description: "A 35-year-old man has pale skin and feels very tired.",
    initialPrompt:
      "Maputla ang balat ko, Dok, at sobrang pagod ako kahit hindi naman ako nagtatrabaho ng mabigat.",
    patientInfo: {
      name: "Fernando Reyes",
      details: "Pasiyente / 35 taong gulang / Office Worker",
      avatarText: "Patient 35",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Hematology",
  },
  {
    id: "hema-003",
    title: "Enlarged Lymph Nodes",
    description: "A 45-year-old woman has swollen lymph nodes in her neck.",
    initialPrompt: "May bukol sa leeg ko, Dok, at hindi ko alam kung ano ito.",
    patientInfo: {
      name: "Teresa Gonzales",
      details: "Pasiyente / 45 taong gulang / Nurse",
      avatarText: "Patient 45",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Hematology",
  },
  {
    id: "hema-004",
    title: "Night Sweats and Weight Loss",
    description: "A 50-year-old man sweats at night and has lost weight.",
    initialPrompt:
      "Pinagpapawisan ako sa gabi, Dok, at pumapayat ako kahit hindi naman ako nagdidiyeta.",
    patientInfo: {
      name: "Jose Martinez",
      details: "Pasiyente / 50 taong gulang / Businessman",
      avatarText: "Patient 50",
    },
    difficulty: "Expert",
    time: "25 min",
    specialty: "Hematology",
  },
  {
    id: "hema-005",
    title: "Bone Pain and Weakness",
    description: "A 60-year-old woman has bone pain and feels weak.",
    initialPrompt: "Sumasakit ang mga buto ko, Dok, at mahina na ako.",
    patientInfo: {
      name: "Carmen Rodriguez",
      details: "Pasiyente / 60 taong gulang / Retirado",
      avatarText: "Patient 60",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Hematology",
  },
];
