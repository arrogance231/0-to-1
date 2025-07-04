"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EvaluationResults from "@/components/EvaluationResults";

interface EvaluationData {
  score: number;
  patientName: string;
  sessionTime: number;
  stars: number;
  stats: {
    fire: number;
    droplets: number;
    hearts: number;
  };
  performance: {
    diagnosisAccuracy: {
      you: number;
      average: number;
      doctor: number;
    };
    timeTaken: {
      you: number;
      average: number;
      doctor: number;
    };
  };
  consensus: {
    doctor: Array<{ name: string; value: number; color: string }>;
    pocketPatient: Array<{ name: string; value: number; color: string }>;
  };
  percentileScore: number;
  percentileData: Array<{ score: number; percentile: number }>;
  suggestions: Array<{ icon: string; title: string }>;
  overallFeedback: string;
  detailedScores: {
    sessionTime: { score: number; total: number };
    diagnosisAccuracy: { score: number; total: number };
    procedure: { score: number; total: number };
    ethics: { score: number; total: number };
  };
}

export default function EvaluationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [evaluationData, setEvaluationData] = useState<EvaluationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get evaluation data from URL params or sessionStorage
    const scoreParam = searchParams.get('score');
    const patientName = searchParams.get('patientName') || 'Patient';
    
    if (scoreParam) {
      // Mock comprehensive evaluation data matching the design
      const mockEvaluationData = {
        score: parseInt(scoreParam) || 90,
        patientName,
        sessionTime: 12.5,
        stars: 4,
        stats: {
          fire: 12,
          droplets: 1736,
          hearts: 5
        },
        performance: {
          diagnosisAccuracy: {
            you: 86,
            average: 80,
            doctor: 96
          },
          timeTaken: {
            you: 8.42,
            average: 12.03,
            doctor: 6.21
          }
        },
        consensus: {
          doctor: [
            { name: "Pneumonia", value: 45, color: "#3B82F6" },
            { name: "Bronchitis", value: 35, color: "#EF4444" },
            { name: "Other", value: 20, color: "#F59E0B" }
          ],
          pocketPatient: [
            { name: "Bronchitis", value: 50, color: "#EF4444" },
            { name: "Pneumonia", value: 30, color: "#3B82F6" },
            { name: "Other", value: 20, color: "#F59E0B" }
          ]
        },
        percentileScore: 87,
        percentileData: [
          { score: 0, percentile: 0 },
          { score: 20, percentile: 5 },
          { score: 40, percentile: 15 },
          { score: 60, percentile: 35 },
          { score: 70, percentile: 50 },
          { score: 80, percentile: 70 },
          { score: 87, percentile: 87 },
          { score: 90, percentile: 92 },
          { score: 95, percentile: 97 },
          { score: 100, percentile: 99 }
        ],
        suggestions: [
          {
            icon: "/conversation.svg",
            title: "Ensure to spend adequate time in conversation with the patient to gather a comprehensive history."
          },
          {
            icon: "/stethoscope.svg", 
            title: "Consider differential diagnoses for unexplained weight loss and loss of appetite, such as hypothyroidism, gastrointestinal disorders, or malignancy."
          },
          {
            icon: "/clock.svg",
            title: "Maintain professionalism by thoroughly engaging with the patient and addressing their concerns."
          }
        ],
        overallFeedback: "The student failed to provide an appropriate session time and missed the opportunity to explore differential diagnoses for the patient's symptoms. Although the primary diagnosis is appropriate, it is not a common primary diagnosis for the symptoms presented. A more thorough and structured approach, including a detailed patient history and physical exam.",
        detailedScores: {
          sessionTime: { score: 0, total: 25 },
          diagnosisAccuracy: { score: 0, total: 25 },
          procedure: { score: 0, total: 25 },
          ethics: { score: 0, total: 25 }
        }
      };
      
      setEvaluationData(mockEvaluationData);
    }
    
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-lg">Loading evaluation...</div>
      </div>
    );
  }

  if (!evaluationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-lg">No evaluation data found</div>
      </div>
    );
  }

  return <EvaluationResults data={evaluationData} />;
}