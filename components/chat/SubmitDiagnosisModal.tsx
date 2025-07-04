"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getOpenAIResponse } from "@/lib/openai";

interface SubmitDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientName: string;
  sessionTime: number; // in minutes
  evaluations: ("good" | "bad" | "neutral")[];
  conversationHistory: string;
}



const SubmitDiagnosisModal: React.FC<SubmitDiagnosisModalProps> = ({
  isOpen,
  onClose,
  patientName,
  sessionTime,
  evaluations,
  conversationHistory,
}) => {
  const router = useRouter();
  const [diagnosis, setDiagnosis] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!diagnosis.trim()) return;

    setIsSubmitting(true);
    setError(null);
    try {
      const goodCount = evaluations.filter((e) => e === "good").length;
      const badCount = evaluations.filter((e) => e === "bad").length;
      const neutralCount = evaluations.filter((e) => e === "neutral").length;

      const prompt = `You are a medical AI evaluator. A medical student has completed a patient consultation with ${patientName} and is submitting their diagnosis for evaluation.

PATIENT CONSULTATION HISTORY:
${conversationHistory}

STUDENT'S DIAGNOSIS:
${diagnosis}

CONSULTATION METRICS:
- Session Time: ${sessionTime} minutes
- Good responses: ${goodCount}
- Bad responses: ${badCount}
- Neutral responses: ${neutralCount}

EVALUATION CRITERIA:
1. Session Time (25 points): Appropriate time spent with patient
2. Diagnosis Accuracy (40 points): Correct identification of condition
3. Procedure (20 points): Proper diagnostic approach and methodology
4. Ethics (15 points): Professional conduct and patient care

IMPORTANT: The correct diagnosis was provided by a licensed doctor. Evaluate the student's diagnosis based on the doctor's direction and medical standards.

Please provide a JSON response with the following structure:
{
  "score": number (0-100),
  "sessionTimeScore": number (0-25),
  "diagnosisAccuracyScore": number (0-40),
  "procedureScore": number (0-20),
  "ethicsScore": number (0-15),
  "summary": {
    "correct": ["list of correct aspects"],
    "incorrect": ["list of incorrect aspects"],
    "improvements": ["suggestions for improvement"]
  },
  "overallFeedback": "comprehensive feedback string"
}`;

      const response = await getOpenAIResponse(prompt);

      try {
        let jsonStr = response.trim();
        if (jsonStr.startsWith("```json")) {
          jsonStr = jsonStr
            .replace(/^```json/, "")
            .replace(/```$/, "")
            .trim();
        }
        JSON.parse(jsonStr);
        
        // Redirect to evaluation page with score
        
        router.push(`/evaluation`);
        onClose();
      } catch (parseError) {
        console.error("Failed to parse AI response:", parseError);
        // Fallback to evaluation page with default score
        
        router.push(`/evaluation`);
        onClose();
      }
    } catch (error) {
      console.error("Failed to evaluate diagnosis:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to evaluate diagnosis. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6 border-b border-gray-200'>
          <h2 className='text-xl font-bold text-gray-900 mb-2'>
            Submit Diagnosis
          </h2>
          <p className='text-sm text-gray-600'>
            Provide your final diagnosis for {patientName}. This will be
            evaluated by AI based on medical standards.
          </p>
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-50 border border-red-200 rounded-lg mx-6 mt-6'>
            <p className='text-red-700 text-sm'>{error}</p>
          </div>
        )}

        <div className='p-6'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Your Diagnosis
            </label>
            <textarea
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              placeholder='Enter your diagnosis here...'
              className='w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled={isSubmitting}
            />
          </div>

          <div className='mb-6 p-4 bg-blue-50 rounded-lg'>
            <h3 className='font-semibold text-blue-900 mb-2'>
              Evaluation Criteria:
            </h3>
            <ul className='text-sm text-blue-800 space-y-1'>
              <li>• Session Time (25 points)</li>
              <li>• Diagnosis Accuracy (40 points)</li>
              <li>• Procedure (20 points)</li>
              <li>• Ethics (15 points)</li>
            </ul>
            <p className='text-xs text-blue-700 mt-2 italic'>
              Note: Evaluation is based on medical standards and
              doctor-provided correct diagnosis.
            </p>
          </div>

          <div className='flex gap-3'>
            <button
              onClick={onClose}
              className='flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition'
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!diagnosis.trim() || isSubmitting}
              className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50'
            >
              {isSubmitting ? "Evaluating..." : "Submit & Evaluate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitDiagnosisModal;
