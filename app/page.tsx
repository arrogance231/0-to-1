import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Medical Simulation</h1>
        <div className="space-y-4">
          <Link 
            href="/clinic" 
            className="block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-colors"
          >
            Start Clinic Session
          </Link>
          <Link 
            href="/exercise/test/evaluation?score=90&patientName=Maria Santos" 
            className="block bg-orange-500 hover:bg-orange-600 rounded-lg px-6 py-3 transition-colors"
          >
            🧪 Test Evaluation Page
          </Link>
        </div>
      </div>
    </div>
  );
}