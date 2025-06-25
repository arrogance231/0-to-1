"use client";
import { useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface OnboardingGuardProps {
  children: ReactNode;
}

const ONBOARDING_KEY = "onboardingComplete";

export default function OnboardingGuard({ children }: OnboardingGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const complete = localStorage.getItem(ONBOARDING_KEY);
      const isOnboarding = pathname === "/onboarding";

      if (!complete && !isOnboarding) {
        router.replace("/onboarding");
      }
    }
  }, [router, pathname]);

  // Optionally, you could add a loading state here
  // For now, just render children (will redirect if not onboarded)
  return <>{children}</>;
}
