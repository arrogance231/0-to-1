"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import Image from "next/image";

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

interface EvaluationResultsProps {
  data: EvaluationData;
}

const EvaluationResults: React.FC<EvaluationResultsProps> = ({ data }) => {
  const router = useRouter();

  // Prepare chart data
  const diagnosisAccuracyData = [
    { name: "You", value: data.performance.diagnosisAccuracy.you, fill: "#EF4444" },
    { name: "Ave.", value: data.performance.diagnosisAccuracy.average, fill: "#EF4444" },
    { name: "Doctor", value: data.performance.diagnosisAccuracy.doctor, fill: "#EF4444" }
  ];

  const timeTakenData = [
    { name: "You", value: data.performance.timeTaken.you, fill: "#3B82F6" },
    { name: "Ave.", value: data.performance.timeTaken.average, fill: "#3B82F6" },
    { name: "Doctor", value: data.performance.timeTaken.doctor, fill: "#3B82F6" }
  ];

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          src="/star.svg"
          alt="star"
          width={16}
          height={16}
          className={i < data.stars ? "opacity-100" : "opacity-30"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Image src="/heart.svg" alt="heart" width={16} height={16} />
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Image src="/flame.svg" alt="fire" width={12} height={12} />
            <span>{data.stats.fire}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/droplet.svg" alt="droplet" width={12} height={12} />
            <span>{data.stats.droplets}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/heart.svg" alt="heart" width={12} height={12} />
            <span>{data.stats.hearts}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 pb-8">
        {/* Score and Character */}
        <div className="text-center mb-6">
          <div className="text-6xl font-bold mb-2">{data.score} / 100</div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {renderStars()}
          </div>
          <div className="text-sm opacity-75 mb-4">+ 364 🚀 12</div>
          
          {/* Character */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/aling.svg"
              alt="Character"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Detailed Scores */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 w-full max-w-sm">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{data.detailedScores.sessionTime.score}/{data.detailedScores.sessionTime.total}</div>
              <div className="text-xs opacity-75">Session Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{data.detailedScores.diagnosisAccuracy.score}/{data.detailedScores.diagnosisAccuracy.total}</div>
              <div className="text-xs opacity-75">Diagnosis Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{data.detailedScores.procedure.score}/{data.detailedScores.procedure.total}</div>
              <div className="text-xs opacity-75">Procedure</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{data.detailedScores.ethics.score}/{data.detailedScores.ethics.total}</div>
              <div className="text-xs opacity-75">Ethics</div>
            </div>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="flex gap-2 mb-8">
          <button 
            onClick={() => router.push('/')}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-white font-medium transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => router.push('/clinic')}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-white font-medium transition-colors"
          >
            New Patient
          </button>
          <button 
            onClick={() => router.push('/customize')}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-white font-medium transition-colors"
          >
            Change Difficulty
          </button>
        </div>

        {/* White Content Cards */}
        <div className="w-full max-w-4xl space-y-6">
          {/* Performance Comparison */}
          <div className="bg-white rounded-2xl p-6 text-gray-800">
            <h2 className="text-xl font-bold mb-6 text-center">Performance Comparison</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Diagnosis Accuracy Chart */}
              <div>
                <h3 className="text-center font-semibold mb-4">Diagnosis Accuracy</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={diagnosisAccuracyData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
                      <Bar dataKey="value" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Time Taken Chart */}
              <div>
                <h3 className="text-center font-semibold mb-4">Time Taken (minutes)</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeTakenData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 15]} axisLine={false} tickLine={false} />
                      <Bar dataKey="value" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Consensus Comparison */}
          <div className="bg-white rounded-2xl p-6 text-gray-800">
            <h2 className="text-xl font-bold mb-6 text-center">Consensus Comparison</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Doctor Consensus */}
              <div>
                <h3 className="text-center font-semibold mb-4">Doctor</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.consensus.doctor}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {data.consensus.doctor.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 text-xs">
                  {data.consensus.doctor.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PocketPatient Consensus */}
              <div>
                <h3 className="text-center font-semibold mb-4">PocketPatient</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.consensus.pocketPatient}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {data.consensus.pocketPatient.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 text-xs">
                  {data.consensus.pocketPatient.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Percentile Score */}
          <div className="bg-white rounded-2xl p-6 text-gray-800">
            <h2 className="text-xl font-bold mb-4">Percentile Score</h2>
            <p className="text-sm text-gray-600 mb-4">
              Your diagnosis was at the {data.percentileScore}th percentile!
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.percentileData}>
                  <XAxis dataKey="score" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Area type="monotone" dataKey="percentile" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              <Image src="/replay.svg" alt="replay" width={20} height={20} />
              Replay Case
            </button>
            <button 
              onClick={() => router.push('/clinic')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              <Image src="/plus.svg" alt="plus" width={20} height={20} />
              New Case
            </button>
          </div>

          {/* Suggestions for Improvement */}
          <div className="bg-white rounded-2xl p-6 text-gray-800">
            <h2 className="text-xl font-bold mb-4">Suggestions for Improvement</h2>
            <div className="space-y-4">
              {data.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image src={suggestion.icon} alt="suggestion" width={24} height={24} className="mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{suggestion.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Feedback */}
          <div className="bg-white rounded-2xl p-6 text-gray-800 mb-8">
            <h2 className="text-xl font-bold mb-4">Overall Feedback:</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{data.overallFeedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationResults;