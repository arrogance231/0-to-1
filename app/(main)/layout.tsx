"use client";
import NavBar from "@/components/NavBar";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='w-full min-h-screen pb-36 space-y-6'>
        <NavBar />
        <main className='flex-1 pt-16 pb-20'>{children}</main>
      </div>
    </>
  );
}
