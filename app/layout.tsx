import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/contexts/ChatContext";
import { ReactNode } from "react";
import Background from "@/components/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
      <body className={`${inter.variable} ${bricolage.variable}`}>
        <Background />
        <div className='relative z-10'>
          <ChatProvider>{children}</ChatProvider>
        </div>
      </body>
    </html>
  );
}
