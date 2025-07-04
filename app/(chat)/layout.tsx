import React, { ReactNode } from "react";
import ChatNavBar from "@/components/chat/ChatNavBar";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 flex flex-col'>
        <ChatNavBar />
        <main className='flex-1 flex flex-col pb-36 safe-area-bottom'>
          {children}
        </main>
      </div>
    </div>
  );
}
