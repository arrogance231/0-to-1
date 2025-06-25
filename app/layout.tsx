import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Poppins, Kalam } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/contexts/ChatContext";
import { ReactNode } from "react";
import Background from "@/components/Background";
import OnboardingGuard from "@/components/OnboardingGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PocketPatient",
  description:
    "PocketPatient is a platform for patients to get medical advice and support.",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`font-sans ${inter.variable} ${bricolage.variable} ${poppins.variable} ${kalam.variable}`}
        style={{ background: "#f3fafb" }}
      >
        <Background />
        <div className='relative z-10'>
          <ChatProvider>
            <OnboardingGuard>{children}</OnboardingGuard>
          </ChatProvider>
        </div>
      </body>
    </html>
  );
}
