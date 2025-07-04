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
  customData?: {
    Name: string;
    Age: number;
    Sex: string;
    ReasonForInquiring: string;
    ChiefComplaint: string;
    HistoryOfPresentingIllness: string;
    PatientPhysicianRelationship: string;
    InterviewTechniques: string;
    MedicalHistorySubjectiveData: {
      Cardiac: string;
      Hypertension: string;
    };
    PastHistory: {
      BirthDevelopment: string;
      ChildhoodIllnesses: string;
      AdulthoodIllnesses: string;
      SurgeriesInjuriesAccidents: string;
      Allergies: string;
    };
    CurrentHealthStatus: string;
    Nutrition: string;
    SleepPattern: string;
    Exercise: string;
    SmokingAlcohol: string;
    EnvironmentalExposure: string;
    MedicationData: string;
    RiskFactors: string;
    HealthStatusOfRelatives: string;
    PersonalAndSocialHistory: {
      MaritalStatus: string;
      LifestyleHomeSituation: string;
      FinancialSupport: string;
    };
    SignificantLifeEvents: string;
    WaterSource: string;
    VerminPests: string;
    PhysicalExaminationObjectiveData: {
      GeneralAppearance: string;
      SkinHairNails: string;
      Pulmonary: string;
      Cardiovascular: string;
      Musculoskeletal: string;
      Neurological: string;
    };
    Forgetfulness: string;
    HealthLiteracy: string;
    LanguageBarriers: string;
    CultureMindset: string;
    ChallengingBehavior: string;
    TypicalProblemPatientBehaviors: string[];
    FeelingMistreatedMisunderstood: string;
    StressOfIllnessOrLifeProblems: string;
    CulturalDifferences: string;
    Symptoms: {
      Onset: string;
      Fever: string;
      BodyAches: string;
      Cough: string;
      NasalSymptoms: string;
      GeneralSigns: string;
    };
    LanguageFluency: {
      English: string;
      Tagalog: string;
      OtherDialect: string;
    };
  };
}

