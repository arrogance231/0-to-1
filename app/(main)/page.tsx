"use client";
export const dynamic = "force-dynamic";
import React, { Suspense, useState } from "react";
import CallToAction from "@/components/CallToAction";
import ClinicalTopics from "@/components/ClinicalTopics";
import RecentActivity from "@/components/RecentActivity";
import Stats from "@/components/Stats";
import Loading from "@/components/Loading";
import ActivityHistory from "@/components/ActivityHistory";
import TrendingMedicalNews from "@/components/TrendingMedicalNews";
import Analytics from "@/components/Analytics";
import NewPatientModal from "@/components/NewPatientModal";
import Footer from "@/components/Footer";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full mx-auto px-2 sm:px-4 md:px-8 pt-6 pb-32 space-y-6 rounded-3xl min-h-screen'>
        <CallToAction setModalOpen={setModalOpen} />
        <Stats />
        <ClinicalTopics />
        <RecentActivity />
        <TrendingMedicalNews />
        <Analytics />
        <ActivityHistory />
        <NewPatientModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
      {!isModalOpen && <Footer />}
    </Suspense>
  );
};

export default Home;
