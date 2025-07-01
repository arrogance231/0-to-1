"use client";
import NavBar from "@/components/NavBar";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 pt-6 pb-36 space-y-6 rounded-3xl min-h-screen'>
        <NavBar />
        <main className='flex-1 pt-16 pb-20'>{children}</main>
      </div>
    </>
  );
}