export const clinicalCases: Case[] = [
  {
    id: "case-aling-nena",
    title: "Aling Nena's Complex Presentation",
    description:
      "A 72-year-old widow presents with multiple complaints including joint pain, cough, fever, and forgetfulness.",
    initialPrompt: `Check-up daw... sabi ng anak ko.
Ehh... hindi ko naman talaga alam kung bakit bigla niya akong dinala.
Ang sabi niya, inuubo raw ako buong gabi... tapos... mainit daw ang katawan ko kahapon.

Ako kasi — sanay na ako sa masakit ’yung tuhod, likod... ganyan. Pero itong ubo?
Parang hindi natatapos.

Tapos, tilalagnat daw ako... yun lang naman.

Ayoko sana, kaso mapilit si Lisa, eh...`,
    patientInfo: {
      name: "Aling Nena de Guzman",
      details: "Pasiyente / 72 taong gulang / Biyuda",
      avatarText: "Nena",
    },
    difficulty: "Expert",
    time: "60 min",
    specialty: "Geriatrics",
    customData: {
      Name: "Aling Nena de Guzman",
      Age: 72,
      Sex: "Female",
      ReasonForInquiring:
        "Check-up daw sabi ng anak ko... pero di ko masyado maintindihan kung bakit eh. Sabi niya inuubo raw ako buong gabi.",
      ChiefComplaint:
        "Matagal na masakit ang tuhod at likod, tapos ngayon inuubo at nilalagnat. Minsan nakakalimot din ako...",
      HistoryOfPresentingIllness:
        "Ilang taon na ang joint pain, pero ngayon mas malala. Ngayon lang ako nilagnat ng ganito kataas. Ubo ko tuyo, minsan parang hirap huminga. Malamig katawan ko pero mainit ang noo. Minsan parang wala akong gana kumain o gumalaw.",
      PatientPhysicianRelationship:
        "Mabait pero madaling mainip, madalas nagtatampo kung hindi agad pinapansin o siniseryoso ang nararamdaman.",
      InterviewTechniques:
        "Mahaba ang pasensya, paulit-ulit magpaliwanag, kailangan ng gentle reminder at makiramay muna bago magtanong.",
      MedicalHistorySubjectiveData: {
        Cardiac:
          "Sakit sa puso daw sabi noon, pero di ko na maalala kung kailan yun.",
        Hypertension: "High blood daw sabi nila.",
      },
      PastHistory: {
        BirthDevelopment: "Normal naman yata, matagal na kasi...",
        ChildhoodIllnesses: "Parang nagka-measles daw ako sabi ni inay noon.",
        AdulthoodIllnesses:
          "Nadiagnose daw ako ng hypertension noong 50's ko. Naospital dati dahil sa mataas na sugar.",
        SurgeriesInjuriesAccidents:
          "Naaksidente ako dati sa tricycle, masakit pa din likod ko kapag malamig.",
        Allergies:
          "Wala siguradong allergy, pero nangangati ako minsan sa ilang gamot, di ko na maalala alin.",
      },
      CurrentHealthStatus:
        "Madalas masama pakiramdam, pero ayokong pumunta ng ospital. Parang mas lalala lang ako doon.",
      Nutrition:
        "Madalas wala gana, lalo na ngayon. Mahilig sa matamis at maalat.",
      SleepPattern:
        "Hindi tuloy-tuloy ang tulog, laging gising sa gabi, inuubo at nilalamig.",
      Exercise:
        "Halos wala. Hindi na kaya maglakad nang matagal, masakit tuhod at likod.",
      SmokingAlcohol:
        "Hindi naninigarilyo. Konting inom lang minsan sa mga handaan.",
      EnvironmentalExposure:
        "Nakatira sa kalsada. Maalikabok at maingay. Minsan may amoy usok pa.",
      MedicationData:
        "Hindi ko kabisado. Anak ko ang nag-aasikaso ng gamot ko. Minsan nakakalimutan ko inumin.",
      RiskFactors:
        "Matanda, sedentary lifestyle, exposure sa alikabok, kulang sa tamang pagkain at pahinga.",
      HealthStatusOfRelatives:
        "May diabetes at high blood ang ilan sa mga kapatid ko. Tatay ko dati inatake sa puso.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Biyuda. Namatay asawa ko 8 taon na ang nakaraan.",
        LifestyleHomeSituation:
          "Nakatira sa anak ko. Minsan naiilang akong humingi ng tulong.",
        FinancialSupport:
          "Umaasa sa anak. Minsan nahihiya humingi lalo na pag may sakit.",
      },
      SignificantLifeEvents:
        "Pagkamatay ng asawa. Pakiramdam ko mula noon, parang hindi na ako kasing buo.",
      WaterSource: "Gripo, minsan madumi ang tubig lalo na pag umuulan.",
      VerminPests: "May langgam, ipis, at minsan daga sa kusina.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Mahina, payat, mukhang pagod. Hindi masyado makalakad mag-isa.",
        SkinHairNails: "Tuyong balat, malutong kuko, manipis na buhok.",
        Pulmonary: "Dry cough, shallow breathing, may konting wheeze.",
        Cardiovascular:
          "BP minsan 160/100 kapag nasusukat. May konting chest tightness minsan.",
        Musculoskeletal: "Stiff joints, especially tuhod at balakang.",
        Neurological:
          "Nakakalimot, minsan nagkakamali ng pangalan ng apo. Nalilito pag pagod.",
      },
      Forgetfulness:
        "Moderate to severe. Naaalala lang pag may nakapagsabi o may koneksyon sa alaala.",
      HealthLiteracy: "Mababa. Nahihiyang magtanong. Umaasa sa anak at doktor.",
      LanguageBarriers:
        "Gumagamit ng Taglish. Minsan may lalim ang salita lalo kung galit o emosyonal.",
      CultureMindset:
        "Naniniwala sa hilot at halamang gamot. Takot sa modernong gamot. Mas kampante sa payo ng kapitbahay minsan kaysa doktor.",
      ChallengingBehavior:
        "Minsan magpupumilit sa antibiotic kahit hindi kailangan. Mahilig magreklamo. Di agad sumusunod sa reseta.",
      TypicalProblemPatientBehaviors: [
        "Nagdadagdag ng bagong reklamo habang paalis na ang doktor.",
        "Hindi sinusunod ang tamang oras ng gamot.",
        "Mahilig magpa-drama, minsan ginagamit ang edad para kaawaan.",
        "Gusto ng instant relief kahit hindi realistic.",
      ],
      FeelingMistreatedMisunderstood:
        "Pakiramdam ko, dahil matanda na ako, di na ako masyadong pinapansin. Parang pasanin na lang ako.",
      StressOfIllnessOrLifeProblems:
        "Walang kausap sa bahay. Nai-stress sa lagnat at hirap ng paghinga. Takot baka may malala.",
      CulturalDifferences:
        "Mahilig magdasal. Minsan inuuna ang payo ng albularyo. Tinatanggihan ang ilang gamot kung kontra sa paniniwala.",
      Symptoms: {
        Onset:
          "Nagsimula bigla kagabi, parang nilagnat ako agad pagkatapos manlamig buong araw.",
        Fever:
          "Tumaas ang lagnat ko, parang higit 38°C. Tinatakpan ko ng kumot pero hindi pa rin mawala.",
        BodyAches:
          "Masakit buong katawan ko, parang ginulpi. Mas grabe sa likod at binti.",
        Cough:
          "Tuyong ubo. Hindi ako makahinga minsan. Wala naman plema masyado.",
        NasalSymptoms: "Baradong ilong. Paminsan minsan may sipon.",
        GeneralSigns:
          "Walang gana kumain. Matamlay. Inaantok buong araw. Pagod kahit wala namang ginawa.",
      },
      LanguageFluency: {
        English: "Minimal conversational only. Prefers Tagalog or Taglish.",
        Tagalog: "Fluent",
        OtherDialect: "Some Ilocano phrases under emotional stress",
      },
    },
  },
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
      avatarText: "JS",
    },
    difficulty: "Advanced",
    time: "45 min",
    specialty: "Cardiology",
    customData: {
      Name: "John Smith",
      Age: 45,
      Sex: "Male",
      ReasonForInquiring:
        "Bigla akong nakaramdam ng matinding sakit sa dibdib habang nagtatrabaho. Takot ako baka may malala.",
      ChiefComplaint:
        "Matinding sakit sa dibdib na biglang nagsimula 2 oras na ang nakaraan.",
      HistoryOfPresentingIllness:
        "Bigla lang sumakit ang dibdib ko habang nagtatrabaho. Lalong sumasakit kapag humihinga ng malalim. Parang may nakatayo sa dibdib ko.",
      PatientPhysicianRelationship:
        "Respetuoso pero medyo nahihiya. Gusto ng malinaw na paliwanag at assurance.",
      InterviewTechniques:
        "Direkta magtanong, kailangan ng reassurance, mahalaga ang privacy.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman akong alam na sakit sa puso.",
        Hypertension:
          "Minsan mataas ang BP ko, pero hindi regular na sinusukat.",
      },
      PastHistory: {
        BirthDevelopment: "Normal naman daw sabi ng magulang ko.",
        ChildhoodIllnesses: "Nagka-measles at chicken pox lang.",
        AdulthoodIllnesses: "Minsan may acid reflux, pero hindi malala.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala akong alam na allergy.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa trabaho.",
      Nutrition: "Hindi regular kumain dahil sa trabaho. Madalas fast food.",
      SleepPattern: "6-7 hours lang, minsan kulang dahil sa overtime.",
      Exercise: "Walang regular exercise. Paminsan-minsan lang maglakad.",
      SmokingAlcohol: "Hindi naninigarilyo. Konting beer lang sa weekend.",
      EnvironmentalExposure: "Office work lang, air-conditioned.",
      MedicationData: "Wala naman akong regular na gamot.",
      RiskFactors: "Sedentary lifestyle, stress, irregular diet.",
      HealthStatusOfRelatives:
        "May diabetes ang tatay ko. May high blood ang nanay.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 2 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Stable job, pero may mga bayarin.",
      },
      SignificantLifeEvents: "Recent promotion sa trabaho, pero mas stressful.",
      WaterSource: "Filtered water sa bahay.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Well-groomed, mukhang stressed, slightly overweight.",
        SkinHairNails: "Normal.",
        Pulmonary:
          "Clear breath sounds, pero may slight discomfort sa deep breathing.",
        Cardiovascular: "Regular rate, pero may chest tenderness.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal. Normal for age.",
      HealthLiteracy: "Moderate. May basic understanding ng health.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan nagmamadali, gusto ng quick fix.",
      TypicalProblemPatientBehaviors: [
        "Gusto ng immediate relief",
        "Minsan nagmamadali sa consultation",
        "Hindi agad sumusunod sa lifestyle changes",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan nahihiya magtanong.",
      StressOfIllnessOrLifeProblems:
        "Stressed sa trabaho at financial pressure.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Bigla lang 2 oras ago habang nagtatrabaho.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman, chest pain lang.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Slight anxiety, pero alert.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "EW",
    },
    difficulty: "Expert",
    time: "30 min",
    specialty: "Neurology",
    customData: {
      Name: "Emily White",
      Age: 32,
      Sex: "Female",
      ReasonForInquiring:
        "Dalawang araw na akong may sakit ng ulo na hindi nawawala. Takot ako baka may malala.",
      ChiefComplaint:
        "Matinding sakit ng ulo na 48 oras na, hindi nawawala kahit may gamot.",
      HistoryOfPresentingIllness:
        "Nagsimula bigla 2 araw ago. Throbbing pain sa buong ulo. Lalong sumasakit kapag may liwanag o ingay. May kasamang nausea minsan.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation.",
      InterviewTechniques:
        "Gentle approach, kailangan ng reassurance, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses lang.",
        AdulthoodIllnesses: "Minsan may migraine, pero hindi ganito katagal.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa work.",
      Nutrition: "Irregular diet dahil sa work schedule. Madalas skip meals.",
      SleepPattern: "5-6 hours lang, madalas late na natutulog.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Long hours sa computer, air-conditioned office.",
      MedicationData: "Paracetamol lang, pero hindi na effective.",
      RiskFactors: "Stress, eye strain, irregular sleep, poor posture.",
      HealthStatusOfRelatives: "May migraine ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa condo, may roommate.",
        FinancialSupport: "Stable job, pero may mga bayarin.",
      },
      SignificantLifeEvents: "Recent deadline sa work, very stressful.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired, slightly pale.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "Tense neck and shoulder muscles.",
        Neurological: "Alert, pero sensitive sa light and sound.",
      },
      Forgetfulness: "Minimal, pero may brain fog minsan.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan nagmamadali, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Gusto ng immediate diagnosis",
        "Minsan nagmamadali sa consultation",
        "May tendency mag-self diagnose",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan frustrated sa slow progress.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Bigla 2 araw ago.",
        Fever: "Wala naman.",
        BodyAches: "Neck and shoulder tension.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, sensitivity to light and sound.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "SJ",
    },
    difficulty: "Beginner",
    time: "25 min",
    specialty: "Pulmonology",
    customData: {
      Name: "Sarah Jones",
      Age: 68,
      Sex: "Female",
      ReasonForInquiring:
        "Hindi ako makahinga ng maayos at may ubo na hindi mawala. Takot ako baka may malala.",
      ChiefComplaint: "Hirap sa paghinga at persistent cough na 1 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 linggo ago. Progressive shortness of breath. Dry cough na hindi mawala. Mas mabilis mapagod kahit simple activities lang.",
      PatientPhysicianRelationship:
        "Respetuoso at cooperative. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "May mild hypertension, pero controlled.",
        Hypertension: "Yes, pero controlled with medication.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Hypertension, mild arthritis.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy for age, pero may chronic conditions.",
      Nutrition: "Balanced diet, pero minsan hindi regular kumain.",
      SleepPattern: "6-7 hours, pero minsan disturbed dahil sa cough.",
      Exercise: "Light walking lang, 30 minutes daily.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Nakatira sa residential area, clean environment.",
      MedicationData: "Hypertension medication, maintenance lang.",
      RiskFactors: "Age, hypertension, sedentary lifestyle.",
      HealthStatusOfRelatives: "May diabetes ang kapatid ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Widow, 5 years na.",
        LifestyleHomeSituation: "Nakatira mag-isa sa bahay, may helper.",
        FinancialSupport: "Pension, stable naman.",
      },
      SignificantLifeEvents: "Death of husband 5 years ago.",
      WaterSource: "Clean water supply.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Well-groomed, mukhang tired, slightly short of breath.",
        SkinHairNails: "Normal for age.",
        Pulmonary: "Decreased breath sounds, may wheezing.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "Mild arthritis sa joints.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Mild, normal for age.",
      HealthLiteracy: "Good, may medical background as teacher.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Cooperative, pero minsan anxious.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about health",
        "Gusto ng detailed explanation",
        "May tendency mag-overthink",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried about being old.",
      StressOfIllnessOrLifeProblems: "Worried about health, living alone.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 linggo ago.",
        Fever: "Wala naman.",
        BodyAches: "Mild body aches.",
        Cough: "Dry cough, persistent.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, shortness of breath.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "MB",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Gastroenterology",
    customData: {
      Name: "Michael Brown",
      Age: 19,
      Sex: "Male",
      ReasonForInquiring:
        "Matindi ang sakit ng tiyan ko sa kanang ibaba. Takot ako baka may malala.",
      ChiefComplaint:
        "Severe abdominal pain sa right lower abdomen na 1 araw na.",
      HistoryOfPresentingIllness:
        "Nagsimula kahapon, gradual onset. Sharp pain sa right lower abdomen. May kasamang fever at nausea. Mas sumasakit kapag gumagalaw.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng quick relief.",
      InterviewTechniques:
        "Gentle approach, kailangan ng reassurance, direct questions.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses lang.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, active lifestyle.",
      Nutrition: "Irregular diet, madalas fast food dahil sa school.",
      SleepPattern: "6-8 hours, pero minsan kulang dahil sa studies.",
      Exercise: "Active, may sports sa school.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional beer lang sa parties.",
      EnvironmentalExposure: "School environment, dormitory.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Irregular diet, stress sa studies.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may girlfriend.",
        LifestyleHomeSituation: "Nakatira sa dormitory, may roommate.",
        FinancialSupport: "Student, supported by parents.",
      },
      SignificantLifeEvents: "Recent exams, stressed sa studies.",
      WaterSource: "Filtered water sa dorm.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, mukhang in pain, slightly pale.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear.",
        Cardiovascular: "Regular rate, slightly elevated due to pain.",
        Musculoskeletal: "Tense abdominal muscles.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Basic, may general health knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan impatient, gusto ng immediate relief.",
      TypicalProblemPatientBehaviors: [
        "Gusto ng immediate relief",
        "Minsan nagmamadali sa consultation",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan frustrated sa pain.",
      StressOfIllnessOrLifeProblems:
        "Stressed sa studies, worried about missing classes.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 araw ago.",
        Fever: "Yes, low grade fever.",
        BodyAches: "Wala naman, abdominal pain lang.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Nausea, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "PA",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Cardiology",
    customData: {
      Name: "Paul Adams",
      Age: 54,
      Sex: "Male",
      ReasonForInquiring:
        "May paninikip ng dibdib tuwing umaakyat ng hagdan. Takot ako baka may sakit sa puso.",
      ChiefComplaint: "Chest tightness sa exertion na 2 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 2 linggo ago. Chest tightness tuwing umaakyat ng hagdan o naglalakad ng mabilis. Nawawala kapag nagpapahinga. May kasamang shortness of breath minsan.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo worried. Gusto ng detailed explanation.",
      InterviewTechniques:
        "Gentle approach, kailangan ng reassurance, detailed cardiac history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman akong alam na sakit sa puso.",
        Hypertension:
          "Minsan mataas ang BP ko, pero hindi regular na sinusukat.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Mild hypertension, pero hindi controlled.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero may risk factors.",
      Nutrition: "Irregular diet, madalas fast food dahil sa work.",
      SleepPattern: "6-7 hours, pero minsan kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Ex-smoker, 5 years na. Occasional beer lang.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Age, ex-smoker, hypertension, sedentary lifestyle, stress.",
      HealthStatusOfRelatives: "May heart disease ang tatay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 3 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Stable job, pero may mga bayarin.",
      },
      SignificantLifeEvents: "Recent stress sa work, financial pressure.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Well-groomed, mukhang stressed, slightly overweight.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Moderate, may basic health knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about heart problems",
        "Gusto ng immediate diagnosis",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried about being ignored.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at financial pressure.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 2 linggo ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Shortness of breath on exertion.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "LG",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Cardiology",
    customData: {
      Name: "Lisa Green",
      Age: 28,
      Sex: "Female",
      ReasonForInquiring:
        "Biglang bumibilis ang tibok ng puso ko at parang mahihimatay. Takot ako baka may malala.",
      ChiefComplaint:
        "Palpitations at dizziness na intermittent na 1 buwan na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 buwan ago. Intermittent palpitations, feeling na mabilis ang heartbeat. May kasamang dizziness at feeling faint. Minsan may chest discomfort.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman akong alam na sakit sa puso.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa work.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa work.",
      SleepPattern: "5-6 hours lang, madalas kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "School environment, air-conditioned.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Stress, irregular sleep, poor diet, sedentary lifestyle.",
      HealthStatusOfRelatives: "May anxiety ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as teacher.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired, slightly anxious.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, may occasional irregular rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, pero may brain fog minsan.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick reassurance.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate reassurance",
        "May tendency mag-overthink",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried na hindi seryosohin.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 buwan ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Anxiety, fatigue.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "GL",
    },
    difficulty: "Advanced",
    time: "30 min",
    specialty: "Cardiology",
    customData: {
      Name: "George Lee",
      Age: 70,
      Sex: "Male",
      ReasonForInquiring:
        "Nagigising ako sa gabi na hinihingal. Takot ako baka may malala sa puso ko.",
      ChiefComplaint: "Shortness of breath at night na 1 buwan na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 buwan ago. Nagigising sa gabi na hinihingal, kailangan umupo para makahinga. May kasamang cough minsan. Mas mabilis mapagod kahit simple activities.",
      PatientPhysicianRelationship:
        "Respetuoso at cooperative. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed cardiac history.",
      MedicalHistorySubjectiveData: {
        Cardiac:
          "May mild heart problem daw sabi noon, pero hindi ko na maalala details.",
        Hypertension: "Yes, pero controlled with medication.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Hypertension, mild heart condition.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy for age, pero may chronic conditions.",
      Nutrition: "Balanced diet, pero minsan hindi regular kumain.",
      SleepPattern: "6-7 hours, pero disturbed dahil sa shortness of breath.",
      Exercise: "Light walking lang, 20 minutes daily.",
      SmokingAlcohol: "Ex-smoker, 10 years na. Occasional beer lang.",
      EnvironmentalExposure: "Nakatira sa residential area, clean environment.",
      MedicationData: "Hypertension medication, heart medication.",
      RiskFactors: "Age, ex-smoker, hypertension, heart condition.",
      HealthStatusOfRelatives: "May heart disease ang kapatid ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Widow, 3 years na.",
        LifestyleHomeSituation: "Nakatira mag-isa sa bahay, may helper.",
        FinancialSupport: "Pension, stable naman.",
      },
      SignificantLifeEvents: "Death of wife 3 years ago.",
      WaterSource: "Clean water supply.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Well-groomed, mukhang tired, slightly short of breath.",
        SkinHairNails: "Normal for age.",
        Pulmonary: "Decreased breath sounds, may crackles.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "Mild arthritis sa joints.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Mild, normal for age.",
      HealthLiteracy: "Good, may medical background.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Cooperative, pero minsan anxious.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about heart problems",
        "Gusto ng detailed explanation",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried about being old.",
      StressOfIllnessOrLifeProblems: "Worried about health, living alone.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 buwan ago.",
        Fever: "Wala naman.",
        BodyAches: "Mild body aches.",
        Cough: "Occasional dry cough.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, decreased exercise tolerance.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "MB",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Cardiology",
    customData: {
      Name: "Mary Brown",
      Age: 62,
      Sex: "Female",
      ReasonForInquiring:
        "Namamaga ang mga binti ko at mabilis akong mapagod. Takot ako baka may malala.",
      ChiefComplaint: "Leg swelling at fatigue na 2 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 2 linggo ago. Progressive leg swelling, especially sa ankles. Mas mabilis mapagod kahit simple activities. May kasamang shortness of breath minsan.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo worried. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac:
          "May mild heart problem daw sabi noon, pero hindi ko na maalala details.",
        Hypertension: "Yes, pero controlled with medication.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Hypertension, mild heart condition, diabetes.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy for age, pero may chronic conditions.",
      Nutrition:
        "Balanced diet, pero may dietary restrictions dahil sa diabetes.",
      SleepPattern: "6-7 hours, pero minsan disturbed.",
      Exercise: "Light walking lang, 15 minutes daily.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Library work, air-conditioned.",
      MedicationData: "Hypertension medication, diabetes medication.",
      RiskFactors: "Age, hypertension, diabetes, sedentary lifestyle.",
      HealthStatusOfRelatives: "May diabetes at heart disease ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 2 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Stable job, pero may mga bayarin.",
      },
      SignificantLifeEvents: "Recent diagnosis ng diabetes.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired, slightly overweight.",
        SkinHairNails: "Normal for age.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "Bilateral leg swelling, especially ankles.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Mild, normal for age.",
      HealthLiteracy: "Good, may medical background as librarian.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Cooperative, pero minsan anxious.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about health",
        "Gusto ng detailed explanation",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried about being ignored.",
      StressOfIllnessOrLifeProblems:
        "Worried about health, managing multiple conditions.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 2 linggo ago.",
        Fever: "Wala naman.",
        BodyAches: "Mild body aches.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, decreased exercise tolerance.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "JS",
    },
    difficulty: "Expert",
    time: "40 min",
    specialty: "Cardiology",
    customData: {
      Name: "John Smith",
      Age: 48,
      Sex: "Male",
      ReasonForInquiring:
        "Bigla akong nakaramdam ng matinding sakit sa dibdib na umaabot sa kaliwang braso. Takot ako baka heart attack.",
      ChiefComplaint:
        "Sudden severe chest pain radiating to left arm na 30 minutes na.",
      HistoryOfPresentingIllness:
        "Bigla lang nagsimula 30 minutes ago. Severe crushing chest pain na umaabot sa left arm. May kasamang shortness of breath at sweating. Hindi nawawala kahit nagpapahinga.",
      PatientPhysicianRelationship:
        "Cooperative pero very anxious. Gusto ng immediate attention at reassurance.",
      InterviewTechniques:
        "Urgent approach, kailangan ng immediate assessment, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman akong alam na sakit sa puso.",
        Hypertension:
          "Minsan mataas ang BP ko, pero hindi regular na sinusukat.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Mild hypertension, pero hindi controlled.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero may risk factors.",
      Nutrition: "Irregular diet, madalas fast food dahil sa work.",
      SleepPattern: "6-7 hours, pero minsan kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Ex-smoker, 3 years na. Occasional beer lang.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Age, ex-smoker, hypertension, sedentary lifestyle, stress.",
      HealthStatusOfRelatives: "May heart disease ang tatay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 2 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Stable job, pero may mga bayarin.",
      },
      SignificantLifeEvents: "Recent stress sa work, financial pressure.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang in pain, diaphoretic.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Moderate, may basic health knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Very anxious, gusto ng immediate attention.",
      TypicalProblemPatientBehaviors: [
        "Very anxious about heart attack",
        "Gusto ng immediate attention",
        "May tendency mag-panic",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero very anxious about being ignored.",
      StressOfIllnessOrLifeProblems:
        "Very stressed about possible heart attack.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Sudden, 30 minutes ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman, chest pain lang.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Diaphoresis, anxiety.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "AB",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Neurology",
    customData: {
      Name: "Anna Bell",
      Age: 25,
      Sex: "Female",
      ReasonForInquiring:
        "Halos linggo-linggo akong sumasakit ang ulo. Takot ako baka may malala.",
      ChiefComplaint:
        "Frequent throbbing headaches na linggo-linggo na nangyayari.",
      HistoryOfPresentingIllness:
        "Nagsimula 3 buwan ago. Throbbing headaches na linggo-linggo. Minsan may kasamang nausea at sensitivity sa light. Mas sumasakit kapag stressed o kulang sa tulog.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa studies.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa studies.",
      SleepPattern: "5-6 hours lang, madalas kulang dahil sa studies.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang sa parties.",
      EnvironmentalExposure: "School environment, air-conditioned.",
      MedicationData: "Paracetamol lang, pero hindi na effective.",
      RiskFactors: "Stress, irregular sleep, poor diet, sedentary lifestyle.",
      HealthStatusOfRelatives: "May migraine ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa dormitory, may roommate.",
        FinancialSupport: "Student, supported by parents.",
      },
      SignificantLifeEvents: "Recent exams, stressed sa studies.",
      WaterSource: "Filtered water sa dorm.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "Tense neck and shoulder muscles.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, pero may brain fog minsan.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate diagnosis",
        "May tendency mag-self diagnose",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan frustrated sa slow progress.",
      StressOfIllnessOrLifeProblems: "Stressed sa studies at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 3 buwan ago.",
        Fever: "Wala naman.",
        BodyAches: "Neck and shoulder tension.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, sensitivity to light.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "FM",
    },
    difficulty: "Expert",
    time: "35 min",
    specialty: "Neurology",
    customData: {
      Name: "Frank Miller",
      Age: 60,
      Sex: "Male",
      ReasonForInquiring:
        "Bigla akong hindi makagalaw sa kanang bahagi ng katawan ko. Takot ako baka stroke.",
      ChiefComplaint: "Sudden weakness sa right side ng katawan na 2 oras na.",
      HistoryOfPresentingIllness:
        "Bigla lang nagsimula 2 oras ago. Hindi makagalaw sa right arm at leg. May kasamang slurred speech. Hindi nawawala kahit nagpapahinga.",
      PatientPhysicianRelationship:
        "Cooperative pero very anxious. Gusto ng immediate attention at reassurance.",
      InterviewTechniques:
        "Urgent approach, kailangan ng immediate assessment, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "May hypertension, pero controlled.",
        Hypertension: "Yes, pero controlled with medication.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Hypertension, diabetes.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy for age, pero may chronic conditions.",
      Nutrition:
        "Balanced diet, pero may dietary restrictions dahil sa diabetes.",
      SleepPattern: "6-7 hours, pero minsan disturbed.",
      Exercise: "Light walking lang, 30 minutes daily.",
      SmokingAlcohol: "Ex-smoker, 5 years na. Occasional beer lang.",
      EnvironmentalExposure: "Residential area, clean environment.",
      MedicationData: "Hypertension medication, diabetes medication.",
      RiskFactors: "Age, hypertension, diabetes, ex-smoker.",
      HealthStatusOfRelatives: "May stroke ang kapatid ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 2 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Pension, stable naman.",
      },
      SignificantLifeEvents: "Recent stress sa work, financial pressure.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance:
          "Well-groomed, mukhang anxious, right-sided weakness.",
        SkinHairNails: "Normal for age.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, may mild hypertension.",
        Musculoskeletal: "Right-sided weakness, decreased muscle tone.",
        Neurological: "Alert, pero may slurred speech at right-sided weakness.",
      },
      Forgetfulness: "Mild, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Very anxious, gusto ng immediate attention.",
      TypicalProblemPatientBehaviors: [
        "Very anxious about stroke",
        "Gusto ng immediate attention",
        "May tendency mag-panic",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero very anxious about being ignored.",
      StressOfIllnessOrLifeProblems: "Very stressed about possible stroke.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Sudden, 2 oras ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman, weakness lang.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Anxiety, slurred speech.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "SK",
    },
    difficulty: "Beginner",
    time: "20 min",
    specialty: "Neurology",
    customData: {
      Name: "Sophie King",
      Age: 40,
      Sex: "Female",
      ReasonForInquiring:
        "Namamanhid at parang may tusok-tusok ang mga kamay at paa ko. Takot ako baka may malala.",
      ChiefComplaint: "Tingling at numbness sa hands at feet na 1 buwan na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 buwan ago. Tingling sensation sa hands at feet. Minsan parang wala akong maramdaman. Mas malala sa gabi. May kasamang weakness minsan.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa work.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa work schedule.",
      SleepPattern: "6-7 hours, pero minsan kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Kitchen work, hot environment.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Stress, irregular diet, sedentary lifestyle.",
      HealthStatusOfRelatives: "May diabetes ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as chef.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological:
          "Alert and oriented, may decreased sensation sa extremities.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate diagnosis",
        "May tendency mag-overthink",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried na hindi seryosohin.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 buwan ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, anxiety.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "TW",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Neurology",
    customData: {
      Name: "Tom White",
      Age: 19,
      Sex: "Male",
      ReasonForInquiring:
        "Hindi ko maalala ang nangyari, pero sabi nila nanginginig daw ako. Takot ako baka may malala.",
      ChiefComplaint:
        "Seizure episode na 2 minutes duration, post-ictal confusion.",
      HistoryOfPresentingIllness:
        "Hindi ko maalala ang nangyari. Sabi ng witnesses, bigla daw akong bumagsak at nanginginig for 2 minutes. May post-ictal confusion. Wala akong memory ng event.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo confused. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history from witnesses.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, active lifestyle.",
      Nutrition: "Irregular diet, madalas fast food dahil sa school.",
      SleepPattern: "6-8 hours, pero minsan kulang dahil sa studies.",
      Exercise: "Active, may sports sa school.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional beer lang sa parties.",
      EnvironmentalExposure: "School environment, dormitory.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Irregular sleep, stress sa studies.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may girlfriend.",
        LifestyleHomeSituation: "Nakatira sa dormitory, may roommate.",
        FinancialSupport: "Student, supported by parents.",
      },
      SignificantLifeEvents: "Recent exams, stressed sa studies.",
      WaterSource: "Filtered water sa dorm.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, mukhang confused, post-ictal state.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert but confused, post-ictal state.",
      },
      Forgetfulness: "Post-ictal confusion, temporary.",
      HealthLiteracy: "Basic, may general health knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Confused, kailangan ng reassurance.",
      TypicalProblemPatientBehaviors: [
        "Confused about what happened",
        "Gusto ng detailed explanation",
        "May tendency mag-panic",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero confused about what happened.",
      StressOfIllnessOrLifeProblems:
        "Stressed about seizure, worried about future.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Sudden, 2 minutes duration.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Post-ictal confusion, fatigue.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "RK",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Neurology",
    customData: {
      Name: "Rachel Kim",
      Age: 35,
      Sex: "Female",
      ReasonForInquiring:
        "Kapag tumitingin ako sa kaliwa, dalawa ang nakikita ko. Takot ako baka may malala.",
      ChiefComplaint: "Double vision sa left gaze na 1 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 linggo ago. Double vision kapag tumitingin sa kaliwa. Hindi naman sa gitna o kanan. May kasamang headache minsan. Hindi nawawala kahit nagpapahinga.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed neurological history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero stressed sa work.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa work.",
      SleepPattern: "6-7 hours, pero minsan kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Stress, irregular sleep, poor diet, sedentary lifestyle.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as designer.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented, may diplopia sa left gaze.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate diagnosis",
        "May tendency mag-overthink",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried na hindi seryosohin.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 linggo ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Headache, anxiety.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "BC",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Infectious Disease",
    customData: {
      Name: "Ben Carter",
      Age: 22,
      Sex: "Male",
      ReasonForInquiring:
        "Masakit ang lalamunan ko, may lagnat, at namamaga ang leeg ko. Takot ako baka may malala.",
      ChiefComplaint: "Fever, sore throat, at swollen glands na 3 araw na.",
      HistoryOfPresentingIllness:
        "Nagsimula 3 araw ago. Sore throat na progressive. May fever na 38.5°C. Swollen glands sa leeg. May kasamang fatigue at decreased appetite.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng quick relief.",
      InterviewTechniques:
        "Gentle approach, kailangan ng reassurance, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero may current infection.",
      Nutrition: "Irregular diet, madalas fast food dahil sa school.",
      SleepPattern: "6-8 hours, pero disturbed dahil sa symptoms.",
      Exercise: "Active, may sports sa school.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional beer lang sa parties.",
      EnvironmentalExposure: "School environment, dormitory.",
      MedicationData: "Paracetamol lang, pero hindi na effective.",
      RiskFactors: "Close contact sa school, shared living space.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may girlfriend.",
        LifestyleHomeSituation: "Nakatira sa dormitory, may roommate.",
        FinancialSupport: "Student, supported by parents.",
      },
      SignificantLifeEvents: "Recent stress sa studies.",
      WaterSource: "Filtered water sa dorm.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, mukhang sick, febrile.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, slightly elevated due to fever.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Basic, may general health knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan impatient, gusto ng quick relief.",
      TypicalProblemPatientBehaviors: [
        "Gusto ng immediate relief",
        "Minsan nagmamadali sa consultation",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan frustrated sa symptoms.",
      StressOfIllnessOrLifeProblems: "Stressed about missing classes.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 3 araw ago.",
        Fever: "Yes, 38.5°C.",
        BodyAches: "Mild body aches.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "LF",
    },
    difficulty: "Advanced",
    time: "30 min",
    specialty: "Infectious Disease",
    customData: {
      Name: "Linda Fox",
      Age: 30,
      Sex: "Female",
      ReasonForInquiring:
        "Tatlong linggo na akong inuubo at madalas akong pawisan sa gabi. Takot ako baka may malala.",
      ChiefComplaint: "Persistent cough at night sweats na 3 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 3 linggo ago. Dry cough na persistent. Night sweats na drenching. May kasamang fatigue at decreased appetite. May mild fever minsan.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy, pero may current respiratory issue.",
      Nutrition: "Balanced diet, pero minsan irregular dahil sa work schedule.",
      SleepPattern: "6-7 hours, pero disturbed dahil sa cough at night sweats.",
      Exercise: "Light walking lang, 30 minutes daily.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Hospital environment, may exposure sa patients.",
      MedicationData: "Over-the-counter cough medicine, pero hindi effective.",
      RiskFactors: "Healthcare worker, exposure sa patients.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as nurse.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds, no wheezing.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may medical background as nurse.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate diagnosis",
        "May tendency mag-self diagnose",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried na hindi seryosohin.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 3 linggo ago.",
        Fever: "Mild fever minsan.",
        BodyAches: "Wala naman.",
        Cough: "Yes, persistent dry cough.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, night sweats, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "CL",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Infectious Disease",
    customData: {
      Name: "Chris Lee",
      Age: 27,
      Sex: "Male",
      ReasonForInquiring:
        "Kakauwi ko lang mula sa biyahe at ngayon ay nagtatae ako. Takot ako baka may malala.",
      ChiefComplaint: "Diarrhea after travel na 2 araw na.",
      HistoryOfPresentingIllness:
        "Nagsimula 2 araw ago, after returning from business trip sa India. Watery diarrhea na 5-6 times per day. May kasamang abdominal cramps at mild fever. Decreased appetite.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng quick relief.",
      InterviewTechniques:
        "Gentle approach, kailangan ng reassurance, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy, pero may current gastrointestinal issue.",
      Nutrition: "Irregular diet, madalas fast food dahil sa work.",
      SleepPattern: "6-8 hours, pero disturbed dahil sa diarrhea.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional beer lang sa parties.",
      EnvironmentalExposure: "Office work, recent travel sa India.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors:
        "Recent travel sa developing country, exposure sa different food.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may girlfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as engineer.",
      },
      SignificantLifeEvents: "Recent business trip sa India.",
      WaterSource:
        "Filtered water, pero may exposure sa different water sources during travel.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, mukhang tired, slightly dehydrated.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, slightly elevated due to dehydration.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan impatient, gusto ng quick relief.",
      TypicalProblemPatientBehaviors: [
        "Gusto ng immediate relief",
        "Minsan nagmamadali sa consultation",
        "May tendency mag-downplay symptoms",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan frustrated sa symptoms.",
      StressOfIllnessOrLifeProblems: "Stressed about missing work.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 2 araw ago.",
        Fever: "Mild fever.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, dehydration, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "MP",
    },
    difficulty: "Advanced",
    time: "20 min",
    specialty: "Infectious Disease",
    customData: {
      Name: "Maya Patel",
      Age: 34,
      Sex: "Female",
      ReasonForInquiring:
        "Nakagat ako ng lamok, tapos nagkaroon ako ng pantal at sumasakit ang mga kasu-kasuan ko. Takot ako baka may malala.",
      ChiefComplaint: "Rash at joint pain after mosquito bite na 1 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 linggo ago, after mosquito bite sa probinsya. Red rash sa bite site na lumalaki. Joint pain sa wrists at ankles. May kasamang mild fever at fatigue.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng detailed explanation at reassurance.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed history taking.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus: "Generally healthy, pero may current infection.",
      Nutrition: "Balanced diet, pero minsan irregular dahil sa work.",
      SleepPattern: "6-7 hours, pero disturbed dahil sa joint pain.",
      Exercise: "Light walking lang, 30 minutes daily.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Office work, recent travel sa probinsya.",
      MedicationData: "Paracetamol lang, pero hindi na effective.",
      RiskFactors: "Recent travel sa probinsya, mosquito exposure.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as lawyer.",
      },
      SignificantLifeEvents: "Recent vacation sa probinsya.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Red rash sa bite site.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "Joint tenderness sa wrists at ankles.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan anxious, gusto ng quick diagnosis.",
      TypicalProblemPatientBehaviors: [
        "Minsan anxious about symptoms",
        "Gusto ng immediate diagnosis",
        "May tendency mag-overthink",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero minsan worried na hindi seryosohin.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 linggo ago.",
        Fever: "Mild fever.",
        BodyAches: "Joint pain sa wrists at ankles.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, rash.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "PY",
    },
    difficulty: "Expert",
    time: "40 min",
    specialty: "Infectious Disease",
    customData: {
      Name: "Peter Young",
      Age: 50,
      Sex: "Male",
      ReasonForInquiring:
        "Sabi ng pamilya ko, parang iba raw ang kilos ko at mataas ang lagnat ko. Takot ako baka may malala.",
      ChiefComplaint: "High fever at confusion na 1 araw na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 araw ago. High fever na 39.5°C. Confusion at altered mental status. May kasamang headache at neck stiffness. Hindi makakain ng maayos.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo confused. Gusto ng immediate attention.",
      InterviewTechniques:
        "Urgent approach, kailangan ng immediate assessment, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "May mild hypertension, pero controlled.",
        Hypertension: "Yes, pero controlled with medication.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Hypertension, diabetes.",
        SurgeriesInjuriesAccidents: "Wala naman major surgery.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy for age, pero may chronic conditions.",
      Nutrition:
        "Balanced diet, pero may dietary restrictions dahil sa diabetes.",
      SleepPattern: "6-7 hours, pero disturbed dahil sa fever.",
      Exercise: "Light walking lang, 30 minutes daily.",
      SmokingAlcohol: "Ex-smoker, 3 years na. Occasional beer lang.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Hypertension medication, diabetes medication.",
      RiskFactors: "Age, hypertension, diabetes, ex-smoker.",
      HealthStatusOfRelatives: "May diabetes ang kapatid ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "May asawa, 2 anak.",
        LifestyleHomeSituation: "Nakatira sa QC, may bahay.",
        FinancialSupport: "Stable job as accountant.",
      },
      SignificantLifeEvents: "Recent stress sa work, financial pressure.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang confused, febrile.",
        SkinHairNails: "Normal for age.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, slightly elevated due to fever.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Confused, may neck stiffness.",
      },
      Forgetfulness: "Current confusion, acute onset.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Confused, kailangan ng immediate attention.",
      TypicalProblemPatientBehaviors: [
        "Confused about symptoms",
        "Gusto ng immediate attention",
        "May tendency mag-panic",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero confused about what's happening.",
      StressOfIllnessOrLifeProblems:
        "Very stressed about confusion, worried about work.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Sudden, 1 araw ago.",
        Fever: "Yes, 39.5°C.",
        BodyAches: "Generalized body aches.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Confusion, headache, neck stiffness.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "SH",
    },
    difficulty: "Beginner",
    time: "15 min",
    specialty: "Gastroenterology",
    customData: {
      Name: "Susan Hall",
      Age: 45,
      Sex: "Female",
      ReasonForInquiring:
        "Sumasakit ang tiyan ko tuwing pagkatapos kumain, lalo na kapag mamantika ang pagkain. Takot ako baka may malala.",
      ChiefComplaint: "Abdominal pain after eating na 2 linggo na.",
      HistoryOfPresentingIllness:
        "Nagsimula 2 linggo ago. Abdominal pain after meals, especially after fatty foods. May kasamang bloating at nausea. Pain na dull, sa upper abdomen. Hindi nawawala kahit nagpapahinga.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo frustrated. Gusto ng effective treatment.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed gastrointestinal history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy, pero may current gastrointestinal issue.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa work schedule.",
      SleepPattern: "6-7 hours, pero minsan kulang.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Kitchen work, hot environment.",
      MedicationData: "Antacids lang, pero hindi na effective.",
      RiskFactors: "Irregular diet, stress sa work, fatty food intake.",
      HealthStatusOfRelatives: "May ulcer ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as chef.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan frustrated, gusto ng quick solution.",
      TypicalProblemPatientBehaviors: [
        "Frustrated sa persistent symptoms",
        "Gusto ng immediate solution",
        "May tendency mag-self medicate",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero frustrated sa slow progress.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 2 linggo ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Bloating, nausea, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "AK",
    },
    difficulty: "Advanced",
    time: "25 min",
    specialty: "Gastroenterology",
    customData: {
      Name: "Alex Kim",
      Age: 29,
      Sex: "Male",
      ReasonForInquiring:
        "Ilang araw na akong nagtatae na may kasamang dugo at matindi ang pananakit ng tiyan ko. Takot ako baka may malala.",
      ChiefComplaint: "Bloody diarrhea at abdominal cramps na 3 araw na.",
      HistoryOfPresentingIllness:
        "Nagsimula 3 araw ago. Watery diarrhea na may blood. Abdominal cramps na severe. May kasamang fever at decreased appetite. 8-10 bowel movements per day.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo anxious. Gusto ng immediate attention.",
      InterviewTechniques:
        "Urgent approach, kailangan ng immediate assessment, focused history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy, pero may current gastrointestinal issue.",
      Nutrition: "Irregular diet, madalas fast food dahil sa work.",
      SleepPattern: "6-8 hours, pero disturbed dahil sa diarrhea.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional beer lang sa parties.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Wala naman regular medication.",
      RiskFactors: "Irregular diet, stress sa work.",
      HealthStatusOfRelatives: "Generally healthy ang family.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may girlfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as analyst.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Young, mukhang tired, slightly dehydrated.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate, slightly elevated due to dehydration.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Very anxious, gusto ng immediate attention.",
      TypicalProblemPatientBehaviors: [
        "Very anxious about bloody stool",
        "Gusto ng immediate attention",
        "May tendency mag-panic",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero very anxious about being ignored.",
      StressOfIllnessOrLifeProblems:
        "Very stressed about symptoms, worried about work.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 3 araw ago.",
        Fever: "Yes, low grade fever.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Fatigue, dehydration, decreased appetite.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "NP",
    },
    difficulty: "Beginner",
    time: "10 min",
    specialty: "Gastroenterology",
    customData: {
      Name: "Nina Park",
      Age: 38,
      Sex: "Female",
      ReasonForInquiring:
        "Palagi akong nakakaranas ng heartburn at minsan umaakyat ang pagkain pabalik sa bibig ko. Takot ako baka may malala.",
      ChiefComplaint: "Heartburn at regurgitation na 1 buwan na.",
      HistoryOfPresentingIllness:
        "Nagsimula 1 buwan ago. Heartburn na frequent, especially after meals. Regurgitation ng food at sour taste sa mouth. Mas malala kapag nakahiga. May kasamang chest discomfort.",
      PatientPhysicianRelationship:
        "Cooperative pero medyo frustrated. Gusto ng effective treatment.",
      InterviewTechniques:
        "Gentle approach, kailangan ng patience, detailed gastrointestinal history.",
      MedicalHistorySubjectiveData: {
        Cardiac: "Wala naman.",
        Hypertension: "Wala naman.",
      },
      PastHistory: {
        BirthDevelopment: "Normal.",
        ChildhoodIllnesses: "Usual childhood illnesses.",
        AdulthoodIllnesses: "Wala naman major illness.",
        SurgeriesInjuriesAccidents: "Wala naman.",
        Allergies: "Wala naman.",
      },
      CurrentHealthStatus:
        "Generally healthy, pero may current gastrointestinal issue.",
      Nutrition: "Irregular diet, madalas skip meals dahil sa work.",
      SleepPattern: "6-7 hours, pero disturbed dahil sa heartburn.",
      Exercise: "Walang regular exercise. Sedentary lifestyle.",
      SmokingAlcohol: "Hindi naninigarilyo. Occasional wine lang.",
      EnvironmentalExposure: "Office work, air-conditioned.",
      MedicationData: "Antacids lang, pero hindi na effective.",
      RiskFactors: "Irregular diet, stress sa work, lying down after meals.",
      HealthStatusOfRelatives: "May GERD ang nanay ko.",
      PersonalAndSocialHistory: {
        MaritalStatus: "Single, may boyfriend.",
        LifestyleHomeSituation: "Nakatira sa apartment, may roommate.",
        FinancialSupport: "Stable job as writer.",
      },
      SignificantLifeEvents: "Recent stress sa work, relationship issues.",
      WaterSource: "Filtered water.",
      VerminPests: "Wala naman.",
      PhysicalExaminationObjectiveData: {
        GeneralAppearance: "Well-groomed, mukhang tired.",
        SkinHairNails: "Normal.",
        Pulmonary: "Clear breath sounds.",
        Cardiovascular: "Regular rate and rhythm.",
        Musculoskeletal: "No obvious deformities.",
        Neurological: "Alert and oriented.",
      },
      Forgetfulness: "Minimal, normal for age.",
      HealthLiteracy: "Good, may basic medical knowledge.",
      LanguageBarriers: "Fluent sa English at Tagalog.",
      CultureMindset: "Modern, naniniwala sa medical science.",
      ChallengingBehavior: "Minsan frustrated, gusto ng quick solution.",
      TypicalProblemPatientBehaviors: [
        "Frustrated sa persistent symptoms",
        "Gusto ng immediate solution",
        "May tendency mag-self medicate",
      ],
      FeelingMistreatedMisunderstood:
        "Hindi naman, pero frustrated sa slow progress.",
      StressOfIllnessOrLifeProblems: "Stressed sa work at personal life.",
      CulturalDifferences: "Wala naman significant.",
      Symptoms: {
        Onset: "Gradual, 1 buwan ago.",
        Fever: "Wala naman.",
        BodyAches: "Wala naman.",
        Cough: "Wala naman.",
        NasalSymptoms: "Wala naman.",
        GeneralSigns: "Chest discomfort, sour taste in mouth.",
      },
      LanguageFluency: {
        English: "Fluent",
        Tagalog: "Fluent",
        OtherDialect: "None",
      },
    },
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
      avatarText: "HF",
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
      avatarText: "LS",
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
      avatarText: "GL",
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
      avatarText: "MB",
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
      avatarText: "JK",
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
      avatarText: "EB",
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
      avatarText: "LE",
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
      avatarText: "ML",
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
      avatarText: "NK",
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
      avatarText: "JW",
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
      avatarText: "ED",
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
      avatarText: "AC",
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
      avatarText: "SW",
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
      avatarText: "MJ",
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
