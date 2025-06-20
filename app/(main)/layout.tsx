import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <NavBar />
        <main className='flex-1 pt-16 pb-20'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
