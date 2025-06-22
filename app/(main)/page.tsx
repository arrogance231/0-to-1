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
      <div className='w-full max-w-md mx-auto px-4 space-y-6'>
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
