"use client";
export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import ClinicalTopics from "@/components/ClinicalTopics";
import RecentActivity from "@/components/RecentActivity";
import Stats from "@/components/Stats";
import Loading from "@/components/Loading";
import ActivityHistory from "@/components/ActivityHistory";
import TrendingMedicalNews from "@/components/TrendingMedicalNews";
import Analytics from "@/components/Analytics";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full mx-auto px-2 sm:px-4 md:px-8 pt-6 pb-32 space-y-6 rounded-3xl min-h-screen'>
        <CallToAction />
        <Stats />
        <ClinicalTopics />
        <RecentActivity />
        <TrendingMedicalNews />
        <Analytics />
        <ActivityHistory />
      </div>
    </Suspense>
  );
};

export default Home;
