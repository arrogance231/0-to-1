import React, { ReactNode } from "react";
import ChatNavBar from "@/components/chat/ChatNavBar";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className='flex flex-col h-screen w-full'
      style={{ overflow: "visible" }}
    >
      <ChatNavBar />
      <main className='flex-1 flex flex-col' style={{ overflow: "visible" }}>
        {children}
      </main>
    </div>
  );
}
