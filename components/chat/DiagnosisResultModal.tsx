"use client";
import React from "react";

interface Summary {
  correct: string[];
  incorrect: string[];
  improvements: string[];
}

interface Feedback {
  score: number;
  sessionTimeScore: number;
  diagnosisAccuracyScore: number;
  procedureScore: number;
  ethicsScore: number;
  summary: Summary;
  overallFeedback: string;
}

interface DiagnosisResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedback: Feedback | null;
}

const DiagnosisResultModal: React.FC<DiagnosisResultModalProps> = ({
  isOpen,
  onClose,
  feedback,
}) => {
  if (!isOpen || !feedback) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[95vh] overflow-y-auto shadow-xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Diagnosis Feedback</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Scores */}
          <div>
            <h3 className="font-semibold mb-2">Scores</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li>Overall: <span className="font-medium">{feedback.score}/100</span></li>
              <li>Session Time: {feedback.sessionTimeScore}/25</li>
              <li>Diagnosis Accuracy: {feedback.diagnosisAccuracyScore}/40</li>
              <li>Procedure: {feedback.procedureScore}/20</li>
              <li>Ethics: {feedback.ethicsScore}/15</li>
            </ul>
          </div>

          {/* Summary */}
          <div>
            <h3 className="font-semibold mb-2">Summary</h3>
            <div className="text-sm space-y-3">
              <div>
                <span className="font-medium text-green-600">Correct:</span>
                <ul className="list-disc list-inside">
                  {feedback.summary.correct.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium text-red-600">Incorrect:</span>
                <ul className="list-disc list-inside">
                  {feedback.summary.incorrect.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium text-blue-600">Improvements:</span>
                <ul className="list-disc list-inside">
                  {feedback.summary.improvements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Overall feedback paragraph */}
          <div>
            <h3 className="font-semibold mb-2">Overall Feedback</h3>
            <p className="text-sm text-gray-800 whitespace-pre-line">
              {feedback.overallFeedback}
            </p>
          </div>

          {/* Placeholder for charts */}
          <div>
            <h3 className="font-semibold mb-2">Visual Breakdown (Coming Soon)</h3>
            <p className="text-xs text-gray-500">
              Charts comparing your scores to cohort averages will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResultModal;
